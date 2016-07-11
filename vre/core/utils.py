#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template import loader

DEFAULT_NOTIFICATION_EMAIL_FROM = "VRE - Notificaciones <postmaster@%s>" % (
    settings.MAILGUN_SERVER_NAME
)


def send_email(subject, body, to_email, context, from_email=None):
    if from_email is None:
        from_email = DEFAULT_NOTIFICATION_EMAIL_FROM

    subject = loader.render_to_string(subject, context)
    subject = ''.join(subject.splitlines())
    body = loader.render_to_string(body, context)
    email_message = EmailMultiAlternatives(
        subject, 'Text Content', from_email, to_email
    )
    email_message.attach_alternative(body, "text/html")
    email_message.send()