from rest_framework.serializers import ModelSerializer
from base.models import Tutorial, ObservationArtifact, DataArtifact, HypothesisArtifact, ExperimentArtifact, ConclusionArtifact, Method
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

class TutorialSerializer(ModelSerializer):

    class Meta:
        model = Tutorial
        fields = ('id',
                  'user',
                  'income',
                  'description',
                  'validated',
                  'plan')

class ObservationSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    class Meta:
        model = ObservationArtifact
        fields = '__all__'


class DataSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    class Meta:
        model = DataArtifact
        fields = '__all__'

class HypothesisSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    class Meta:
        model = HypothesisArtifact
        fields = '__all__'

class ExperimentSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    class Meta:
        model = ExperimentArtifact
        fields = '__all__'

class ConclusionSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    class Meta:
        model = ConclusionArtifact
        fields = '__all__'

class MethodSerializer(ModelSerializer):
    user = UsernameSerializer(read_only=True)
    class Meta:
        model = Method
        fields = '__all__'