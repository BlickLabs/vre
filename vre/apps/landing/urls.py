#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [

    url(regex=r'^$',
        view=views.HomepageView.as_view(),
        name='homepage'),

    url(regex=r'^desarrollos$',
        view=views.DevelopmentsView.as_view(),
        name='developments'),

    url(regex=r'^contact/$',
        view=views.ContactView.as_view(),
        name='contact'),

    url(regex=r'^contact/success/$',
        view=views.ContactSuccessView.as_view(),
        name='contact_success'),

]