import { useDispatch, useSelector } from 'react-redux';
import { StyledInput, Styledlabel } from './Filter.styled';
import { filterContact } from 'redux/reducer/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filters.value);
  const dispatch = useDispatch();

  return (
    <Styledlabel>
      Find contacts by name
      <StyledInput
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
        name="filter"
        placeholder="Filter..."
        value={filter}
      />
    </Styledlabel>
  );
};
