# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-09-22 16:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_remove_cooluser_is_admin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cooluser',
            name='email',
            field=models.CharField(max_length=30, unique=True, verbose_name='Username'),
        ),
    ]