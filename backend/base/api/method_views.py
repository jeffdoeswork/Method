from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view

from base.models import ObservationArtifact, DataArtifact, HypothesisArtifact, ExperimentArtifact, ConclusionArtifact, Method
from .serializers import ObservatioSerializer, DataSerializer, HypothesisSerializer, ExperimentSerializer, ConclusionSerializer, MethodSerializer

@api_view(['GET', 'POST', 'DELETE'])
def observation_list(request):
    if request.method == 'GET':
        observations = ObservationArtifact.objects.all()
        
        income = request.GET.get('income', None)
        if income is not None:
            observations = observations.filter(income__icontains=income)
        
        observations_serializer = ObservatioSerializer(observations, many=True)
        return JsonResponse(observations_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 
    elif request.method == 'POST':
        observation_data = JSONParser().parse(request)
        observation_serializer = ObservationArtifact(data=observation_data)
        print(observation_serializer)
        if observation_serializer.is_valid():
            observation_serializer.save()
            return JsonResponse(observation_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(observation_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = ObservationArtifact.objects.all().delete()
        return JsonResponse({'message': '{} Observation were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def observation_detail(request, pk):
    try: 
        observation = ObservationArtifact.objects.get(pk=pk) 
    except ObservationArtifact.DoesNotExist: 
        return JsonResponse({'message': 'The observation does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        observation_serializer = ObservatioSerializer(observation) 
        return JsonResponse(observation_serializer.data) 
 
    elif request.method == 'PUT': 
        observation_data = JSONParser().parse(request) 
        observation_serializer = ObservatioSerializer(observation, data=observation_data) 
        if observation_serializer.is_valid(): 
            observation_serializer.save() 
            return JsonResponse(observation_serializer.data) 
        return JsonResponse(observation_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        observation.delete() 
        return JsonResponse({'message': 'Observation was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST', 'DELETE'])
def data_list(request):
    if request.method == 'GET':
        datas = DataArtifact.objects.all()
        
        income = request.GET.get('income', None)
        if income is not None:
            datas = datas.filter(income__icontains=income)
        
        datas_serializer = DataSerializer(datas, many=True)
        return JsonResponse(datas_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 
    elif request.method == 'POST':
        data_data = JSONParser().parse(request)
        data_serializer = DataArtifact(data=data_data)
        print(data_serializer)
        if data_serializer.is_valid():
            data_serializer.save()
            return JsonResponse(data_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(data_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = DataArtifact.objects.all().delete()
        return JsonResponse({'message': '{} data were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def data_detail(request, pk):
    try: 
        dataz = DataArtifact.objects.get(pk=pk) 
    except DataArtifact.DoesNotExist: 
        return JsonResponse({'message': 'The Data does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        data_serializer = DataSerializer(dataz) 
        return JsonResponse(data_serializer.data) 
 
    elif request.method == 'PUT': 
        data_data = JSONParser().parse(request) 
        data_serializer = DataSerializer(dataz, data=data_data) 
        if data_serializer.is_valid(): 
            data_serializer.save() 
            return JsonResponse(data_serializer.data) 
        return JsonResponse(data_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        dataz.delete() 
        return JsonResponse({'message': 'data was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)