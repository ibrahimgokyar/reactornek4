import React,{Component} from "react";
import userService from "../services/user-service";
import { withRouter } from "../common/with-router";
 class UserAdd extends Component {


    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.userKaydet = this.userKaydet.bind(this);
        this.state = {
          id : null,
          name : '',
          username : '',
          email : ''
        }
        
    }

    userKaydet(e) {
        e.preventDefault();
        console.log("kaydete tıklandı");
        var kaydedilecekUser = {
            name : this.state.name,
            username : this.state.username,
            email : this.state.email
        };
        console.log(kaydedilecekUser);
        userService.createUser(kaydedilecekUser).then(kaydedilmisUser => {
            console.log(kaydedilmisUser.data);
            this.props.router.navigate('/users');
        }).catch(hata => {
            console.log("hata oluştu : " +hata);
        })
    }

    onChangeName(e) {
        console.log(e.target.value);
        this.setState({name : e.target.value });
    }

    onChangeUserName(e) {
        console.log(e.target.value);
        this.setState({username : e.target.value });
    }

    onChangeEmail(e) {
        console.log(e.target.value);
        this.setState({email : e.target.value });
    }

    render() {
        return(
            <div className="submit-form">
                <h1>User Ekleme Sayfasıdır</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name : </label>
                        <input type="text" className="form-control"
                        onChange={this.onChangeName}
                        id="name" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="username">UserName : </label>
                        <input type="text" 
                         onChange={this.onChangeUserName}
                        className="form-control" id="username" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="email">Email : </label>
                        <input type="text" 
                         onChange={this.onChangeEmail}
                        className="form-control" id="email" />
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={this.userKaydet.bind(this)} >Kaydet</button>
                </form>
            </div>
        )
    }
}

export default withRouter(UserAdd);