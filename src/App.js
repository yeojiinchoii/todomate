import {useState} from 'react'
import AddTaskForm from './components/AddTaskForm.jsx'
import UpdateForm from './components/UpdateForm.jsx'
import ToDo from './components/ToDo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  // Tasks State
  const [toDo, setToDo] = useState([
    {id: 1, title: 'Buy milk', status: false},
    {id: 2, title: 'Pay the bills', status: false}
  ])

  // Temp State
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  // Add task 
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1 
      
      setToDo([
        ...toDo, 
        { id: num, title: newTask, status: false }
      ])

      setNewTask('')

    }
  }

  // Delete task 
  const deleteTask = (id) => {
    
    setToDo(toDo.filter(task => task.id !== id))

  }

  // Mark task as done
  const markDone = (id) => {
    
    setToDo(toDo.map(
      task => task.id === id 
      ? ({ ...task, status: !task.status }) 
      : (task) 
    ))

  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('')
  }

  // Change task for update
  const changeHolder = (e) => {

    setUpdateData({...updateData, title: e.target.value})

  }

  // Update task
  const updateTask = () => {
    
    let removeOldRecord = [...toDo].filter(task => task.id !== updateData.id)
    setToDo([
      ...removeOldRecord, 
      updateData
    ])
    
    setUpdateData('')

  }

  return (
    <div className="container App">

    <br /><br />
    <h2>ToDoMate</h2>
    <br /><br />

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeHolder={changeHolder}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />  
    
  <br /><br />
    <div class="nav-wrap">
      <nav class="bottom-nav">
        <p class="menu-default">Home</p>
        <p class="menu-active">Task</p>
        <p class="menu-default">Category</p>
        <p class="menu-default">Setting</p>
      </nav>
    </div>
    <br /><br />

    </div>
  );
}


export default App;
