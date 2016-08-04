# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-07 04:24
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('developments', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='Title')),
                ('file', models.FileField(upload_to=b'reports', verbose_name='File')),
                ('develop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='developments.Develop', verbose_name='Develop')),
            ],
            options={
                'verbose_name': 'Document',
                'verbose_name_plural': 'Documents',
            },
        ),
    ]
