from django.contrib import admin 
from django.urls import path, re_path 
from kub import views  # Импортируем views из вашего приложения kub

from django.conf import settings 
from django.conf.urls.static import static 
from django.contrib.staticfiles.urls import staticfiles_urlpatterns 

urlpatterns = [ 
    path('admin/', admin.site.urls), 
    path('', views.index_page),  # Используем index_page из views вместо импорта
    re_path(r'^api/kub/$', views.kub_list), 
    re_path(r'^api/kub/(\d+)$', views.kub_detail), 
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
urlpatterns += staticfiles_urlpatterns()

