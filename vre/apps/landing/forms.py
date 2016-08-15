#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django import forms
from django.core.validators import RegexValidator
from django.conf import settings

from vre.core import validators
from vre.core.utils import send_email


class ContactForm(forms.Form):
    name = forms.CharField(
        validators=[validators.eval_blank],
        widget=forms.TextInput(
            attrs={
                'class': 'vre-input',
                'placeholder': 'Nombre',
                'required': 'true',
            }
        ),
    )
    email = forms.EmailField(
        validators=[validators.eval_blank],
        widget=forms.EmailInput(
            attrs={
                'class': 'vre-input',
                'placeholder': 'Correo electrónico',
                'required': 'true',
            }
        ),
    )
    message = forms.CharField(
        validators=[validators.eval_blank],
        widget=forms.Textarea(
            attrs={
                'class': 'vre-input',
                'placeholder': 'Mensaje (opcional)',
                'required': 'false',
            }
        ),
    )

    def save(self):
        cleaned_data = super(ContactForm, self).clean()
        name = cleaned_data.get('name')
        email = cleaned_data.get('email')
        message = cleaned_data.get('message')
        ctx = {
            'name': name,
            'email': email,
            'message': message
        }
        send_email(
            subject='email/subjects/contact.txt',
            body='email/contact.html',
            from_email="VRE - Contacto <postmaster@%s>" % (
                settings.MAILGUN_SERVER_NAME
            ),
            to_email=[settings.DEFAULT_EMAIL_TO],
            context=ctx
        )