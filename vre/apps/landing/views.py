#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import urlparse

import requests
from django.conf import settings
from django.core.urlresolvers import reverse_lazy
from django.http import HttpResponse
from django.shortcuts import redirect
from django.template.response import TemplateResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import FormView, TemplateView, View

from vre.apps.landing.forms import ContactForm
from vre.apps.newsletter.models import Subscriber
from vre.core.utils import send_email


class HomepageView(TemplateView):
    template_name = 'landing/index.html'


class DevelopmentsView(TemplateView):
    template_name = 'landing/developments.html'


class CotizarView(TemplateView):
    template_name = 'landing/cotizar.html'


class AboutUsView(TemplateView):
    template_name = 'landing/about.html'


class PrivacyNoticeView(TemplateView):
    template_name = 'landing/privacy_notice.html'


class VisitUsView(View):
    def get(self, request):
        return TemplateResponse(request, 'landing/visit.html')
    def post(self, request):
        ctx = {
            'name': request.POST.get('name'),
            'email': request.POST.get('email'),
            'message': request.POST.get('message'),
            'phone': request.POST.get('phone'),
            'date': request.POST.get('hidden_date'),
        }
        send_email(
            subject='email/subjects/visit_showroom.txt',
            body='email/visit_showroom.html',
            from_email="VRE - Showroom <hola@%s>" % (
                settings.MAILGUN_SERVER_NAME
            ),
            to_email=[settings.DEFAULT_EMAIL_TO, 'pamela.piedras@vre.com.mx'],
            context=ctx
        )
        send_email(
            subject='email/subjects/contact_user.txt',
            body='email/showroom_user.html',
            from_email="VRE - Notificaciones <hola@%s>" % (
                settings.MAILGUN_SERVER_NAME
            ),
            to_email=[request.POST.get('email')],
            context=ctx
        )
        endpoint = urlparse.urljoin(
            settings.MAILCHIMP_API_ROOT,
            'lists/%s/members/' % settings.MAILCHIMP_VISIT_LIST
        )
        data = {
            "email_address": request.POST.get('email'),
            "status": "subscribed",
        }
        data = json.dumps(data)
        response = requests.post(
        endpoint, auth=('apikey', settings.MAILCHIMP_API_KEY), data=data)
        subscriber = Subscriber(
            email=request.POST.get('email'),
            name=request.POST.get('name', None),
            phone=request.POST.get('phone', None),
            source=request.POST.get('source'),
        )
        subscriber.save()
        return redirect(reverse_lazy('landing:visitanos_success'))


class ConditionsTermsView(TemplateView):
    template_name = 'landing/conditions_terms.html'


class DevelopmentDemoView(TemplateView):
    template_name = 'develops/develop_detail.html'

    def get_context_data(self, **kwargs):
        context = super(DevelopmentDemoView, self).get_context_data(**kwargs)
        context['develop'] = "indiana"
        return context


class DevelopmentDemo2View(TemplateView):
    template_name = 'develops/develop_detail_2.html'

    def get_context_data(self, **kwargs):
        context = super(DevelopmentDemo2View, self).get_context_data(**kwargs)
        context['develop'] = "dakota"
        return context

class DevelopmentDemo3View(TemplateView):
    template_name = 'develops/develop_detail_3.html'

    def get_context_data(self, **kwargs):
        context = super(DevelopmentDemo3View, self).get_context_data(**kwargs)
        context['develop'] = "tlacotalpan"
        return context

class DevelopmentDemo4View(TemplateView):
    template_name = 'develops/develop_detail_4.html'

    def get_context_data(self, **kwargs):
        context = super(DevelopmentDemo4View, self).get_context_data(**kwargs)
        context['develop'] = "nebraska"
        return context


class DevelopmentDemo5View(TemplateView):
    template_name = 'develops/develop_detail_5.html'

    def get_context_data(self, **kwargs):
        context = super(DevelopmentDemo5View, self).get_context_data(**kwargs)
        context['develop'] = "chicago"
        return context

class DevelopmentCarolinaView(TemplateView):
    template_name = 'develops/develop_carolina.html'

    def get_context_data(self, **kwargs):
        context = super(DevelopmentCarolinaView, self).get_context_data(**kwargs)
        context['develop'] = "carolina"
        return context

class DevelopmentBeisteguiView(TemplateView):
    template_name = 'develops/develop_beistegui.html'

    def get_context_data(self, **kwargs):
        context = super(DevelopmentBeisteguiView, self).get_context_data(**kwargs)
        context['develop'] = "beistegui"
        return context

class DevelopmentAtlantaView(TemplateView):
    template_name = 'develops/develop_atlanta186.html'

    def get_context_data(self, **kwargs):
        context = super(DevelopmentAtlantaView, self).get_context_data(**kwargs)
        context['develop'] = "atlanta"
        return context

class ContactViewOld(FormView):
    template_name = 'landing/contact.html'
    form_class = ContactForm
    success_url = reverse_lazy('landing:contact_success')

    def form_valid(self, form):
        form.save()
        return super(ContactView, self).form_valid(form)

    def form_invalid(self, form):
        return self.render_to_response(self.get_context_data())


class ContactView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(ContactView, self) \
            .dispatch(request, *args, **kwargs)

    def get(self, request):
        return TemplateResponse(request, 'landing/contact.html')

    def post(self, request):
        name = request.POST.get('firstname')
        email = request.POST.get('email')
        message = request.POST.get('message')
        phone = request.POST.get('phone')
        ctx = {
            'name': name,
            'email': email,
            'phone': phone,
            'message': message
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
        endpoint = urlparse.urljoin(
            settings.MAILCHIMP_API_ROOT,
            'lists/%s/members/' % settings.MAILCHIMP_CONTACT_LIST
        )
        data = {
            "email_address": email,
            "status": "subscribed",
        }
        data = json.dumps(data)
        response = requests.post(
            endpoint, auth=('apikey', settings.MAILCHIMP_API_KEY), data=data)
        subscriber = Subscriber(
            email=email,
            name=name,
            phone=phone,
            source='contact',
        )
        subscriber.save()
        return HttpResponse('1')

class ContactSuccessView(TemplateView):
    template_name = 'landing/success_contact.html'
