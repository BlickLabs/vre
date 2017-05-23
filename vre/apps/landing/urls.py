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

    url(regex=r'^indiana176/$',
        view=views.DevelopmentDemoView.as_view(),
        name='development_demo'),

    url(regex=r'^dakota322/$',
        view=views.DevelopmentDemo2View.as_view(),
        name='development_demo2'),

    url(regex=r'^tlacotalpan146/$',
        view=views.DevelopmentDemo3View.as_view(),
        name='development_demo3'),

    url(regex=r'^nebraska159/$',
        view=views.DevelopmentDemo4View.as_view(),
        name='development_demo4'),

    url(regex=r'^chicago61/$',
        view=views.DevelopmentDemo5View.as_view(),
        name='development_demo5'),

    url(regex=r'^nosotros/$',
        view=views.AboutUsView.as_view(),
        name='about_us'),

    url(regex=r'^privacidad/$',
        view=views.PrivacyNoticeView.as_view(),
        name='privacy_notice'),

    url(regex=r'^terminos/$',
        view=views.ConditionsTermsView.as_view(),
        name='conditions_terms'),

    url(regex=r'^visitanos/$',
        view=views.VisitUsView.as_view(),
        name='visit_us'),

    url(regex=r'^contact/$',
        view=views.ContactView.as_view(),
        name='contact'),

    url(regex=r'^contact/success/$',
        view=views.ContactSuccessView.as_view(),
        name='contact_success'),

    url(regex=r'^visitanos/success/$',
        view=views.ContactSuccessView.as_view(),
        name='visitanos_success'),

]