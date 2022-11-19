
// import { useDispatch } from 'react-redux';
// import css from './Filter.module.css';
import PropTypes from 'prop-types'
// import { filterContacts } from 'redux/contacts/contactsSlice';
// import {getFilter} from 'redux/selectors'
import {TextField} from '@mui/material'



export default function Filter({filter, handleChange}) {


    return (

        <TextField
            label="Find contacts by name"
            size="small"
            type="text"
            name="filter"
            value={filter}
            title="enter finded name here"
            onChange={e => handleChange(e.target.value)}
            sx={{width: '22rem'}}
        />
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};