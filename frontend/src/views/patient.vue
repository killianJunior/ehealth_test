<template>

    <div v-if="patient.id" class="row">
        <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Patient: {{ patient.patient_fullname }}</h5>
                    <p class="card-text">Card Number: {{ patient.id }}</p>
                    <p class="card-text">Contact: {{ patient.contact_number }}</p>
                    
                    <router-link :to="'/new_patient_vitals/' + patient.id">
                      <a v-if="patient.vitals.length != 0" class="btn btn-primary">Take More Vitals</a>
                    </router-link>
                </div>
                <div class="card-footer">
                    <p>{{ patient.patient_fullname }} currently has <span class="badge rounded-pill text-bg-warning">{{ patient.vitals.length }}</span>
                vital records</p> 
                </div>
            </div>
        </div>
        <div v-if="patient.vitals.length == 0" class="col-sm-8">
            <div class="card">
            <div class="card-body">
                <div class="alert alert-primary" role="alert">
                    Patient currently has no vitals 
                </div>  
                <router-link :to="'/new_patient_vitals/' + patient.id">
                    <button class="btn btn-primary">Take Vitals</button>     
                </router-link>
            </div>
            </div>
        </div>

        <div v-if="patient.vitals.length != 0" class="col-sm-8">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Vital History</h5>
                    <table class="table table-bordered table responsive">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Temperature(celcius)</th>
                            <th scope="col">Heart Rate</th>
                            <th scope="col">Respiratory Rate</th>
                            <th scope="col">Blood Pressure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="aa in vitals" :key="aa.id">
                            <th scope="row">.</th>
                            <td>{{ aa.core_temperature }}</td>
                            <td>{{ aa.heart_rate }}</td>
                            <td>{{ aa.respiratory_rate }}</td>
                            <td>{{ aa.blood_pressure }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="alert alert-light" role="alert">
      Due to time contraint, I am unable to manage certain states properly: If changes do not reflect, please hit this button! 
      <span @click="reloadPage" class="btn btn-info">Reload</span>
    </div>

</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import PatientService from "@/services/patient.service";
  import type Patient from "@/types/patient";
  import type Vitals from "@/types/vital";
   
export default defineComponent({
    name: "Patient",
    data() {
      return {
        patient: {} as Patient,
        vitals: [] as Vitals[]
      };
    },
    methods: {
      aPatient(id: any) {
        PatientService.patient(id)
          .then((res) => {
            this.patient = res.data;
            this.vitals = this.patient.vitals;
            console.log(this.patient);
            console.log(this.vitals);
          })
          .catch((e: Error) => {
            console.log(e);
          })
      },

      reloadPage() {
      window.location.reload();
    },

    },
    mounted() {
      this.aPatient(this.$route.params.id);
    }
  });
</script>

<style>

</style>