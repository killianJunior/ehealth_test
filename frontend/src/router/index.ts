import { createRouter, createWebHistory } from 'vue-router'
import Patients from '../views/patients.vue'
import RegisterPatient from "../views/patient_edit.vue";
import AddStaff from "../views/staff_edit.vue";
import RegisterPatientVitals from "../views/vitals_edit.vue";
import Patient from "../views/patient.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    //When the app loads take me to the new staff view
    {
      path: '/',
      name: 'new staff',
      component: AddStaff
    },
    {
      path: '/patients',
      name: 'Patients',
      component: Patients
    },
    {
      path: '/new_patient',
      name: 'new patient',
      component: RegisterPatient
    },
    {
      path: '/new_patient_vitals/:id',
      name: 'new vitals',
      component: RegisterPatientVitals
    },
    {
      path: '/patient/:id',
      name: 'patient info',
      component: Patient
    },
   
  ]
})

export default router
