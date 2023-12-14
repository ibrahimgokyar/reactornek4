import http from "../http-common";

//https://jsonplaceholder.typicode.com/
class UserService {

    //https://jsonplaceholder.typicode.com/users
    getAllUsers() {

        return http.get('/users');
    }
//https://jsonplaceholder.typicode.com/users/id  { "name":"name1","email":"email1}
    getUserDetail(id) {
        return http.get(`/users/${id}`);
    }

    updateUser(id,data) {
        console.log("servis katmanı çağrıldı");
        console.log("güncellenecek user id:"+id);
        console.log(data);
        return http.put(`/users/${id}`,data)
    }

    deleteUser(id) {
        return http.delete(`/users/${id}`);
    }

    findByName(name) {
        console.log("servis findbyName çağrıldı");
        console.log(name);
        return http.get(`/users?name=${name}`);
    }

    createUser(data) {
        return http.post('/users',data);
    }
}

export default new UserService();