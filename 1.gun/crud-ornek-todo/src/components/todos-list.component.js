import React,{Component} from "react";
import todoService from "../services/todo-service";
import {Link} from "react-router-dom";

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        //container
        this.state = { 
            todos : [],
            currentIndex : -1,
            currentTodo : null,

        };
    }

    //sayfa ilk yüklendiğinde çalışmasını düşündüğümüz fonksiyonları

    componentDidMount(){
        console.log("sayfa ilk yüklendiğin çalışan fonksiyon");
        this.todoListesiGetir()
    }

    todoListesiGetir() {
        ////https://jsonplaceholder.typicode.com/todos
        todoService.getAllTodos().then(todoListesi => {
            console.log(todoListesi.data);
            this.setState({
                todos: todoListesi.data
            })
        }).catch(hata => {
            console.log("hata oluştu : "+hata);
        })
    }

    activeTodo(todo,index) {
        this.setState({
            currentTodo : todo,
            currentIndex : index
        })
    }

    render() {
         //[{title : 1,userId:1,id:1,completed:true},{title : 1,userId:1,id:1,completed:true}]
        const{todos,currentIndex,currentTodo} = this.state
        return(
            <div className="list row">
             <div className="col-md-6">
                <h1>Todo Listesi</h1>
                <ul className="list-group">
                   {todos && todos.map((todo,index)=> (
                   <li className={"list-group-item "
                   +(index===currentIndex ?"active" : "" )} 
                   onClick={()=> this.activeTodo(todo,index)}
                    key={index}>{todo.title}</li> 
                   ))}
                </ul>
             </div>
             <div className="col-md-6">
                {
                    currentTodo ? 
                    (
                        <div>
                            <h4>Todo Detail</h4>
                            <div>
                                <label>
                                <strong>User Id : </strong> {" "} {" "}
                                </label>{currentTodo.userId}
                             </div>
                             <div>
                                <label>
                                <strong>Title : </strong> {" "} {" "}
                                </label>{currentTodo.title}
                             </div>
                           <Link to={"/todos/"+currentTodo.id} className="btn btn-success">Düzenle </Link>
                        </div>
                    ):
                    (
                        <div></div>
                    )
                }
             </div>
            </div>
        )
    }
}