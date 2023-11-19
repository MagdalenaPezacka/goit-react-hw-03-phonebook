import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact, deleteContact }) => {
  return (
    <li className={css.item}>
      <span className={css.name}>{contact.name}: </span>
      <a href={`tel:${contact.number}`} className={css.number}>
        {contact.number}
      </a>
      <button
        className={css.button}
        type="button"
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};
