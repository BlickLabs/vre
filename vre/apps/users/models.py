#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models
from django.utils.translation import ugettext_lazy as _

from vre.apps.developments.models import Develop
from .managers import CoolUserManager

TYPE_CHOICES = (
    ('client', _('Client')),
    ('investor', _('Investor')),
)

class CoolUser(PermissionsMixin, AbstractBaseUser):
    email = models.EmailField(
        _('Email address'),
        blank=False,
        unique=True,
    )
    first_name = models.CharField(
        _('First name'),
        max_length=30,
        blank=False
    )
    last_name = models.CharField(
        _('Last name'),
        max_length=30,
        blank=False,
    )
    user_type = models.CharField(
        _('User type'),
        max_length=20,
        choices=TYPE_CHOICES,
        default='client',
        blank=False,
    )
    is_active = models.BooleanField(
        _('Active'),
        default=True,
        help_text=_('Designates that this user is active to login the plataform')
    )
    join_date = models.DateField(
        _('Join Date'),
        auto_now_add=True
    )
    developments = models.ManyToManyField(
        Develop,
        verbose_name=_('Developments')
    )

    objects = CoolUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'user_type']

    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')

    def get_full_name(self):
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        return self.first_name

    @property
    def is_staff(self):
        return self.is_superuser

    def __unicode__(self):
        return "%s - %s" % (self.email, self.get_full_name())