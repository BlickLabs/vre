#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django import forms
from django.contrib.auth import authenticate
from django.core.validators import RegexValidator

from vre.core import validators
from vre.core.messages import error_messages


class LoginForm(forms.Form):

    username = forms.CharField(
        validators=[RegexValidator(
            regex=validators.regex_sentences['email']
        )],
        widget=forms.TextInput(
            attrs={
                'class': 'vre-input',
                'placeholder': 'Correo electrónico',
                'required': 'true',
            }
        ),
    )

    password = forms.CharField(
        validators=[validators.eval_blank],
        widget=forms.PasswordInput(
            attrs={
                'class': 'vre-input',
                'placeholder': 'Contraseña',
                'required': 'true',
            }
        ),
    )

    def __init__(self, *args, **kwargs):
        self.user_cache = None
        super(LoginForm, self).__init__(*args, **kwargs)
        for field in self.fields:
            self.fields[field].required = True
            self.fields[field].error_messages = error_messages

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        if username and password:
            self.user_cache = authenticate(
                username=username, password=password
            )
            if self.user_cache is None:
                raise forms.ValidationError(
                    error_messages['invalid_login'],
                )
            elif not self.user_cache.is_active:
                raise forms.ValidationError(
                    error_messages['inactive_account']
                )
        return self.cleaned_data