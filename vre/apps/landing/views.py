#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.core.urlresolvers import reverse_lazy
from django.http import JsonResponse
from django.views.generic import FormView, TemplateView, View

from vre.apps.landing.forms import ContactForm

from vre.core.config import MailChimpConfig

import requests
import json
import urlparse


class HomepageView(TemplateView):
    template_name = 'landing/index.html'

class ContactView(FormView):
    template_name = 'landing/contact.html'
    form_class = ContactForm
    success_url = reverse_lazy('landing:contact_success')

    def form_valid(self, form):
        form.save()
        return super(ContactView, self).form_valid(form)

    def form_invalid(self, form):
        return self.render_to_response(self.get_context_data())


class ContactSuccessView(TemplateView):
    template_name = 'landing/success_contact.html'


class NewsletterView(View):
    def post(self, request):
        config = MailChimpConfig()
        endpoint = urlparse.urljoin(config.api_root, 'lists/bf6cbe6ae7/members/')
        data = {
            "email_address": request.POST.get('email'),
            "status": "subscribed",
        }
        data = json.dumps(data)
        response = requests.post(endpoint, auth=('apikey', config.apikey), data=data)
        return JsonResponse(response.json())