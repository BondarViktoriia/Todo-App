import PropTypes from 'prop-types';
import {FilterLabel,FilterTodo,FilterInput} from './Filter.styled'

const Filter = ({ value, onChange }) => {
  return (
   <FilterTodo> <FilterLabel>
      Фильтр по имени <FilterInput type="text" value={value} onChange={onChange} />
    </FilterLabel></FilterTodo>
  );
};

Filter.propTypees = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
