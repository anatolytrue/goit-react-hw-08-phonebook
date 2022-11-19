import { useSelector } from "react-redux";
import { getToken } from 'redux/auth/auth-selectors';


export default function HomePage() {
  const isToken = useSelector(getToken);
  
  return (
    <div>
      <h1>Welcome to Phonebook App!</h1>
      {isToken ? <p>Welcome!</p> : <p>Register or log in, please!</p>}
      <p>Collect your contacts with Phonebook App!</p>
    </div>
  );
}
