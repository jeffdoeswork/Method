from django.http.response import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from rest_framework.parsers import JSONParser 
from rest_framework import status, generics
from rest_framework.decorators import api_view
import json

from base.models import ObservationArtifact, DataArtifact, HypothesisArtifact, ExperimentArtifact, ConclusionArtifact, Method
from .serializers import ObservationSerializer, DataSerializer, HypothesisSerializer, ExperimentSerializer, ConclusionSerializer, MethodSerializer


class ObservationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ObservationArtifact.objects.all()
    serializer_class = ObservationSerializer

class ObservationList(generics.ListCreateAPIView):
    queryset = ObservationArtifact.objects.all()
    serializer_class = ObservationSerializer

class DataDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DataArtifact.objects.all()
    serializer_class = DataSerializer

class DataList(generics.ListCreateAPIView):
    queryset = DataArtifact.objects.all()
    serializer_class = DataSerializer


class HypothesisDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = HypothesisArtifact.objects.all()
    serializer_class = HypothesisSerializer

class HypothesisList(generics.ListCreateAPIView):
    queryset = HypothesisArtifact.objects.all()
    serializer_class = HypothesisSerializer
 
class ExperimentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ExperimentArtifact.objects.all()
    serializer_class = ExperimentSerializer

class ExperimentList(generics.ListCreateAPIView):
    queryset = ExperimentArtifact.objects.all()
    serializer_class = ExperimentSerializer

class ConclusionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ConclusionArtifact.objects.all()
    serializer_class = ConclusionSerializer

class ConclusionList(generics.ListCreateAPIView):
    queryset = ConclusionArtifact.objects.all()
    serializer_class = ConclusionSerializer

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
        method_serializer = MethodSerializer(method, data=method_data)
        if method_serializer.is_valid(): 
            method_serializer.save() 
            return JsonResponse(method_serializer.data) 
        return JsonResponse(method_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        method.delete() 
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
