// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import AuthMenu from "components/AuthMenu/AuthMenu";
// import UserMenu from "components/UserMenu/UserMenu";
// import { getToken } from "redux/auth/auth-selectors";

// // const pages = ['HomePage', 'ContactsPage'];
// // const settings = ['Logout'];
// // const auth = ['RegisterPage', 'LoginPage'];

// export default function AppBar() {
//     const isToken = useSelector(getToken);

//     return (
//         <div>
//             {isToken ? <UserMenu /> : <AuthMenu />}
//             <div>
//                 <NavLink to='/'>Home page</NavLink>
//                 {isToken && <NavLink to='contacts'>Contacts</NavLink>}
//             </div>
//         </div>
//     );
// }