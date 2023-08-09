import type Vitals from "./vital";

export default interface Patient {
    id: string;
    patient_fullname: string;
    contact_number: string;
    vitals: Vitals[]
  }