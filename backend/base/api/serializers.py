from rest_framework.serializers import ModelSerializer, SerializerMethodField
from base.models import ObservationArtifact, DataArtifact, HypothesisArtifact, ExperimentArtifact, ConclusionArtifact, Method
from rest_framework.permissions import IsAuthenticated
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password

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

class UsernameSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username',)

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class MethodSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    class Meta:
        model = Method
        fields = '__all__'

from rest_framework.serializers import ModelSerializer, SerializerMethodField

class ObservationSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    type = SerializerMethodField()

    def get_type(self, obj):
        return "Observation"

    class Meta:
        model = ObservationArtifact
        fields = '__all__'


class DataSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    type = SerializerMethodField()

    def get_type(self, obj):
        return "Data"

    class Meta:
        model = DataArtifact
        fields = '__all__'


class HypothesisSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    type = SerializerMethodField()

    def get_type(self, obj):
        return "Hypothesis"

    class Meta:
        model = HypothesisArtifact
        fields = '__all__'


class ExperimentSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    type = SerializerMethodField()

    def get_type(self, obj):
        return "Experiment"

    class Meta:
        model = ExperimentArtifact
        fields = '__all__'


class ConclusionSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    type = SerializerMethodField()

    def get_type(self, obj):
        return "Conclusion"

    class Meta:
        model = ConclusionArtifact
        fields = '__all__'
