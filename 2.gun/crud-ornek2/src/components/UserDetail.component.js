import React,{Component} from "react";
import { withRouter } from "../common/with-router";
import userService from "../services/user-service";
 class UserDetail extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail  = this.onChangeEmail.bind(this);
        this.state = {
          updatedUser : {
            id :null,
            name :'',
            username :'',
            email :''
          }
        }
        
    }
    componentDidMount()
    {
        console.log("bir önceki sayfadan gelen user id : "+this.props.router.params.id);
        this.userDetayGetir(this.props.router.params.id);
    }

    userDetayGetir(id) {
        userService.getUserDetail(id).then(guncellenecekUser => {
            console.log(guncellenecekUser.data)
            this.setState({updatedUser : guncellenecekUser.data  }); 
        }).catch(error => {
            console.log("hata oluştu : " +error);
        })
    }

    onChangeName(e) {
       const name =  e.target.value;
       console.log(name);
       this.setState(function(prevState) {
        return {
            updatedUser : {
                ...prevState.updatedUser,
                name : name
            }
        }
       })
    }

    onChangeUsername(e) {
        const username =  e.target.value;
        console.log(username);
        this.setState(function(prevState) {
         return {
             updatedUser : {
                 ...prevState.updatedUser,
                 username : username
             }
         }
        })
     }

     onChangeEmail(e) {
        const email =  e.target.value;
        console.log(email);
        this.setState(function(prevState) {
         return {
             updatedUser : {
                 ...prevState.updatedUser,
                 email : email
             }
         }
        })
     }

     userGuncelle(e) {
        e.preventDefault();
        console.log("güncelleye tıklandı");
        userService.updateUser(this.props.router.params.id,this.state.updatedUser)
        .then(guncellenmisUser => {
            console.log(guncellenmisUser.data);
            this.props.router.navigate('/users');
        }).catch(error => {
            console.log("hata oluştu : "+error);
        })

     }

  

     userSil(e) {
        e.preventDefault();
        console.log("sil e tıklandı");
        userService.deleteUser(this.props.router.params.id).then(silinmisUser =>{
            console.log(silinmisUser.data);
            this.props.router.navigate('/users');
        }).catch(error => {
            console.log("hata oluştu : "+error);
        })

     }

    render() {
        const {updatedUser} = this.state
        return(
            <div className="edit-form">
                <h1>User Detay Sayfası</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name : </label>
                        <input type="text" className="form-control"
                        value={updatedUser.name}
                        onChange={this.onChangeName}
                        id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">UserName : </label>
                        <input type="text" className="form-control"
                        value={updatedUser.username}
                        onChange={this.onChangeUsername}
                        id="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email : </label>
                        <input type="text" className="form-control"
                        value={updatedUser.email}
                        onChange={this.onChangeEmail}
                        id="email" />
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={this.userGuncelle.bind(this)} >Güncelle</button>
                    <button className="btn btn-danger" onClick={this.userSil.bind(this)} >Sil</button>
                </form>
            </div>
        )
    }
}
export default withRouter(UserDetail);