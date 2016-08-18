#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf import settings
from django.http import JsonResponse
from django.views.generic import View

from vre.core.config import MailChimpConfig

from .models import Subscriber

import requests
import json
import urlparse


class NewsletterView(View):
    def post(self, request):
        config = MailChimpConfig()
        if request.POST.get('source') == 'indiana':
            list_id = settings.MAILCHIMP_INDIANA_LIST
        elif request.POST.get('source') == 'dakota':
            list_id = settings.MAILCHIMP_DAKOTA_LIST
        else :
            list_id = settings.MAILCHIMP_NEWSLETTER_LIST
        endpoint = urlparse.urljoin(config.api_root, 'lists/%s/members/' % list_id)
        data = {
            "email_address": request.POST.get('email'),
            "status": "subscribed",
        }
        data = json.dumps(data)
        response = requests.post(endpoint, auth=('apikey', config.apikey), data=data)
        d = json.loads(response.content)
        if d.get('status') == 'subscribed':
            subscriber = Subscriber(
                email=request.POST.get('email'),
                name=request.POST.get('name', None),
                phone=request.POST.get('phone', None),
                source=request.POST.get('source'),
            )
            subscriber.save()
        return JsonResponse(response.json())