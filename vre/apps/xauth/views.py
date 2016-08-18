#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.core.urlresolvers import reverse_lazy
from django.shortcuts import redirect
from django.views.generic import FormView

from vre.apps.xauth.forms import LoginForm
from vre.core.mixins import NextUrlMixin, AuthRedirectMixin


class LoginView(NextUrlMixin, AuthRedirectMixin, FormView):
    template_name = 'xauth/login.html'
    form_class = LoginForm
    success_url = reverse_lazy('documents:investor_document_download')

    def form_valid(self, form):
        login(self.request, form.user_cache)
        return super(LoginView, self).form_valid(form)

    def form_invalid(self, form):
        return self.render_to_response(self.get_context_data())


@login_required(login_url=reverse_lazy('xauth:login'))
def logout_view(request):
    logout(request)
    return redirect(reverse_lazy('xauth:login'))