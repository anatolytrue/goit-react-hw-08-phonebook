import { useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import  ContactList  from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import {Box} from '@mui/material'


export default function ContactsPage() {
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e);
  };

  return (
    <Box
      component="div"
      sx={{
        minWidth: '20rem',
        overflow: 'auto',
        textOverflow: 'ellipsis',
        m: '50px'
      }}
    >
      <Box
        component="div"
        position="revative"
        // sx={{
        //   position: 'static'
        // }}
      >
        <ContactForm />
      </Box>
      <Box
        position="absolute"
      >
          <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList filter={filter} />
      </Box>
    
    </Box>
  )
}
