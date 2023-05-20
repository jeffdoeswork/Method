from django.urls import path, include, re_path
from . import views
from . import method_views
from .views import MyTokenObtainPairView, RegisterApi

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes),
    path('register', RegisterApi.as_view()),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('observations/', method_views.observation_list), 
    path('observations/<int:pk>/', method_views.observation_detail, name='observation_detail'), 

    path('datas/<int:pk>', method_views.DataDetail.as_view()),
    path('datas', method_views.DataList.as_view()),

    path('hypothesis/', method_views.hypothesis_list), 
    path('hypothesis/<int:pk>/', method_views.hypothesis_detail, name='hypothesis_detail'), 

    path('experiment/', method_views.experiment_list), 
    path('experiment/<int:pk>/', method_views.experiment_detail, name='experiment_detail'), 

    path('conclusion/', method_views.conclusion_list), 
    path('conclusion/<int:pk>/', method_views.conclusion_detail, name='conclusion_detail'), 

    path('methods/', method_views.method_list), 
    path('method_artifacts/', method_views.method_artifacts_list), 
    path('method/<int:pk>/', method_views.method_detail, name='method_detail'), 
]
