from django.http.response import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
import json

from base.models import ObservationArtifact, DataArtifact, HypothesisArtifact, ExperimentArtifact, ConclusionArtifact, Method
from .serializers import ObservatioSerializer, DataSerializer, HypothesisSerializer, ExperimentSerializer, ConclusionSerializer, MethodSerializer

@api_view(['GET', 'POST', 'DELETE'])
def observation_list(request):
    if request.method == 'GET':
        observations = ObservationArtifact.objects.all()
        
        observations_serializer = ObservatioSerializer(observations, many=True)
        return JsonResponse(observations_serializer.data, safe=False)
 
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

@api_view(['GET', 'POST', 'DELETE'])
def hypothesis_list(request):
    if request.method == 'GET':
        hypothesis = HypothesisArtifact.objects.all()
        
        hypothesis_serializer = DataSerializer(hypothesis, many=True)
        return JsonResponse(hypothesis_serializer.data, safe=False)
 
    elif request.method == 'POST':
        hypothesis_data = JSONParser().parse(request)
        hypothesis_serializer = HypothesisArtifact(data=hypothesis_data)
        print(hypothesis_serializer)
        if hypothesis_serializer.is_valid():
            hypothesis_serializer.save()
            return JsonResponse(hypothesis_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(hypothesis_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = HypothesisArtifact.objects.all().delete()
        return JsonResponse({'message': '{} hypothesis were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def hypothesis_detail(request, pk):
    try: 
        hypothesis = HypothesisArtifact.objects.get(pk=pk) 
    except HypothesisArtifact.DoesNotExist: 
        return JsonResponse({'message': 'The Data does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        hypothesis_serializer = HypothesisSerializer(hypothesis) 
        return JsonResponse(hypothesis_serializer.data) 
 
    elif request.method == 'PUT': 
        hypothesis_data = JSONParser().parse(request) 
        hypothesis_serializer = HypothesisSerializer(hypothesis, data=hypothesis_data) 
        if hypothesis_serializer.is_valid(): 
            hypothesis_serializer.save() 
            return JsonResponse(hypothesis_serializer.data) 
        return JsonResponse(hypothesis_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        hypothesis.delete() 
        return JsonResponse({'message': 'data was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST', 'DELETE'])
def experiment_list(request):
    if request.method == 'GET':
        experiment = ExperimentArtifact.objects.all()
        
        experiment_serializer = ExperimentSerializer(experiment, many=True)
        return JsonResponse(experiment_serializer.data, safe=False)
 
    elif request.method == 'POST':
        experiment_data = JSONParser().parse(request)
        experiment_serializer = ExperimentArtifact(data=experiment_data)
        print(experiment_serializer)
        if experiment_serializer.is_valid():
            experiment_serializer.save()
            return JsonResponse(experiment_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(experiment_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = ExperimentArtifact.objects.all().delete()
        return JsonResponse({'message': '{} experiment were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def experiment_detail(request, pk):
    try: 
        experiment = ExperimentArtifact.objects.get(pk=pk) 
    except ExperimentArtifact.DoesNotExist: 
        return JsonResponse({'message': 'The Data does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        experiment_serializer = ExperimentSerializer(experiment) 
        return JsonResponse(experiment_serializer.data) 
 
    elif request.method == 'PUT': 
        experiment_data = JSONParser().parse(request) 
        experiment_serializer = ExperimentSerializer(experiment, data=experiment_data) 
        if experiment_serializer.is_valid(): 
            experiment_serializer.save() 
            return JsonResponse(experiment_serializer.data) 
        return JsonResponse(experiment_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        experiment.delete() 
        return JsonResponse({'message': 'data was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST', 'DELETE'])
def conclusion_list(request):
    if request.method == 'GET':
        conclusion = ConclusionArtifact.objects.all()
        
        conclusion_serializer = ConclusionSerializer(conclusion, many=True)
        return JsonResponse(conclusion_serializer.data, safe=False)
 
    elif request.method == 'POST':
        conclusion_data = JSONParser().parse(request)
        conclusion_serializer = ConclusionArtifact(data=conclusion_data)
        print(conclusion_serializer)
        if conclusion_serializer.is_valid():
            conclusion_serializer.save()
            return JsonResponse(conclusion_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(conclusion_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = ConclusionArtifact.objects.all().delete()
        return JsonResponse({'message': '{} conclusion were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def conclusion_detail(request, pk):
    try: 
        conclusion = ConclusionArtifact.objects.get(pk=pk) 
    except ConclusionArtifact.DoesNotExist: 
        return JsonResponse({'message': 'The Data does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        conclusion_serializer = DataSerializer(conclusion) 
        return JsonResponse(conclusion_serializer.data) 
 
    elif request.method == 'PUT': 
        conclusion_data = JSONParser().parse(request) 
        conclusion_serializer = DataSerializer(conclusion, data=conclusion_data) 
        if conclusion_serializer.is_valid(): 
            conclusion_serializer.save() 
            return JsonResponse(conclusion_serializer.data) 
        return JsonResponse(conclusion_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        conclusion.delete() 
        return JsonResponse({'message': 'data was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST', 'DELETE'])
def method_list(request):
    if request.method == 'GET':
        method = Method.objects.all()
        
        method_serializer = MethodSerializer(method, many=True)
        return JsonResponse(method_serializer.data, safe=False)
 
    elif request.method == 'POST':
        method_data = JSONParser().parse(request)
        method_serializer = Method(data=method_data)
        print(method_serializer)
        if method_serializer.is_valid():
            method_serializer.save()
            return JsonResponse(method_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(method_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Method.objects.all().delete()
        return JsonResponse({'message': '{} method were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def method_detail(request, pk):
    try: 
        method = Method.objects.get(pk=pk) 
    except Method.DoesNotExist: 
        return JsonResponse({'message': 'The Method does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        method_serializer = MethodSerializer(method) 
        return JsonResponse(method_serializer.data) 
 
    elif request.method == 'PUT': 
        method_data = JSONParser().parse(request) 
        method_serializer = DataSerializer(method, data=method_data) 
        if method_serializer.is_valid(): 
            method_serializer.save() 
            return JsonResponse(method_serializer.data) 
        return JsonResponse(method_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        method_data.delete() 
        return JsonResponse({'message': 'data was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

class ArtifactEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, HypothesisArtifact):
            return obj.description
        if isinstance(obj, ExperimentArtifact):
            return obj.description
        return super().default(obj)

@api_view(['GET'])
def method_artifacts_list(request):
    if request.method == 'GET':
        method = Method.objects.all()
        method_artifacts = Method.objects.select_related('hypothesisartifact', 'experimentartifact').all()

        data = []
        for method in method_artifacts:
            data.append({
                'title': method.title,
                'hypothesis': method.hypothesisartifact,
                'experiment': method.experimentartifact,
            })
        data_json = json.dumps(data, cls=ArtifactEncoder)

    return JsonResponse(json.loads(data_json), safe=False)
