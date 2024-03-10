import React, { useState } from 'react';

const Account = ({ onSave, user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);

  const handleSave = () => {
    onSave({ name, email, address });
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="allproducts">
      <h2>Account</h2>
      {isEditing ? (
        <>
          <label>
            <h2>Name:</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label> <br/><br/>
          <label>
            <h2>Email:</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label><br/><br/>
          <label>
           <h2> Address:</h2>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label><br/><br/>
          <br/><br/>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>Name: {user.name}</h2> <br/><br/>
          <h2>Email: {user.email}</h2> <br/><br/>
          <h2>Address: {user.address}</h2> <br/><br/>
          <br/><br/>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Account;