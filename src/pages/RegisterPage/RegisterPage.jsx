import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import { Link} from 'react-router-dom';
import { useRegisterUserMutation } from 'redux/auth/auth-operations';
import { setSignIn } from 'redux/auth/auth-slice';
import Loader from 'components/Loader/Loader';


export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser, {data, isLoading, isSuccess}] = useRegisterUserMutation();
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

  // const handleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // }
  // const handleClickPassword = e => {
  //   e.preventDefault();
  // };

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
      )
    }
  }, [dispatch, isSuccess])

  // const handleSubmitForm = async (values, { resetForm }) => {
  //   const user = await registerUser(values).unwrap();
  //   dispatch(setCredentials(user));
  //   navigate('/contacts');
  //   resetForm();
  // };

  return (
    <div>
      
      <form onSubmit={handleSubmitForm}>
        <label>
          <span>Введіть своє ім’я</span>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>

        <label>
          <span>Введіть свою електронну адресу</span>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            required
          />
        </label>

        <label>
          <span>
            Введіть пароль
            <span>
              (мінімум 7 символів, ви ввели {password.length})
            </span>
          </span>
          <input
            onChange={handleChange}
            type={ showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            autoComplete="off"
            required
            pattern="(?=.*\d).{7,}"
            title="Пароль має містити мінімум 7 символів, цифри або малі букви латинського алфавіту"
            
          />
          <button
              onClick={handleShowPassword}
              onMouseDown={handleHidePassword}
              edge="end"
          >
            {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
            show password
          </button>
        </label>

        <button
          type="submit">
          { isLoading ? <Loader/> : 'Зареєструватися'}
        </button>
      </form>
    </div>
  );
}