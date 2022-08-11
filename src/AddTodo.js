import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import image from './data/newTodo.gif'

const AddTodo = ({AddToDoList, jsondata}) => {
    const [newTodoName, setNewTodoName] = useState('')
    const navigate = useNavigate();

    const addToList = (e) => {
        e.preventDefault()
        let tempName = newTodoName
        let newToDolist = {
            id: (jsondata[Object.keys(jsondata)[Object.keys(jsondata).length - 1]])['id'] + 1,
            name: newTodoName,
            list: []
        }
        AddToDoList(newToDolist)
        navigate(`../${newTodoName}`)
    }

  return (
    <>
    <form class="form__group field" onSubmit={addToList}>
        <div class="col-3">
        <input 
            type='text' 
            id='todoname'
            class="effect-8"
            required
            placeholder="To-do list name"
            value= {newTodoName}
            onChange={(e) => setNewTodoName(e.target.value)}
        />
        <span class="focus-border">
            <i></i>
        </span>
        </div>
    </form>
    <img id='addTodoImg' src={image} />
  </>
  )
}

export default AddTodo