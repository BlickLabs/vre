#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf import settings
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View
from django.conf import settings

from vre.core.utils import send_email
from .models import Subscriber

import requests
import json
import urlparse


class NewsletterView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(NewsletterView, self).dispatch(request, *args, **kwargs)
    def post(self, request):
        source = request.POST.get('source')
        email = request.POST.get('email')
        if 'name' in request.POST:
            name = request.POST.get('name')
        else:
            name = request.POST.get('firstname')
        phone = request.POST.get('phone')
        list_id = self.get_list_id(request)
        endpoint = urlparse.urljoin(
            settings.MAILCHIMP_API_ROOT, 'lists/%s/members/' % list_id
        )
        data = {
            "email_address": email,
            "status": "subscribed",
        }
        data = json.dumps(data)
        response = requests.post(
            endpoint, auth=('apikey', settings.MAILCHIMP_API_KEY), data=data)
        d = json.loads(response.content)
        if name:
            ctx_user_email = {'name': request.POST.get('name'), }
        else:
            ctx_user_email = {'name': '', }
        if email:
            try:
                subscriber = Subscriber.objects.get(
                    email=email,
                    source=request.POST.get('source')
                )
            except Subscriber.DoesNotExist:
                subscriber = Subscriber(
                    email=email,
                    name=name,
                    phone=phone,
                    source=request.POST.get('source'),
                )
                subscriber.save()

            if source == 'indiana' or source == 'dakota' or \
                            source == 'tlacotalpan':
                context = {
                    'newsletter': 'False',
                    'brochure': 'True',
                    'brochure_title': source,
                    'email': email
                }
            else:
                context = {
                    'newsletter': 'True',
                    'brochure': 'False',
                    'brochure_title': None,
                    'email': email
                }

            if d.get('status') == 'subscribed':
                if source == 'contact':
                    ctx = {
                        'name': name,
                        'email': email,
                        'phone': phone,
                        'message': None
                    }
                    send_email(
                        subject='email/subjects/contact.txt',
                        body='email/contact.html',
                        from_email="VRE - Contacto <hola@%s>" % (
                            settings.MAILGUN_SERVER_NAME
                        ),
                        to_email=[settings.DEFAULT_EMAIL_TO],
                        context=ctx
                    )
                    send_email(
                        subject='email/subjects/contact_user.txt',
                        body='email/contact_user.html',
                        from_email="VRE - Notificaciones <hola@%s>" % (
                            settings.MAILGUN_SERVER_NAME
                        ),
                        to_email=[email],
                        context=ctx
                    )
                else:
                    send_email(
                        subject='email/subjects/newsletter.txt',
                        body='email/newsletter.html',
                        from_email="VRE - Notificacion <hola@%s>" % (
                            settings.MAILGUN_SERVER_NAME
                        ),
                        to_email=[settings.DEFAULT_EMAIL_TO],
                        context=context
                    )
                    send_email(
                        subject='email/subjects/contact_user.txt',
                        body='email/contact_user.html',
                        from_email="VRE - Notificaciones <hola@%s>" % (
                            settings.MAILGUN_SERVER_NAME
                        ),
                        to_email=[email],
                        context=ctx_user_email
                    )
        return JsonResponse(response.json())

    def get_list_id(self, request):
        if request.POST.get('source') == 'indiana':
            list_id = settings.MAILCHIMP_INDIANA_LIST
        elif request.POST.get('source') == 'dakota':
            list_id = settings.MAILCHIMP_DAKOTA_LIST
        elif request.POST.get('source') == 'tlacotalpan':
            list_id = settings.MAILCHIMP_TLACOTALPAN_LIST
        elif request.POST.get('source') == 'nebraska':
            list_id = settings.MAILCHIMP_NEBRASKA_LIST
        elif request.POST.get('source') == 'chicago':
            list_id = settings.MAILCHIMP_CHICAGO_LIST
        elif request.POST.get('source') == 'contact':
            list_id = settings.MAILCHIMP_CONTACT_LIST
        else:
            list_id = settings.MAILCHIMP_NEWSLETTER_LIST

        return list_id

