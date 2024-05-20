from django.contrib import admin
from .models import MyModel

class MyModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'inform')  # Отображаемые поля в админке

admin.site.register(MyModel, MyModelAdmin)