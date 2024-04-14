from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *

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
def kub_detail(request, text):
    try:
        kub = kub.objects.get(text=text)
    except kub.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = kubSerializer(kub, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        kub.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        def index_page(request):
                return render(request, 'Musei1.js')
    if request.method == 'POST':
        form = CorporateClientForm(request.POST)
        if form.is_valid():
            # Создаем объект CorporateClient с данными из формы
            new_client = CorporateClient(
                full_name=form.cleaned_data['full_name'],
                address=form.cleaned_data['address'],
                phone=form.cleaned_data['phone'],
                email=form.cleaned_data['email']
            )
            # Сохраняем объект в базу данных
            new_client.save()
            # Перенаправляем пользователя на страницу успеха
            return redirect('success_page')
    else:
        # Если метод запроса GET, просто показываем пустую форму
        form = CorporateClientForm()
    return render(request, 'Musei1.js', {'form': form})

def success_page(request):
    return render(request, 'Musei1.js')