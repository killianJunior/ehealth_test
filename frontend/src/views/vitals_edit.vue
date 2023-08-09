<template>

<div class="col-12 grid-margin">

    <div class="container-fluid">
       <div class="card">
        <div class="card-header">
          Patient Vitals
        </div>

        <div class="card-body">
          <form>
            <div class="row mb-3">

              <div class="col-md-6">
                  <div class="form-group row">
                  <label class="col-sm-4 form-label">Core Temperature<span class="text-danger">*</span></label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" v-model="vitals.core_temperature">
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                  <div class="form-group row">
                  <label class="col-sm-3 form-label">Heart Rate<span class="text-danger">*</span></label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="vitals.heart_rate">
                  </div>
                </div>
              </div>

            </div>

            <div class="row mb-3">

              <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-4 form-label">Respiratory Rate<span class="text-danger">*</span></label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="vitals.respiratory_rate">
                    </div>
                  </div>
              </div>

              <div class="col-md-6">
                <div class="form-group row">
                  <label class="col-sm-3 form-label">Blood Pressure<span class="text-danger">*</span></label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="vitals.blood_pressure">
                  </div>
                </div>
              </div>

            </div>

            <hr/>

              <div class="btn-group mr-2">
                <button @click="takeVitals" class="btn btn-primary">Take Vitals</button>
              </div>

              <div class="btn-group mr-2">
                <router-link :to="'/patient/' + $route.params.id">
                  <button @click="takeVitals" class="btn btn-light">Cancel</button>
                </router-link>
              </div>

          </form>
        </div>
       </div>

    </div>

</div>
   
        
    </template>
    
    <script lang="ts">
      import { defineComponent } from "vue";
      import type Vitals from "@/types/vital";
      import  axios  from "axios";
      import { useNotification } from "@kyvg/vue3-notification";
       
    export default defineComponent({
        name: "RegisterPatientVitals",
        data() {
          return {
            vitals: {
                id: '',
                blood_pressure: '',
                heart_rate: '',
                core_temperature: '',
                respiratory_rate: '',
                patientId:''

            } as Vitals
          };
        },
        methods: {
          takeVitals() {
            const data = {
              blood_pressure: this.vitals.blood_pressure,
              heart_rate: this.vitals.heart_rate,
              core_temperature: this.vitals.core_temperature,
              respiratory_rate: this.vitals.respiratory_rate,
              patientId : this.$route.params.id,
              id: this.generateId(5)
            }
            const path = 'http://localhost:5000/api/vitals/new_patient_vital';
            const notification = useNotification()
              axios.post(path, data)
                .then(() => {
                })
                notification.notify({
                  type: "success",
                  title: "Patient Vitals",
                  text: "Patient Vitals Redcorded!",
                });
                this.$router.push(`/patient/${this.$route.params.id}`)
                .catch((error) => {
                 console.log(error)
                })
                
            },

            generateId(data:any){
            const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let id = '';
            for(var i = 0; i <data;i++){
            id += alphabet.charAt(Math.floor(Math.random()*alphabet.length))
            }
            return id;
          },
          
        }
      });
    </script>