import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select name={name} onChange={onChange} defaultValue={""}>
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => (
        <option key={contact} value={contact}>
          {contact}
        </option>
      ))}
    </select>
  );
};
