import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useLoginUserMutation } from 'redux/auth/auth-operations';
import { setLogIn } from 'redux/auth/auth-slice';
import {
  Button, TextField, Box,
  CircularProgress, IconButton,
  InputAdornment, OutlinedInput, InputLabel,
  FormControl
} from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// import Loader from 'components/Loader/Loader';
// import { toast } from 'react-toastify';
import { useSnackbar } from 'notistack';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [loginUser, { data, isLoading, isSuccess, isError, error }] = useLoginUserMutation();
  const { enqueueSnackbar } = useSnackbar();


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleHidePassword = e => {
    e.preventDefault();
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await loginUser({ email: email, password: password });
    dispatch(loginUser({ email, password }));
    // setEmail('');
    // setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setLogIn({
          user: { name: data.user.name, email: data.user.email },
          token: data.token,
        })
      );
      enqueueSnackbar('You have logged in successfully', {
        variant: 'success',
      });
    }

    if (isError && error?.originalStatus === 404) {
    enqueueSnackbar("Sorry, we can't find this page", {
        variant: 'error',
    });
    } else if (isError && error?.status === 400) {
      enqueueSnackbar('Invalid email or password', {
        variant: 'error',
      });
    } else if (isError && error?.status === 'FETCH_ERROR') {
      enqueueSnackbar('Internet is disconnected', {
        variant: 'error',
      });
    } else if (isError) {
      enqueueSnackbar('Something went wrong, please try again later', {
        variant: 'error',
      });
    }
  }, [dispatch, enqueueSnackbar, data, isSuccess, isError, error?.originalStatus, error?.status]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: '2rem',
        maxWidth: '20rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '0.3rem',
        alignItems: 'baseline',
      }}
    >
      <TextField
        label="Mail"
        size="small"
        margin="normal"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <FormControl variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          sx={{lineHeight: '2em'}}
        >
          Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          name="password"
          value={password}
          onChange={handleChange}
          size="small"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleHidePassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff/> : <Visibility/>}
              </IconButton>
            </InputAdornment>
          }
          sx={{m: '1rem 0', lineHeight: '4em'}}
        />
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        margin="normal"
        sx={{ width: '8 rem' }}
        endIcon={
          isLoading
            ? (<CircularProgress size={16} thickness={4} color="inherit" />)
            : (<LoginRoundedIcon/>)
        }
      >
        LogIn 
      </Button>
    </Box>
  )

}