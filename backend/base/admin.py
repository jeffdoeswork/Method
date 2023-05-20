from django.contrib import admin

# Register your models here.
# from .models import Tutorial, ObservationArtifact, HypothesisArtifact, ExperimentArtifact, ConclusionArtifact, Method
from .models import ObservationArtifact, DataArtifact, HypothesisArtifact, ExperimentArtifact, ConclusionArtifact, Method
admin.site.register(ObservationArtifact)
admin.site.register(DataArtifact)
admin.site.register(HypothesisArtifact)
admin.site.register(ExperimentArtifact)
admin.site.register(ConclusionArtifact)
admin.site.register(Method)




