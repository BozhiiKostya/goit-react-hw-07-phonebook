import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  StyledButton,
  StyledError,
  StyledField,
  StyledForm,
  StyledLabel,
} from './ContactsForm.styled';
import { createContact } from 'redux/reducer/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.number().min(999, 'Too Short!').required('Required'),
});

export const ContactsForm = () => {
  const contacts = useSelector(state => state.contacts.value);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        if (
          contacts.find(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          )
        ) {
          alert(`${values.name} is already in contacts.`);
          return;
        }
        dispatch(createContact({ ...values, id: nanoid() }));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledLabel>
          <p>Name</p>
          <StyledField name="name" placeholder="Name..." />
          <StyledError name="name" component="span" />
        </StyledLabel>

        <StyledLabel>
          <p>Number</p>
          <StyledField name="number" type="tel" placeholder="Number..." />
          <StyledError name="number" component="span" />
        </StyledLabel>

        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};
