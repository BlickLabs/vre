#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [

    url(regex='^investor/documents/$',
        view=views.DownloadDocumentListView.as_view(),
        name='investor_document_download'),
]