import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Фильтр по имени <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypees = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
