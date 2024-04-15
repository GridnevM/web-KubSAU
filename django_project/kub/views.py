from django.shortcuts import render 

# Create your views here. 
from rest_framework.response import Response 
from rest_framework.decorators import api_view 
from rest_framework import status 
from .serializers import * 
from kub import views 

# Create your views here. 

@api_view(['GET', 'POST']) 
def kub_list(request): 
    if request.method == 'GET': 
        data = kub.objects.all() 
        serializer = kubSerializer(data, context={'request': request}, many=True) 
        return Response(serializer.data) 
    elif request.method == 'POST': 
        print('post') 
        serializer = kubSerializer(data=request.data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response(status=status.HTTP_201_CREATED) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

@api_view(['PUT', 'DELETE']) 
def kub_detail(request, pk): 
    # your code for kub_detail view

    def success_page(request): 
        return render(request, 'Musei1.js')


def index_page(request):
    # Ваш код для отображения главной страницы
    return render(request, 'Musei1.js')  