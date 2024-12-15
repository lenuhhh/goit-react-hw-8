import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  ContactForm,
  SearchBox,
  ContactList,
} from "../../components";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts())[dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Container>
  );
};

export default ContactsPage; 
