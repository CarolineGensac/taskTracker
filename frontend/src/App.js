import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";

import { addToDo, getAllToDo } from "./utils/HandleApi";

function App() {

  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");

  
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  return (
    <div className="App">

    <div className="container">

      <h2>To Do List</h2>

      <div className="top">
          <input
            type="text"
            placeholder="What do you need to do ? "
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

           <div
            className="add"  onClick={() => addToDo(text, setText,setToDo)}> App</div>
          </div>

          <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
            />
          ))}

          </div>

      </div>
      </div>
  );
}

export default App;
