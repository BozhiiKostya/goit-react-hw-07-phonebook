import {
  StyledButton,
  StyledItem,
  StyledList,
  StyledText,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectLoading,
} from 'redux/selectors';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  console.log(contacts);
  console.log(filter);
  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledList>
      {isLoading && !error && <b>Request in progress...</b>}

      {filterContacts.map(({ id, name, phone }) => {
        return (
          <StyledItem key={id}>
            <StyledText>{name + ': ' + phone}</StyledText>
            <StyledButton onClick={() => dispatch(deleteContact(id))}>
              Delete
            </StyledButton>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};
