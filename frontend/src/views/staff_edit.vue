<template>

    <div class="col-12 grid margin">
    
        <div class="container-fluid">
            <div class="card">
              <div class="card-header">
                New Staff
              </div>

              <div class="card-body">
                <form>
                  <div class="row mb-3">

                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 form-label">Staff Fullname<span class="text-danger">*</span></label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" v-model="staff.staff_name">
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 form-label">Staff Id<span class="text-danger">*</span></label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" v-model="staff.id">
                        </div>
                      </div>
                    </div>

                  </div>

                  <div class="row mb-3">
                    <div class="col-md-6">
                    <div class="form-group row">
                      <label class="col-sm-3 form-label">Role<span class="text-danger">*</span></label>
                     <div class="col-sm-9">
                      <select v-model="staff.role" class="form-control">
                        <option disabled value="">Please select one</option>
                        <option>Clerk</option>
                        <option>Nurse</option>
                      </select>
                     </div> 
                    </div>
                  </div>
                  </div>
                  
                   <hr/>
                    <button @click="newStaff" class="btn btn-primary ml-3">Add</button>
                  </form>
              </div>

            </div>
         
    
        </div>
    
    </div>
        
    </template>
    
    <script lang="ts">
      import { defineComponent } from "vue";
      import type Staff from "@/types/staff";
      import StaffService from "@/services/staff.service";
      import { useNotification } from "@kyvg/vue3-notification";

       
    export default defineComponent({
        name: "AddStaff",
        data() {
          return {
            staff: {
                id: '',
                staff_name: '',
                role: ''
            } as Staff
          };
        },
        methods: {
          newStaff() {
            const data = {
                staff_name: this.staff.staff_name,
                role: this.staff.role,
                id: this.staff.id
            }
            const notification = useNotification()
            //I am using a service here
            StaffService.newStaff(data)
              .then(() => {
              })
              notification.notify({
                type: "success",
                title: "Staff",
                text: "Staff added successfully!",
              });
              this.$router.push({ name: 'Patients' })
              
              .catch((error) => {
                console.log(error);
              })
          },
        }
      });
    </script>