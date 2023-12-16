import {memo} from "react";

const Header = ({title}) => {
    console.log("Header Render");
    return <h2>{title}</h2>
}

export default memo(Header);