#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [

    url(regex=r'^$',
        view=views.HomepageView.as_view(),
        name='homepage'),

    url(regex=r'^desarrollos/$',
        view=views.DevelopmentsView.as_view(),
        name='developments'),

    url(regex=r'^desarrollos/indiana/$',
        view=views.DevelopmentDemoView.as_view(),
        name='development_demo'),

    url(regex=r'^desarrollos/dakota/$',
        view=views.DevelopmentDemo2View.as_view(),
        name='development_demo2'),

    url(regex=r'^nosotros/$',
        view=views.AboutUsView.as_view(),
        name='about_us'),

    url(regex=r'^privacidad/$',
        view=views.PrivacyNoticeView.as_view(),
        name='privacy_notice'),

    url(regex=r'^visitanos/$',
        view=views.VisitUsView.as_view(),
        name='visit_us'),

    url(regex=r'^contact/$',
        view=views.ContactView.as_view(),
        name='contact'),

    url(regex=r'^contact/success/$',
        view=views.ContactSuccessView.as_view(),
        name='contact_success'),

]