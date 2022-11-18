
// import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import PropTypes from 'prop-types'
// import { filterContacts } from 'redux/contacts/contactsSlice';
// import {getFilter} from 'redux/selectors'



function Filter({filter, handleChange}) {

// const filter = useSelector(getFilter);
// const dispatch = useDispatch();

// const handleChangeFilter  = e => {
//     dispatch(filterContacts(e.target.value));
// }

    return (
        <label className={css.phonebookFilterLabel}>
        Filter by name
            <input
                className={css.filterInput}
                name="filter"
                type="text"
                value={filter}
                onChange={handleChange}
                placeholder="name surname"
            />
    </label>
    )
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};