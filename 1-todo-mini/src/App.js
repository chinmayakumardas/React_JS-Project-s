import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import Input from "./components/Input";

function App() {
  const [todos, setToDo] = useState([]);
  const removeToDo = (id) =>{
        console.log(id);
        const newTodos=todos.filter(
          (id,index)=>{
            if(index !== id){
              return true;
            }else{
              return false;
            }
          }
        )
        setToDo(newTodos);
  }
  const addToDoHandler = (item) => {
    setToDo([
      ...todos,
      {
        item,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };

  return (
    <div className="bg-black h-screen p-3">
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
        <Input handler={addToDoHandler} ></Input>
        <Box data={todos} removeHandler={removeToDo}></Box>
      </div>
    </div>
  );
}

export default App;
