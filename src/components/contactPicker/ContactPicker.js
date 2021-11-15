import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={(e) => onChange(e)}>
      <option value="NoContact">No contact is selected</option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
