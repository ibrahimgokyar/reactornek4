
import http from "../http-common";
class TodoService {


    getAllTodos() {

        //https://jsonplaceholder.typicode.com/todos
        return http.get("/todos");
    }

      //https://jsonplaceholder.typicode.com/todos/id
      //{userId:id,title:"alesemmmek",completed:true,id:id}
    getTodoDetail(id) {
        return http.get(`/todos/${id}`);
    }


}

export default new TodoService();