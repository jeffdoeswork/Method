from rest_framework.serializers import ModelSerializer
from base.models import Note, Observation, Tutorial
from rest_framework.permissions import IsAuthenticated
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class ObservationSerializer(ModelSerializer):
    class Meta:
        model = Observation
        fields = '__all__'

# Register serializer
class RegisterSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','password','first_name', 'last_name', 'email')
        extra_kwargs = {
            'password':{'write_only': True},
        }

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], email = validated_data['email'], password = validated_data['password'], first_name=validated_data['first_name'],  last_name=validated_data['last_name'])
        return user

# User serializer
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class TutorialSerializer(ModelSerializer):
 
    class Meta:
        model = Tutorial
        fields = ('id',
                  'user',
                  'title',
                  'description',
                  'published')