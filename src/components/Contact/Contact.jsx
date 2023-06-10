import PropTypes from 'prop-types';
import { UserContact } from './Contact.styled';

export const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <UserContact key={id}>
      <span>{name}</span>
      <span>{number}</span>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </UserContact>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
