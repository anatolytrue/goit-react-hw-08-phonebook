import { useDispatch, useSelector } from "react-redux";
// import { getUserEmail, getUserName } from "redux/auth/auth-selectors";
import { useNavigate } from "react-router-dom";
import { setLogOut } from "redux/auth/auth-slice";
import { useGetUserQuery, useLogoutUserMutation } from "redux/auth/auth-operations";
import { useState, useEffect } from "react";
// import Loader from "components/Loader/Loader";
import { getToken } from "redux/auth/auth-selectors";
import { toast } from 'react-toastify';
import { Button, CircularProgress, Typography } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'



export function UserMenu () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [LogOutUserApi, { isLoading, isSuccess, isError, error}] = useLogoutUserMutation();
    const isToken = useSelector(getToken);
    const [isSkip, setIsSkip] = useState(false);
    const { data } = useGetUserQuery(null, { skip: isSkip || !isToken });
    const [isLoggedOutApi, setIsLoggedOutApi] = useState(false);


    const handleLogout = async () => {
        setIsSkip(true);
        await LogOutUserApi();
    };

    useEffect(() => {
        if (isSuccess) {
            navigate('/');
            setIsLoggedOutApi(true);
        }
        if (isError && error?.originalStatus === 404) {
            toast.error("Sorry, can't find this page!", {
                position: "top-center",
                autoClose: 3000
            })
        } else if (isError && error?.status === 'FETCH_ERROR') {
            toast.error("Internet is disconnected", {
                position: "top-center",
                autoClose: 3000
            });
        } else if (isError) {
            toast.error("Something went wrong, please try again later!", {
                position: "top-center",
                autoClose: 3000
            })
        }
    }, [ isLoading, isError, isSuccess, navigate, error?.status, error?.originalStatus]);

    useEffect(() => {
        if (isLoggedOutApi) {
            dispatch(setLogOut());
            toast.success('You have logged out susseccfully', {
                position: "top-center",
                autoClose: 3000
            });
        }
    }, [dispatch, isLoggedOutApi]);

    if (data) {
        return (
        <Typography variant="h6" component="div">
            Hello {data.name}!
                <Button
                    variant="contained"
                    type="submit"
                    onClick={handleLogout}
                    margin="normal"
                    sx={{ ml: 4 }}
                    endIcon={
                        isLoading
                            ? (<CircularProgress size={16} thickness={4} color="inherit" />)
                            : (<LogoutRoundedIcon/>)
                    }
                >
                LogOut
            </Button>
        </Typography>
    );
    }
}

