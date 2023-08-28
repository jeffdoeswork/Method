from django.db import models
from django.contrib.auth.models import User

class CommonArtifact(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    description = models.CharField(max_length=500, blank=False, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        abstract = True

class ObservationArtifact(CommonArtifact):
    pass
class DataArtifact(CommonArtifact):
    pass
class HypothesisArtifact(CommonArtifact):
    pass
class ExperimentArtifact(CommonArtifact):
    pass
class ConclusionArtifact(CommonArtifact):
    pass


class Method(models.Model):
    title = models.CharField(max_length=75, blank=False, default='My Method')
    draft = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False)
    observationartifact = models.ForeignKey(ObservationArtifact, on_delete=models.SET_NULL, blank=True, null=True)
    dataartifact = models.ManyToManyField(DataArtifact, blank=True)  # Change ForeignKey to ManyToManyField
    hypothesisartifact = models.ForeignKey(HypothesisArtifact, on_delete=models.SET_NULL, blank=True, null=True)
    experimentartifact = models.ForeignKey(ExperimentArtifact, on_delete=models.SET_NULL, blank=True, null=True)
    conclusionartifact = models.ForeignKey(ConclusionArtifact, on_delete=models.SET_NULL, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# class ObservationArtifact(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
#     description = models.CharField(max_length=500, blank=False, default='')
#     created_at = models.DateTimeField(auto_now_add=True)

# class DataArtifact(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
#     description = models.CharField(max_length=500, blank=False, default='')
#     created_at = models.DateTimeField(auto_now_add=True)

# class HypothesisArtifact(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
#     description = models.CharField(max_length=500, blank=False, default='')
#     created_at = models.DateTimeField(auto_now_add=True)

# class ExperimentArtifact(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
#     description = models.CharField(max_length=500, blank=False, default='')
#     created_at = models.DateTimeField(auto_now_add=True)

# class ConclusionArtifact(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
#     description = models.CharField(max_length=500, blank=False, default='')
#     created_at = models.DateTimeField(auto_now_add=True)

