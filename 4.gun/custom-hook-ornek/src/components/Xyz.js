import withLayout from "../hoc/withLayout";

const Xyz=(props) => {
    return(
        <div onClick={() => {props.tikla2()}}>
            Xyz componenti 
        </div>
    )
}
export default withLayout(Xyz);