import React from "react";

import IconButton from "../Template/IconButton";

function Todo({ lista, handleRemove, handleMarkAsDone, handleMarkAsPending }) {
  const renderRows = () => {
    const list = lista || [];
    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            style="success"
            icon="check"
            onClick={() => handleMarkAsDone(todo)}
            hide={todo.done}
          />
          <IconButton
            style="warning"
            icon="undo"
            onClick={() => handleMarkAsPending(todo)}
            hide={!todo.done}
          />
          <IconButton
            style="danger"
            icon="trash-o"
            onClick={() => handleRemove(todo)}
            hide={!todo.done}
          />
        </td>
      </tr>
    ));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
}

export default Todo;
