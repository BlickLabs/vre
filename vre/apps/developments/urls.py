#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [

    url(regex=r'^desarrollos/(?P<id>.*)/$',
        view=views.DevelopDetailView.as_view(),
        name='development_detail'),

    url(regex=r'^descargar-brochure/(?P<id>.*)/$',
        view=views.DownloadFileView.as_view(),
        name='download_brochure'),

    url(regex=r'^descargar-documento/(?P<id>.*)/$',
        view=views.DownloadDocumentView.as_view(),
        name='download_document'),
]