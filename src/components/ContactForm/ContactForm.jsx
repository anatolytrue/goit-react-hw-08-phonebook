import { useState, useEffect} from "react";
// import { nanoid } from 'nanoid';
// import { getContacts } from 'redux/selectors';
// import { addContact } from "redux/contactsSlice";
import { useAddContactMutation, useFetchContactsQuery } from "redux/contacts/contactsAPI";
import { Button, TextField, Box, CircularProgress } from '@mui/material';
import  AddIcCallRoundedIcon  from '@mui/icons-material/AddIcCallRounded';
// import { useDispatch} from 'react-redux';
// import css from './ContactForm.module.css';
// import Loader from "components/Loader/Loader";
// import { toast } from "react-toastify";
import { useSnackbar } from 'notistack';


export default function ContactForm() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const {data} = useFetchContactsQuery();
    const [addContactApi, { isLoading, isSuccess, isError, error }] = useAddContactMutation();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    // console.log(useAddContactMutation());
    // const dispatch = useDispatch();

    // const handleAddContact = ({ name, phone }) => {
    //     const newContact = {
    //         id: nanoid(),
    //         name,
    //         phone,
    //         };
    //     data.find(contact => newContact.name.toLowerCase() === contact.name.toLowerCase())
    //         ? alert(`${newContact.name} is already in contacts`)
    //         : addContactApi(newContact) && reset();
    // }

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        data.some(contact => contact.name === name)
            ? alert(`${name} is already in contacts`)
            : addContactApi({
                name: name,
                number: number,
            });
        setName('');
        setNumber('');
        // handleAddContact({name, phone});
        // reset();
    };

    // const reset = () => {
    //     setName('');
    //     setPhone('');
    // }

    useEffect(() => {
    isSuccess &&
        enqueueSnackbar('Contact added successfully', {
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
        enqueueSnackbar,
        isSuccess,
        isError,
        error?.originalStatus,
        error?.status,
        closeSnackbar,
    ]);


    return (

        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'center',
                width: '22rem',
                border: '1px solid black',
                borderRadius: '4px',
                padding: '0 1rem',
            }}
        >
            <TextField
                label="Name"
                size="small"
                margin="normal"
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleChange}
                required
            />
            <TextField
                label="Phone"
                size="small"
                margin="normal"
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={handleChange}
                required
            />
            <Button
                variant="contained"
                type="submit"
                margin="normal"
                sx={{
                    width: "10rem",
                    m: '1rem 0'
                }}
                endIcon={
                    isLoading
                        ? (<CircularProgress size={16} thickness={4} color="inherit" />)
                        : (<AddIcCallRoundedIcon/>)
                }
            >
                Add Contact
            </Button>
        </Box>

            // <form className={css.phonebookForm} onSubmit={handleSubmit}>
            //     <label className={css.phonebookLabel} >
            //     Name
            //         <input
            //             className={css.phonebookInput}
            //             type="text"
            //             name="name"
            //             value={name}
            //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //             onChange={handleChange}
            //             required
            //         />
            //         <input
            //             type="tel"
            //             name='phone'
            //             value={phone}
            //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            //             required
            //             onChange={handleChange}
            //         />
                    
            //         <button
            //                 type='submit'
            //                 className={css.phonebookBtnAdd}>
            //             {isLoading ? <Loader/> : 'Add contact'}
            //         </button>
            //     </label>
            // </form>
        
    )

}

