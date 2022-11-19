import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import { Link} from 'react-router-dom';
import { useRegisterUserMutation } from 'redux/auth/auth-operations';
import { setSignIn } from 'redux/auth/auth-slice';
import {
  Button,
  TextField,
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@mui/material';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from 'react-toastify';

// import Loader from 'components/Loader/Loader';


export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser, {data, isLoading, isSuccess, isError, error}] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleHidePassword = (e) => {
    e.preventDefault();
  }

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    await registerUser({
      name: name,
      email: email,
      password: password,
    });
    setName('');
    setEmail('');
    setPassword('')
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setSignIn({
          user: { name: data.user.name, email: data.user.email },
          token: data.token,
        })
      );
      toast.success('You have registered successfully!', {
        position: "top-center",
        autoClose: 3000
      });
    }
      if (isError && error?.originalStatus === 400) {
      toast.error ("Sorry, can't create user!", {
        position: "top-center",
        autoClose: 3000
      });
    } else if (isError && error?.status === 'FETCH_ERROR') {
      toast.error("Internet is disconnected", {
        position: "top-center",
        autoClose: 3000
      });
    } else if (isError) {
      toast.error("Something went wrong, please try again later!", {
        position: "top-center",
        autoClose: 3000
      });
    }
  }, [dispatch, data, isSuccess, isError, error?.status, error?.originalStatus])

  return (
    <Box
      component="form"
      onSubmit={handleSubmitForm}
      sx={{
        padding: '1.6rem',
        maxWidth: '16rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '0.4rem',
        alignItems: 'baseline',
      }}
    >
      <TextField
        label="Name"
        size="small"
        margin="normal"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
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
      <FormControl varint="outlined">
        <InputLabel
          htmlFor='outlined-adornment-password'
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
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          sx={{ m: '1rem 0', lineHeight: '4em' }}
        />
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        margin="normal"
        sx={{ width: '8rem' }}
        endIcon={
          isLoading 
            ? (<CircularProgress size={16} thickness={4} color="inherit" />)
            : (<AppRegistrationRoundedIcon/>)
        }
      >
        Sign In
      </Button>
    </Box>
  );
}