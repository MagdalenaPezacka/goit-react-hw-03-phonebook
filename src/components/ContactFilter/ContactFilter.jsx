import css from './ContactFilter.module.css';
import PropTypes from 'prop-types';

export const ContactFilter = ({ filter, addFilter }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={css.input}
        value={filter}
        onChange={addFilter}
        placeholder="Enter name"
      />
    </label>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  addFilter: PropTypes.func.isRequired,
};
