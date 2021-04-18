import React , {useState} from 'react';
import './App.css';
import TodoList from './Component/TodoList';
import Action from './Redux/Actions/Action';
import Types from './Redux/Actions/ActionTypes';


const App = () => {
  const [input , setInput] = useState("");
  const [todos , setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className='container'>
       <div className='app-wrapper'>
        <div>
          <TodoList/>
        </div>
        <div>
          <Action
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          
          />
        </div>
       </div>
       <div>
         <Types todos={todos} setTodos= {setTodos} setEditTodo= {setEditTodo} />
       </div>
      
    </div>
  );
}

export default App;
