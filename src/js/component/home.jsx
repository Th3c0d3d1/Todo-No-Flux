import React, { useState } from "react";

//include images into your bundle

//create your first component

function Home() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  // take in todo and give it an id
  const addTodo = (e, todo) => {
    e.preventDefault()
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // adds new todo to the list
    // (...) appends new todo to list
    setList([...list, newTodo]);

    // clear input box
    // The input itself but not the list since it is what actually contains the data you need.
    // Input corresponds to the input text value
    // i.e => DO: SetInput("") but Do Not setList("")
    setInput("");
  };

  function delToDo(id){
    setList((current)=>(
      current.filter((item, index)=>{
        return index != id
      })
    ))
  }

  return (
    <div className="parent">
      <h1>Todo List</h1>
      <form onSubmit={() => addTodo(event, input)}>
      <input
        type="text"
        placeholder="Add something to do..."
        value={input}
        onChange={(e) => {
          // Assign target value to temp
          let temp = e.target.value;
          setInput(temp);
        }}
      />

      {/* onClick initiates addTodo function */}
      <button onClick={() => addTodo(input)}>Add</button>
      </form>
      <ul >
        {list.map((item, index) => {
          // Access property name of object
          return <li key={item.id}>
			{item.todo}
      <button className="delete-button" onClick={()=> delToDo(index)}>Del</button>
			</li>
		  })}
      </ul>
    </div>
  );
}

export default Home;
