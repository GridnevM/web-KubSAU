from rest_framework import serializers
from .models import kub

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = kub 
        fields = ('text')