import http from '../http.common';


class StaffService {
    
newStaff(data: any): Promise<any> {
    return http.post('/staff/new_staff', data);
}

allStaff(): Promise<any> {
    return http.get('/staff');
}

aStaff(): Promise<any> {
    return http.get('/staff/:id')
}


}

export default new StaffService();