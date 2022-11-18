// import AppBar from "components/AppBar/AppBar"
// import { Outlet } from "react-router-dom"
// import css from './SharedLayout.module.css';
// import { Suspense } from "react";
// import Loader from "components/Loader/Loader";

// export default function SharedLayout() {
//     return (
//         <div className={css.sharedLayout}>
//             <AppBar />
//             <Suspense fallback={<Loader />}>
//                 <Outlet/>
//             </Suspense>
//         </div>
//     )
// }


import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router';
import UserMenu from '../UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import AuthMenu from '../AuthMenu/AuthMenu';
import {
    AppBar,
    Stack,
    Box,
    Toolbar,
    Container,
    Typography,
} from '@mui/material';


export default function SharedLayout() {
    const isToken = useSelector(getToken);

    return (
        <>
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary ">
                <Container sx={{ mt: '1rem' }}>
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Navigation />
                    </Typography>
                    {isToken ? <UserMenu /> : <AuthMenu />}
                    </Toolbar>
                </Container>
                </AppBar>
            </Box>
        </Stack>
            <Container sx={{ mt: '1rem' }}>
                {/* <Suspense fallback={<Loader />}>  */}
                    <Outlet />
                {/* </Suspense> */}
        </Container>
    </>
    );
}