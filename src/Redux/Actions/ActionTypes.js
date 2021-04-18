import React from 'react'

const ActionTypes = ({todos , setTodos , setEditTodo}) => {
    const handleEdit = ({id}) =>{
        const findTodo = todos.find((todo)=>todo.id === id);
        setEditTodo(findTodo);
    };

    const handleDelete =({id}) =>{
         setTodos(todos.filter((todo) =>todo.id !==id));

     };
    return (
    <div>
       
        
         { todos.map((todo)=>(
             <li className='list-todo' key={todo.id}>
                   <input type="text" value= {todo.title} 
                   className="list" 
                   onChange={(event)=> event.preventDefault()}
                    />
        <div>
           <button className="buttom-edit task-buttom" onClick={()=>handleEdit(todo)} >
           <i class="fa fa-edit"></i>
           </button>
           <button className="buttom-delete task-buttom" onClick={()=> handleDelete(todo)}>
           <i class="fa fa-trash-alt"></i>
           </button>

        </div>
             </li>
         ) )}
           
       
 
      
   
        
    </div>
    )
}

export default ActionTypes
