#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.db import models
from django.utils.text import slugify
from django.utils.translation import ugettext_lazy as _


class Develop(models.Model):
    name = models.CharField(
        _('Name'),
        max_length=50,
        blank=False,
        null=False,
        unique=True,
    )

    slug = models.SlugField(
        _('Slug'),
        max_length=50,
        unique=True,
    )

    class Meta:
        verbose_name = _('Develop')
        verbose_name_plural = _('Developments')

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Develop, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.name
