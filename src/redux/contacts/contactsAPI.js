import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reduserPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contacts']
        }),

        addContact: builder.mutation({
            query: newContact => ({
                url: `/contacts`,
                method: 'POST',
                body: {
                    name: newContact.name,
                    phone: newContact.phone
                },
            }),
            invalidatesTags: ['Contacts'],
        }),

        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),

        updateContact: builder.mutation({
            query: newContact => ({
                url: `/contacts/${newContact.id}`,
                method: 'PATCH',
                body: {
                    name: newContact.name,
                    phone: newContact.phone
                },
            }),
            invalidatesTags:['Contacts']
        })
    }),
});

export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation, useUpdateContactMutation } = contactsApi;