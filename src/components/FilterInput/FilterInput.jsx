import PropTypes from 'prop-types';
import { Filter } from './FilterInput.styled';

export const FilterInput = ({ value, onChange }) => {
  return (
    <Filter>
      <label>Find Contact by name</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Filter>
  );
};

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
