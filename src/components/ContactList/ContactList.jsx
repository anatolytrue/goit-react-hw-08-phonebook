// import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
// import { deleteContact } from 'redux/contactsSlice';
import ContactItem from './ContactItem';
// import {getFilter} from 'redux/contacts/selectors'
import { useFetchContactsQuery } from 'redux/contacts/contactsAPI';
import PropTypes from 'prop-types'

export default function ContactList({filter}) {

    const {data } = useFetchContactsQuery();
    // const { filter } = useSelector(state => getFilter(state));
    // const [deleteContact, {isLoading}] = useDeleteContactMutation();
    // const dispatch = useDispatch();
    
    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase().trim();
        return data.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter))
    }
    
    // const handleDeleteContact = contactId =>
    //     deleteContact(contactId);

    const contactsList = getVisibleContacts();
    console.log(contactsList)

    return (
        <ul className={css.phonebookContactList}>
            {contactsList.map(({ id, name, phone }) => {
                return (
                    <ContactItem
                        key={id}
                        name={name}
                        number={phone}
                        contactId={id}
                    />
            )
        }
            
        )}
    </ul>
    )
}

ContactList.propTypes = {
    filter: PropTypes.string.isRequired,
};