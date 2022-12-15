export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      { contacts.length ? <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name} {number}
              <button onClick={() =>deleteContact(id)}type="button">Delete contact</button>
            </li>
          );
        })}
      </ul> : 'No results..' }
    </>
  );
};
