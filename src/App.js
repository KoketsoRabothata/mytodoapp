import {AiOutlineDelete} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs'
import './App.css';
import './components/CSS/style.css'
import { useState,useEffect } from 'react';

function App() {

  const [isCompleteScreen,setIsCompleteScreen]= useState(false)
  const [allTodos,setTodos ] = useState ([])
  const [newTitle,setNewTitle] = useState ['']
  const [newDescription , setNewDescription] = useState ['']


  const handleNewTitle =(e) =>{
    setNewTitle(e.target.value);
  };

  const handleNewDescription = (e) =>{
    setNewDescription(e.target.value);
  };


const handleAddTodo =(e) =>{
  let newTodoItem ={
    title : newTitle,
    description: newDescription,
  }



  let updatedTodoarr =[...allTodos];
  updatedTodoarr.push(newTodoItem);
  setTodos(updatedTodoarr);
  localStorage.setItem('todolist',JSON.stringify(updatedTodoarr))

}
useEffect(() =>{
  let saveTodo = JSON.parse(localStorage.getItem('todolist'));
  if(saveTodo){
    setTodos(saveTodo)
  }
},[]);

// delete functionality 
const handleDeleteTodo = (Index) =>{
  let updatedTodoarr = [...allTodos];
  updatedTodoarr.splice(Index,1);
  setTodos(updatedTodoarr);
  localStorage.setItem('todolist',JSON.stringify(updatedTodoarr));
};

// function to handle task completed functionality 
const handleTaskCompleted= ()=>{
  
}



  return (
    <>
<h1>My Todos</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text' name='title' value={newTitle} onChange={handleNewTitle} placeholder="What is the  task title?"/>
          </div>

          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' name='title' value={newDescription} onChange={handleNewDescription} placeholder="What's the task description?"  />
          </div>

          <div className='todo-input-item'>
            <button type='button' className='primaryBtn' onClick={handleAddTodo} >Add</button>
          </div>
        </div>


      <div className='btn-area'>
        <button className={`secondaryBtn ${isCompleteScreen===false && 'active'} onClick={() => setIsCompleteScreen(false)}`}>Todo</button>
      <button   className={`secondaryBtn ${isCompleteScreen===true && 'active'} onClick={() => setIsCompleteScreen(true)}`}>Completed</button>
      </div>

      {allTodos.map(
        (Item, Index) =>{
          return(
            <div className='todo-list' >

          <div className='todo-list-item' key ={Index}>
          <h3>{Item.title}</h3>
          <p>{Item.description}</p>
          </div>
          <div className='icons'>
           < AiOutlineDelete className='icon' title='delete' onClick={() => handleDeleteTodo(Index)} />
           < BsCheckLg className='check-icon ' />
          </div>
        </div>)
        }
      )}

  

 
          
        
    
   
      </div>
 
    </>
  );
}

export default App;
