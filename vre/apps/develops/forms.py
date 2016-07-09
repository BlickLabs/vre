#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django import forms

from vre.core import validators
from .models import Develop


class DevelopForm(forms.ModelForm):

    class Meta:
        fields = ['name']
        model = Develop

    def clean_name(self):
        cleaned_data = super(DevelopForm, self).clean()
        name = cleaned_data.get('name')
        return validators.eval_unique(name, Develop, 'slug', 'name')

