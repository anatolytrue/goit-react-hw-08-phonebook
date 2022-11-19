import { Link, useLocation } from "react-router-dom";
import {Tabs, Tab} from '@mui/material'


export function AuthMenu() {

    const location = useLocation();
    const pathNames = ['/register', '/login'];
    const currentPathName = location.pathname.split('/')[1];
    const currentValue = pathNames.some(e => e === currentPathName)
        ? currentPathName
        : false;

    return (

        <Tabs value={currentValue} area-label="nav tabs example">
            <Tab
                value="/register"
                component={Link}
                to="/register"
                label="Registration"
            />
            <Tab
                value="/login"
                component={Link}
                to="/login"
                label="Login"
            />
        </Tabs>
    //     <div>
    //         <Link to='/register'>Registration</NavLink>
    //         <NavLink to='/login'>Autorization</NavLink>
    //     </div>
    )
}
