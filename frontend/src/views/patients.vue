<template>

    <div v-if="!isSearch" class="row">

      <div class="container-fluid">

          <div class="card">
            <div class="card-body">
              <form class="d-flex" role="search">
                <input
                class="form-control me-2" 
                type="text" 
                v-model="patient_fullname"
                placeholder="Search Patient" 
                aria-label="Search">
                <button class="btn btn-outline-primary" @click="searchPatient"
                type="button">Search</button>
              </form>
            </div>
          </div>

      </div>

      <div v-if="patients" class="container-fluid mt-3">

        <div class="card">
          <div class="card-header">
            Patients List
          </div>
          <div class="card-body">

            <table v-if="patients.length != 0" class="table table-bordered table responsive">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Patient Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">------</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="aa in patients" :key="aa.id">
                  <th scope="row">.</th>
                  <td>{{ aa.patient_fullname }}</td>
                  <td>{{ aa.contact_number }}</td>
                  <td>
                    <router-link :to="'/patient/' + aa.id">
                      <button type="button" class="btn btn-primary">View Info</button>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>

            <div v-if="patients.length == 0" class="alert alert-primary" role="alert">
              No Patient has been registered!
            </div>

          </div>
          <div class="card-footer">
           
            <router-link to="/new_patient">
              <button v-if="patients.length == 0" 
              type="button" 
              class="btn btn-primary">Register New Patient Now</button>
            </router-link>
            <router-link to="/new_patient">
              <button v-if="patients.length != 0" 
              type="button" 
              class="btn btn-primary">Register Another Patient</button>
            </router-link>

          </div>

        </div>
        
      </div>


    </div>

    <div v-if="isSearch" class="row">

      <div v-if="!noMatchingRecords" class="row">

        <div v-if="current_patient" class="card border-info mb-3" style="max-width: 18rem;">
          <div class="card-header">Search Result</div>
          <div class="card-body text-info">
            <h5 class="card-title">{{ current_patient .patient_fullname }}</h5>
            <router-link :to="'/patient/' + current_patient.id">
                      <span class="btn btn-primary mt-3">Details</span>
            </router-link>
          </div>
        </div>

      </div>

      <div v-if="noMatchingRecords" class="row">

            <div class="alert alert-info" role="alert">
              No Matching Records found!
            </div>

            <span @click="reloadPage" class="btn btn-sm btn-light">Go Back</span>

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
  import type ResponseData from "@/types/response-data";
  import type Staff from "@/types/staff";
  import type Vitals from "@/types/vital";
  import StaffService from "@/services/staff.service";
  import axios from "axios";
   
export default defineComponent({
    name: "Patients",
    data() {
      return {
        patients: [] as Patient[],
        staffs: [] as Staff[],
        vitals: [] as Vitals[],
        patient_fullname: "",
        current_patient: {} as Patient,
        isSearch: false,
        noMatchingRecords: false,
      };
    },
    methods: {
      allPatients() {
        PatientService.allPatients()
          .then((response: ResponseData) => {
            this.patients = response.data;
            console.log(response.data)
          })
          .catch((e: Error) => {
            console.log(e);
          })
      },
      searchPatient() {
        const data = {
          patient_fullname: this.patient_fullname
        }
        // console.log(data)
        PatientService.searchPatient(data)
          .then((res) => {
            console.log(res);
            if(res.data != ""){
              this.current_patient = res.data;
              this.isSearch = true;
            } 
            if(res.data == "") {
              this.isSearch = true;
              this.noMatchingRecords = true;
              console.log('Im  here')
            }
          })
          .catch((error) => {
            console.log(error)
        });
    },

    reloadPage() {
      window.location.reload();
    },

    allStaff() {
        StaffService.allStaff()
          .then((response: ResponseData) => {
            this.staffs = response.data;
            console.log(response.data)
          })
          .catch((e: Error) => {
            console.log(e);
          })
      },
    },


    mounted() {
      this.allPatients();
      this.allStaff();
    }
  });
</script>

<style>

</style>