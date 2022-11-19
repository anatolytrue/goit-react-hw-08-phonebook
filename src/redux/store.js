import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contacts/contactsAPI";
// import contactsSlice from './contacts/contactsSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from "./auth/auth-operations";
import { authSlice } from './auth/auth-slice'


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const authReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        // [contactsSlice.name]: contactsSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        contactsApi.middleware,
        authApi.middleware,
    ],
});

export const persistor = persistStore(store);