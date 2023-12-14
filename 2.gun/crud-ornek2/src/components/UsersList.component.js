import React,{Component} from "react";
import userService from "../services/user-service";
import {Link} from "react-router-dom";
export default class UsersList extends Component {


    constructor(props) {
        super(props);
        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.NameGoreAra = this.NameGoreAra.bind(this);
        this.state = {
          users : [],
          currentUser :null,
          currentIndex : -1,
          searchName : ''

        }
        
    }

    //sayfa ilk yüklendiğinde çağrılan fonksiyon
    componentDidMount()
    {
       this.tumUserlariGetir();
    }

    tumUserlariGetir() {
        //promise 
        userService.getAllUsers().then(gelenUserListesi => {
            console.log(gelenUserListesi.data);
            this.setState( {
                users : gelenUserListesi.data
            })
        }).catch(error => {
            console.log("hata oluştu : " +error);
        })
    }

    activeUser(user,index) {
        this.setState( {
            currentUser: user,
            currentIndex : index
        })
    }
    onChangeSearchName(e)
    {
       
       const aranacakName =  e.target.value;
       console.log(aranacakName);
       this.setState({
        searchName : aranacakName
       });
    }

   NameGoreAra(e) {
    console.log("NameGoreAra tıklandı");
    console.log(e.target.value);
    e.preventDefault();
    userService.findByName(this.state.searchName).then(namegoregelenVeriler => {
        console.log(namegoregelenVeriler.data);
        this.setState( {
            users : namegoregelenVeriler.data
        })
    }).catch(error => {
        console.log("hata oluştu : " +error);
    })
   }

    render() {
        const {users,currentIndex,currentUser} = this.state
        return(
            <div className="list row">
                <div className="col-md-8" >
                    <div className="input-group mb-3">
                    <input type="text" className="form-control"
                    onChange={this.onChangeSearchName}
                    placeholder="Name e göre ara"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-success" 
                        onClick={this.NameGoreAra.bind(this)}
                        type="button" >Ara </button>
                    </div>
                </div>
                </div>
                <h1>User List</h1>
                <div className="col-md-6">
                    <ul className="list-group">
                        {users && users.map((user,index)=> (
                            <li 
                            className={"list-group-item "+(index===currentIndex ? "active" : "")}
                             key={index} onClick={()=> this.activeUser(user,index)}>
                                {user.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {
                     currentUser ?(
                        <div>
                           <h1>User Detail</h1> 
                           <div>
                            <label>
                                <strong>Name : </strong>
                            </label> {currentUser.name}
                            </div>
                            <div>
                            <label>
                                <strong>Email : </strong>
                            </label> {currentUser.email}
                            </div>
                            <br />
                        <Link to={"/users/"+currentUser.id} className="btn btn-success">Düzenle</Link>
                        </div>
                     ) : (
                        <div></div>
                     )

                    }
                </div>
            </div>
        )
    }
}