#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import urlparse

import requests
from django import forms
from django.conf import settings

from vre.apps.newsletter.models import Subscriber
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
    phone = forms.CharField(
        validators=[validators.eval_blank],
        widget=forms.TextInput(
            attrs={
                'class': 'vre-input',
                'placeholder': 'Teléfono (opcional)',
                'required': 'true',
            }
        ),
        required=False,
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
        required=False,
    )
    source = forms.CharField()

    def save(self):
        cleaned_data = super(ContactForm, self).clean()
        name = cleaned_data.get('name')
        email = cleaned_data.get('email')
        message = cleaned_data.get('message')
        phone = cleaned_data.get('phone')
        ctx = {
            'name': name,
            'email': email,
            'phone': phone,
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
        send_email(
            subject='email/subjects/contact_user.txt',
            body='email/contact_user.html',
            from_email="VRE - Notificaciones <postmaster@%s>" % (
                settings.MAILGUN_SERVER_NAME
            ),
            to_email=[email],
            context=ctx
        )
        endpoint = urlparse.urljoin(
            settings.MAILCHIMP_API_ROOT,
            'lists/%s/members/' % settings.MAILCHIMP_CONTACT_LIST
        )
        data = {
            "email_address": cleaned_data.get('email'),
            "status": "subscribed",
        }
        data = json.dumps(data)
        response = requests.post(
            endpoint, auth=('apikey', settings.MAILCHIMP_API_KEY), data=data)
        subscriber = Subscriber(
            email=cleaned_data.get('email'),
            name=cleaned_data.get('name'),
            phone=cleaned_data.get('phone'),
            source=cleaned_data.get('source'),
        )
        subscriber.save()