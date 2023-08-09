import http from '../http.common';


class VitalsService {
    
newVitals(data: any): Promise<any> {
    return http.post('/new_patient_vital', data);
    }

allVitals(): Promise<any> {
return http.get('/vitals');
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

export default new VitalsService();