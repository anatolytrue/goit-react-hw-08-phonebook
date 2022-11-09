import css from './App.module.css'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from './Loader/Loader';
import SharedLayout from './SharedLayout/SharedLayout';
// import HomePage from 'pages/HomePage/HomePage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
// import LoginPage from 'pages/LoginPage/LoginPage';
// import ContactsPage from 'pages/ContactsPage/ContactsPage';
// import RegisterPage from 'pages/RegisterPage/RegisterPage';


const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));


export default function App() {

  return (
    <div className={css.phonebook}>
      <Suspense fallback={<Loader />}> 
        <Routes>
          <Route path='/' element={<SharedLayout />} />
          <Route index element={<Navigate to='home' />} />
          <Route path='home' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='register' element={ <RegisterPage/>} />
          <Route path='*' element={ <NotFoundPage/>} />
        </Routes>


          <h1 className="counter__title">Phonebook</h1>
          <ContactForm />
          
          <h2 className="counter__title">Contacts</h2>
          <Filter />
          <ContactList />
      </Suspense>
    </div>
  );
}