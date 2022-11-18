import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reduserPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            // console.log(token)
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),

    tagTypes: ['Auth'],
    endpoints: builder => ({
        getUser: builder.query({
            query: () => `/users/current`,
            providesTags:['Auth']
        }),

        registerUser: builder.mutation({
            query: newUser => ({
                url: `/users/signup`,
                method: 'POST',
                body: {
                    name: newUser.name,
                    email: newUser.email,
                    password: newUser.password
                },
            }),
            invalidatesTags: ['Auth']
        }),

        loginUser: builder.mutation({
            query: user => ({
                url: `/users/login`,
                method: 'POST',
                body: {
                    email: user.email,
                    password: user.password,
                },
            }),
            invalidatesTags: ['Auth'],
        }),

        logoutUser: builder.mutation({
            query: () => ({
                url: '/users/logout',
                method: 'POST',
            }),
            invalidatesTags:['Auth']
        }),
    }),
});

export const { useGetUserQuery, useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = authApi;
