import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#3d3131',
      contrastText: '#ebd683'
    },
    text: {
      secondary: '#010101',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            autoHideDuration={5000}
          >
            <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
          </SnackbarProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
