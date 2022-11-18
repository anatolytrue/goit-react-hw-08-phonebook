import  ContactForm  from 'components/ContactForm/ContactForm';
import  ContactList  from 'components/ContactList/ContactList';
import  Filter  from 'components/Filter/Filter';
import { useState } from 'react';

export default function ContactsPage() {
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e);
  };

  return (
    <div>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList filter={filter} />
    </div>
  )
}

// export const Contacts = () => {
//   const [showAddContact, setShowAddContact] = useState(null);

//   const dispatch = useDispatch();

//   const { data: contacts, isFetching, isLoading } = useGetContactsQuery();
//   const [addContact, { status }] = useAddContactMutation();
//   const filterState = useSelector(state => state.filter.value);

//   const handleSubmitForm = contact => {
//     contacts.find(
//       item => item.name.toLowerCase() === contact.name.toLowerCase()
//     )
//       ? alert(` ${contact.name} is already in contacts`)
//       : addContact(contact);
//   };

//   const changeFilter = e => {
//     dispatch(filterContacts (e.currentTarget.value));
//   };

//   const normalFilter = filterState.toLowerCase();
//   if (!contacts) {
//     return;
//   }

//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalFilter)
//   );
//   return (
//     <div>
//       {status === 'pending' && <Loader />}
//       <Filter
//         value={filterState}
//         onChange={changeFilter}
//         setShowAddContact={setShowAddContact}
//       />
//       {showAddContact && (
//         <ContactForm
//           onSubmit={handleSubmitForm}
//           setShowAddContact={setShowAddContact}
//         />
//       )}

//       {isLoading && <Loader />}

//       {!isFetching && contacts.length > 0 ? (
//         <ContactList contacts={visibleContacts} />
//       ) : (
//         <h3>Please, add new contact</h3>
//       )}
//     </div>
//   );
// };
