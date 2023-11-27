import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledButton,
  StyledError,
  StyledField,
  StyledForm,
  StyledLabel,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.number().min(999, 'Too Short!').required('Required'),
});

export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        for (const el of contacts) {
          if (el.name === values.name) {
            return alert(`${el.name} is already in contacts.`);
          }
        }
        dispatch(
          addContact({
            name: values.name,
            phone: values.number,
          })
        );
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
