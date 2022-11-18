import css from './App.module.css'
import { lazy, Suspense} from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivatRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from "components/Loader/Loader";


const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));


export default function App() {

  return (
    <div className={css.phonebook}>
      <Suspense fallback={<Loader />}> 
        <Routes>
          <Route path='/' element={<SharedLayout />} >
          <Route index element={<HomePage />} />

            <Route path='register' element={
              <PublicRoute>
                <RegisterPage/>
              </PublicRoute>
            } />
            <Route path='login' element={
              <PublicRoute>
                {<LoginPage/>} 
              </PublicRoute>
            } />
            <Route path='contacts' element={
              <PrivatRoute>
                <ContactsPage />
              </PrivatRoute>
            } />
            <Route path='*' element={<Navigate to="/" replase={true} />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}