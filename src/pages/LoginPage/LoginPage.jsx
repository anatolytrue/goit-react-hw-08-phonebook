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
import { toast } from 'react-toastify';


  // const navigate = useNavigate();
  // const [loginUser] = useLoginUserMutation();
//   const dispatch = useDispatch();

//   const handleSumbitForm = async (values, { resetForm }) => {
//     const user = await loginUser(values).unwrap();
//     dispatch(setCredentials(user));
//     navigate('contacts');
//     resetForm();
//   }

//   return (
//     <div>
//       <h2>
//         Please, login to access!
//       </h2>
//       <form>
//         <ul>
//           <li>
//             <label htmlFor='email'>Email</label>
//             <field name="email" type="email" />

//           </li>
//           <li></li>
//           <li></li>
//         </ul>
//       </form>

//     </div>
//   )
// }


// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [loginUser] = useLoginUserMutation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

// const handleSubmitForm = async (values, { resetForm }) => {
//     const user = await loginUser(values).unwrap();
//     dispatch(setCredentials(user));
//     navigate('/contacts');
//     resetForm();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmitForm}>
//         <label>
//           <span>Введіть свою електронну адресу</span>
//           <input
//             onChange={handleChange}
//             type="email"
//             name="email"
//             value={email}
//             autoComplete="off"
//             required
//           />
//         </label>

//         <label>
//           <span>
//             Введіть пароль
//             <span>
//               (мінімум 7 символів, ви ввели {password.length})
//             </span>
//           </span>
//           <input
//             onChange={handleChange}
//             type="password"
//             name="password"
//             value={password}
//             autoComplete="off"
//             required
//             pattern="(?=.*\d).{7,}"
//             title="Пароль має містити мінімум 7 символів, цифри або малі букви латинського алфавіту"
//           />
//         </label>

//         <button type="submit">Авторизуватися</button>
//       </form>
//     </div>
//   );
// }

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [loginUser, { data, isLoading, isSuccess, isError, error }] = useLoginUserMutation();

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleHidePassword = e => {
    e.preventDefault()
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await loginUser({ email: email, password: password });
    setEmail('');
    setPassword('');
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
      toast.success('You have logged in successfully!', {
        position: "top-center",
        autoClose: 3000
      });
    }

    if (isError && error?.originalStatus === 400) {
      toast.error ("Sorry, we can't find this page!", {
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
  },
  [dispatch, isSuccess, isError, error?.originalStatus, error?.status]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
        label="Mail"
        size="small"
        margin="normal"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <FormControl>
        <InputLabel
          htmlFor='outlined-adornment-password'
          sx={{lineHeight: '2rem'}}
        >
          Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          name='password'
          value={password}
          onChange={handleChange}
          size="small"
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickPassword}
                onMouseDown={handleHidePassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff/> : <Visibility/>}
              </IconButton>
            </InputAdornment>
          }
          sx={{m: '1 rem 0', lineHeight: '4em'}}
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