# Generated by Django 4.1.5 on 2023-02-24 02:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_alter_method_conclusionartifact_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='method',
            name='observationartifact',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.observationartifact'),
        ),
    ]