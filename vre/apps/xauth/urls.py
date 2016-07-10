#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [

    url(regex=r'^login/$',
        view=views.LoginView.as_view(),
        name='login'),

    url(regex=r'^logout/$',
        view=views.logout_view,
        name='logout'),

]
