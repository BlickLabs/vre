#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.core.urlresolvers import reverse_lazy
from django.views.generic import FormView, TemplateView, View

from vre.apps.landing.forms import ContactForm


class HomepageView(TemplateView):
    template_name = 'landing/index.html'

class DevelopmentsView(TemplateView):
    template_name = 'landing/developments.html'

class AboutUsView(TemplateView):
    template_name = 'landing/about.html'

class PrivacyNoticeView(TemplateView):
    template_name = 'landing/privacy_notice.html'

class VisitUsView(TemplateView):
    template_name = 'landing/visit.html'

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
