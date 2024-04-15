from rest_framework import serializers
from .models import kub

class kubSerializer(serializers.ModelSerializer):
    class Meta:
        model = kub
        fields = '__all__'