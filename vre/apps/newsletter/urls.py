#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [

    url(regex=r'^suscribe/$',
        view=views.NewsletterView.as_view(),
        name='suscribe'),
]