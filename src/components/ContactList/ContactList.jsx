// import { useSelector } from 'react-redux';
// import css from './ContactList.module.css';
// import { deleteContact } from 'redux/contactsSlice';
import ContactItem from './ContactItem';
// import {getFilter} from 'redux/contacts/selectors'
import { useFetchContactsQuery } from 'redux/contacts/contactsAPI';
import PropTypes from 'prop-types';
import { List, ListItem } from '@mui/material';
// import { height } from '@mui/system';

export default function ContactList({filter}) {

    const {data } = useFetchContactsQuery();
    // const { filter } = useSelector(state => getFilter(state));
    // const [deleteContact, {isLoading}] = useDeleteContactMutation();
    // const dispatch = useDispatch();
    
    // const getVisibleContacts = () => {
    //     const normalizedFilter = filter.toLowerCase().trim();
    //     return data?.filter(contact =>
    //         contact.name.toLowerCase().includes(normalizedFilter))
    // }

    const getVisibleContacts = data?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim()))
    
    
    // const handleDeleteContact = contactId =>
    //     deleteContact(contactId);

    // const contactsList = getVisibleContacts();
    // console.log(contactsList)

    if (getVisibleContacts) {
        return (
            <List sx={{ mt: '0.5rem'}}>
                {getVisibleContacts.map(({ id, name, number }) => (
                    <ListItem key={id} sx={{height: '40px'}}>
                        <ContactItem
                            id={id}
                            name={name}
                            number={number}
                            contactId={id}
                        />
                    </ListItem>
                    )
                )}
            </List>
        )
    }
}

ContactList.propTypes = {
    filter: PropTypes.string.isRequired,
};