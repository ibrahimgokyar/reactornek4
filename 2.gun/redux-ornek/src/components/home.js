import {React,Component} from "react";
import {connect} from "react-redux";
import { deletePost } from "../actions/deleteActions";


class Home extends Component {

    deleteClicked = evt => {
        console.log(evt.target.id);
        this.props.deletePost(evt.target.id);
    }
    render() {
        const {gelenPostlar} = this.props;
        const postListesi = gelenPostlar.length ? (
            gelenPostlar.map(post => {
                return(
                    <div className="post card" key={post.id}>
                    <div className="card-content">
                        <span className="card-title text-danger">
                            {post.title}
                        </span>
                        <p>{post.body}</p>
                    </div>
                    <button  className="btn btn-danger" onClick={this.deleteClicked}  id={post.id}>Sil</button>
                    </div>
                )
            })
        ) : (
            <div className="center" >Şu an veri yok</div>
        )
        return(
            <div>
            <div className="home container">
                {postListesi}
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
       gelenPostlar :  state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost :(id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);