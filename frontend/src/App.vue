<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
                <li class="nav-item">
                  <router-link to="/" class="nav-link active" aria-current="page">Patients</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/new_staff" class="nav-link">New Staff</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>

  <RouterView />
</template>

<style>

</style>
