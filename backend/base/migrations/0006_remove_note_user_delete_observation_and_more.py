# Generated by Django 4.1.4 on 2022-12-23 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_tutorial_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='note',
            name='user',
        ),
        migrations.DeleteModel(
            name='Observation',
        ),
        migrations.RenameField(
            model_name='tutorial',
            old_name='title',
            new_name='income',
        ),
        migrations.RenameField(
            model_name='tutorial',
            old_name='published',
            new_name='validated',
        ),
        migrations.AddField(
            model_name='tutorial',
            name='plan',
            field=models.CharField(choices=[('One Night', 'Premium One Night Stay'), ('Weekend', 'Grand Opening Weekend'), ('Invester', 'Invester & Owner')], default='One Night', max_length=32),
        ),
        migrations.DeleteModel(
            name='Note',
        ),
    ]
