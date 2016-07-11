#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [

    url(regex=r'^contact/$',
        view=views.ContactView.as_view(),
        name='contact'),

    url(regex=r'^contact/success/$',
        view=views.ContactSuccessView.as_view(),
        name='contact_success'),


]