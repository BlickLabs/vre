#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [

    url(regex='^develop/(?P<slug>.*)/documents/$',
        view=views.DownloadDocumentView.as_view(),
        name='dashboard_adult'),
]