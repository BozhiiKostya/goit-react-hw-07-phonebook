import { Layout } from './Layout.styled';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Layout>
  );
};
