import { Outlet } from "react-router-dom"

const AdminLayout = () => {
    return(
        <div>
            <h3>Admin Layout</h3>
            <Outlet />
        </div>
    )
}

export default AdminLayout;