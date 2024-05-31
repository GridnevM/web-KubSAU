from django.db import models

class MyModel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    inform = models.TextField()

    def __str__(self):
        return self.name