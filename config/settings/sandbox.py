#!/usr/bin/env python
# -*- coding: utf-8 -*-

from .base import *

import dj_database_url

# DEBUG
# -----------------------------------------------------------------------------
DEBUG = env.bool('DJANGO_DEBUG', default=False)
TEMPLATES[0]['OPTIONS']['debug'] = DEBUG

SECRET_KEY = env("DJANGO_SECRET_KEY", default='CHANGEME!!!')

DATABASES = {
    'default': dj_database_url.config()
}
