import http from '../http.common';


class PatientService {
  allPatients(): Promise<any> {
    return http.get('/patients');
  }

  patient(id: any): Promise<any> {
    return http.get(`/patients/patient/${id}`);
  }

  registerPatient(data: any): Promise<any> {
    return http.post('/new_patient', data);
  }

  // searchPatient(patient_fullname: string): Promise<any> {
  //   return http.get(`/patients/searched_patients/${patient_fullname}`);
  // }

  searchPatient(data: any): Promise<any> {
    return http.post('/patients/searched_patients/', data);
  }

  generateRandomString(){
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result.slice(6);
  };
  
}

export default new PatientService();
