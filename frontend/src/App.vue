<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import type Staff from "@/types/staff";
import StaffService from "@/services/staff.service";
import { defineComponent } from 'vue';
import type ResponseData from './types/response-data';


export default defineComponent({
    name: "App",
    data() {
      return {
        staffs: [] as Staff[],
      };
    },
    methods: {
    
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
      this.allStaff();
    }
  });

</script>

<template>
    <div class="container py-4 px-3 mx-auto">
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #e3f2fd;" >
          <div class="container-fluid">
            <router-link to="/" class="navbar-brand">E-Health Test</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-if="staffs.length != 0" class="nav-item">
                  <router-link to="/patients" class="nav-link active" aria-current="page">Patients</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link">New Staff</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>

  <RouterView />
  <notifications position="bottom right"/>

</template>


<style>

</style>
