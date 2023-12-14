import React,{Component} from "react";
import { withRouter } from "../common/with-router";
import todoService from "../services/todo-service";
class TodoDetail extends Component {

    constructor(props) {
        super(props);
        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.state = { 
            updatedTodo : {
                id : null,
                userId : '',
                title :'',
                completed : false
            }
        };
    }


    componentDidMount() {
        console.log("bir önceki sayfadan gelen id : "+this.props.router.params.id);
        this.DetayGetir(this.props.router.params.id);
    }


    DetayGetir(id)
    {
        todoService.getTodoDetail(id).then(detailTodo =>{
            console.log(detailTodo.data);
            this.setState({
                //{userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi"userId: 1}
                updatedTodo : detailTodo.data 
            })
        }).catch(error => {
            console.log("hata oluştu : "+error);
        })
    }

    onChangeUserId(e) {
       const detayUserId =  e.target.value;
       console.log(detayUserId);
       this.setState(function(prevState) {
        return {
            updatedTodo : {
                ...prevState.updatedTodo,
                userId : detayUserId
            }
        }
       })
    }

    onChangeTitle(e) 
    {
        const detayTitle = e.target.value;
        console.log(detayTitle);    
        this.setState(function(prevState) {
            return {
                updatedTodo : {
                    ...prevState.updatedTodo,
                    title : detayTitle
                }
            }
           })
    }

    todoGuncelle(e) {
        e.preventDefault();
        console.log("güncelle butonuna tıklandı");
    }

    todoSil(e) {
        e.preventDefault();
        console.log("sil butonuna tıklandı");
    }

    render() {
         const {updatedTodo}  =  this.state;
        return(
            <div className="edit-form">
             <h1>Todo Detay Sayfası</h1>
             <form>
                <div className="form-group">
                    <label htmlFor="userId" >UserId</label>
                    <input type="text" className="form-control"
                    value={updatedTodo.userId}
                    onChange={this.onChangeUserId}
                    id="userId" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control"
                    value={updatedTodo.title}
                    onChange={this.onChangeTitle}
                    id="title" />
                </div>
                <br />
                <button className="btn btn-success" onClick={this.todoGuncelle.bind(this)}>Güncelle</button>
                <button className="btn btn-danger" onClick={this.todoSil.bind(this)}>Sil</button>
             </form>
            </div>

        )
    }

}

export default withRouter(TodoDetail);