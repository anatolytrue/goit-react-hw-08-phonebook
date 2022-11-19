// import Loader from 'components/Loader/Loader';

// import { useDeleteContactMutation } from 'redux/contacts/contactsAPI';
// import css from './ContactList.module.css';
// import PropTypes from 'prop-types';

// export default function ContactItem({ contactId, name, number }) {
//     const [deleteContact, { isLoading }] = useDeleteContactMutation();
    
//     const handleDeleteContact = contactId =>
//         deleteContact(contactId);
//     return (
//         <li className={css.phonebookContactListItem}>
//                 <p>{name} : {number}</p>
//                 <button type="button"
//                     onClick={() => handleDeleteContact(contactId)}
//                     className={css.phonebookContactListBtn}
//                     disabled={isLoading}>
//                     {isLoading ? <Loader/> : "Delete"}
//                 </button>
//         </li>
//     )
// }

// ContactItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     contactId: PropTypes.string.isRequired,
// };

import { useState, useEffect } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsAPI';
import UpdateContactItem from './UpdateContactItem';
import PropTypes from 'prop-types';
import { IconButton, CircularProgress } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { useSnackbar } from 'notistack';

export default function ContactItem({ id, name, number }) {
    const [loading, setLoading] = useState(false);
    const [updateContactId, setUpdateContactId] = useState('');
    const [deleteContact, { isLoading, isSuccess, isError, error }] =
        useDeleteContactMutation();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const updateContact = id => {
        updateContactId ? setUpdateContactId('') : setUpdateContactId(id);
    };

    useEffect(() => {
        isSuccess &&
        enqueueSnackbar('Contact successfully deleted', {
            variant: 'success',
        });
        if (isError && error?.originalStatus === 404) {
        enqueueSnackbar("Sorry, we can't find this page", {
            variant: 'error',
        });
        } else if (isError && error?.status === 'FETCH_ERROR') {
        enqueueSnackbar('Internet is disconnected', {
            variant: 'error',
        });
        } else if (isError) {
        enqueueSnackbar('Something went wrong, please try again later', {
            variant: 'error',
        });
        }
    }, [
        closeSnackbar,
        isSuccess,
        isError,
        enqueueSnackbar,
        error?.originalStatus,
        error?.status,
    ]);

    useEffect(() => {
        isLoading && setLoading(true);
    }, [isLoading]);

    return (
        <>
        <IconButton
            aria-label="delete"
            onClick={() => deleteContact(id)}
            color="primary"
            sx={{ m: '0 1rem 0 0 ', p: '0' }}
        >
            {loading ? (
            <CircularProgress size={16} thickness={6} />
            ) : (
            <DeleteRoundedIcon />
            )}
        </IconButton>
        <IconButton
            aria-label="update"
            onClick={() => updateContact(id)}
            color="primary"
            sx={{ m: '0 1rem 0 0 ', p: '0' }}
        >
            {updateContactId ? <AccessTimeRoundedIcon /> : <PublishedWithChangesRoundedIcon />}
        </IconButton>
        {updateContactId ? (
            <UpdateContactItem
            id={id}
            currentName={name}
            currentNumber={number}
            updateContact={updateContact}
            />
        ) : (
            <span>
            {name}: {number}
            </span>
        )}
        </>
    );
    }

    ContactItem.propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    };