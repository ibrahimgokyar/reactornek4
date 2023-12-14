import withLayout from "../hoc/withLayout";

const Abc=(props) => {
    return(
        <div onClick={() => {props.tikla()}}>
            Abc componenti 
        </div>
    )
}
export default withLayout(Abc);