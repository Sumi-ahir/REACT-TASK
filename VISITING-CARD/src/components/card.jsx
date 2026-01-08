import { useState } from "react";

function Card() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTask() {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  }

  function toggleComplete(index) {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  }

  function deleteTask(index) {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}
              onClick={() => toggleComplete(index)}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                cursor: "pointer"
              }}>
            {item.text}
            <button onClick={(e) => {
              e.stopPropagation(); 
              deleteTask(index)
            }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
