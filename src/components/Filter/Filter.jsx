import { useDispatch, useSelector } from 'react-redux';
import { StyledInput, Styledlabel } from './Filter.styled';
import { filterContact } from 'redux/reducer/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
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
