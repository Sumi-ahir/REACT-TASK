const Card = ({ user, toggleStatus }) => {
  return (
    <div style={{ border: "1px solid #000", padding: "15px", margin: "10px" }}>
      <h3>Name: {user.name}</h3>
      <p>Skill: {user.skill}</p>

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          checked={user.active}
          onChange={() => toggleStatus(user.id)}
        />
        {user.active ? " Active" : " Inactive"}
      </label>

      {/* Conditional Rendering */}
      {user.active && <p style={{ color: "green" }}>User is Active</p>}
      {!user.active && <p style={{ color: "red" }}>User is Inactive</p>}

      {/* Button */}
      <button onClick={() => toggleStatus(user.id)}>
        {user.active ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
};

export default Card;
