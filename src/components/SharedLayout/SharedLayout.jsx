// import AppBar from "components/AppBar/AppBar"
// import { Outlet } from "react-router-dom"
// import css from './SharedLayout.module.css';
import { Suspense } from "react";
import Loader from "components/Loader/Loader";

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
import { UserMenu } from '../UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import { AuthMenu } from '../AuthMenu/AuthMenu';
import {
    AppBar,
    Stack,
    Box,
    Toolbar,
    Container,
    Typography,
    ThemeProvider,
    createTheme,
} from '@mui/material';

const mainTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFF8DC',
            contrastText: '010101',
        },
        text: {
            secondary: 'FFF8DC',
        },
        background: {
            paper: '010101'
        },
    },
});


export default function SharedLayout() {
    const isToken = useSelector(getToken);

    return (
        <>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={mainTheme}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" color=" primary ">
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
                </ThemeProvider>
            </Stack>
            <Container sx={{ mt: '1rem' }}>
                <Suspense fallback={<Loader />}> 
                    <Outlet />
                </Suspense>
        </Container>
    </>
    );
}