import {Outlet} from "react-router-dom"
import Login from "./Login"
const HomeLayout = () => {
return (
    <div>
        <h1>Home Layout</h1>
        <Login />
        <Outlet />
    </div>
)

};
export default HomeLayout;