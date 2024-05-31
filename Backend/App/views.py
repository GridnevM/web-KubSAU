from django.shortcuts import render
from django.http import request
from django.conf import settings
import os
from .models import MyModel
# Create your views here.

def index(request): 
    return render(request, 'index.html')

def my_view(request):
    # Получение данных из модели MyModel
    my_objects = MyModel.objects.all()
    # Передача данных в контекст шаблона
    context = {'my_objects': my_objects}
    # Возвращение шаблона с данными
    return render(request, 'my_template.html', context)