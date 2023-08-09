<template>

<div class="col-12 grid margin">

    <div class="container-fluid">

      <div class="card">

        <div class="card-header">
          Register New Patient
        </div>

        <div class="card-body">
          
          <form>
            <div class="row mb-3">

              <div class="col-md-6">
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Patient Fullname<span class="text-danger">*</span></label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" v-model="patient.patient_fullname">
                    </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Card Number<span class="text-danger">*</span></label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="patient.id">
                  </div>
                </div>
              </div>

            </div>
             
            <div class="row mb-3">
              <div class="col-sm-6">
                <div class="form-group row mb-3">
                  <label class="col-sm-4 col-form-label">Contact Number<span class="text-danger">*</span></label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" v-model="patient.contact_number">
                  </div>
                </div>
              </div>
            </div>
             <hr/>
              <button @click="registerPatient" class="btn btn-primary">Register</button>
          </form>

          </div>

        </div>


    </div>

</div>
    
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import type Patient from "@/types/patient";
  import axios from "axios";
   
export default defineComponent({
    name: "RegisterPatient",
    data() {
      return {
        patient: {
            id: '',
            patient_fullname: '',
            contact_number: ''
        } as Patient
      };
    },
    methods: {
      registerPatient() {
        const data = {
            patient_fullname: this.patient.patient_fullname,
            contact_number: this.patient.contact_number,
            id: this.patient.id,
        }

        console.log(data);
        // I am Hard coding the route directly here
        const path = 'http://localhost:5000/api/patients/new_patient';
        axios 
        .post(path, data)
          .then(() => {
            console.log(data)
          })
          this.$router.push({ name: 'Patients' })
          .catch((error) => {
            console.log(error);
          })
      },
    }
  });
</script>