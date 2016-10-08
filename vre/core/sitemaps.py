#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.contrib import sitemaps
from django.core.urlresolvers import reverse_lazy


class StaticViewSitemap(sitemaps.Sitemap):
    priority = 0.5
    changefreq = 'daily'

    def items(self):
        return [
            'landing:homepage', 'landing:development_demo',
            'landing:development_demo2', 'landing:about_us', 'landing:privacy_notice',
            'landing:conditions_terms', 'landing:visit_us', 'landing:contact',
        ]

    def location(self, item):
        return reverse_lazy(item)