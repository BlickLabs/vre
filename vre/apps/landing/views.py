#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.conf import settings
from django.core.urlresolvers import reverse_lazy
from django.template.response import TemplateResponse
from django.views.generic import FormView, TemplateView, View

from vre.apps.landing.forms import ContactForm
from vre.core.utils import send_email


class HomepageView(TemplateView):
    template_name = 'landing/index.html'

class DevelopmentsView(TemplateView):
    template_name = 'landing/developments.html'

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
        }
        send_email(
            subject='email/subjects/visit_showroom.txt',
            body='email/visit_showroom.html',
            from_email="VRE - Showroom <postmaster@%s>" % (
                settings.MAILGUN_SERVER_NAME
            ),
            to_email=[settings.DEFAULT_EMAIL_TO],
            context=ctx
        )

        return TemplateResponse(request, 'landing/visit.html',
                                {'success': 'Mensaje Enviado'})


class DevelopmentDemoView(TemplateView):
    template_name = 'develops/develop_detail.html'

class DevelopmentDemo2View(TemplateView):
    template_name = 'develops/develop_detail_2.html'

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
