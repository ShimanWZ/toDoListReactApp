import React from 'react'
import ToDoList from './ToDoList'

const ToDoPage = ({item}) => {
  console.log(item)
  return (
    <>
      <ToDoList jsondata={toDoLists} curritem={item} setjsondata={setToDoLists} item={data[item]} list={data[item]['list']}/>
    </>
  )
}

export default ToDoPage