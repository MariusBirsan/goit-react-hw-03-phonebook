import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={style.contactList}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={style.delete}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
