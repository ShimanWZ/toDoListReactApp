import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

function ToDoList( { jsondata, curritem, setjsondata} ) {
  const [currList, setCurrList] = useState(jsondata[curritem]['list']);
  const navigate = useNavigate();

  const updateJsonData = useEffect(() => {
    let newJson = {...jsondata};
    newJson[curritem]['list'] = currList;
    setjsondata(newJson);
  }, [currList]);

    const changeChecked = (id) => {
      setCurrList(currList.map((item) => {
        return item.id === id ? {...item, done: !item.done} : item;
      }));
    }

    const addToDo = (e) => {
      if (e.key === 'Enter') {
        var id = 1;
        if (currList.length !== 0){
          id = (currList[currList.length - 1]).id + 1;
        }
        let obj = {
          done: false,
          todo: e.target.value,
          id
        };
        setCurrList([...currList, obj]);
        e.target.value = '';
      }
    }

    const deleteToDoList = () => {
      let tempJsonData = {...jsondata}
      delete tempJsonData[curritem]
      setjsondata(tempJsonData);
      console.log('deleted');
      navigate("/");
    }

    return (
      <div>
        <div className='toDoContent'>
          <div className='toDoHeader'>
            <h2>{jsondata[curritem]['name']}</h2>
            <button className='deleteBtn' onClick={deleteToDoList}>
              <img className='deleteBtn' src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/delete.png"/>
            </button>
          </div>
          <div className='toDolist'>
            {
              currList.map((item) => {
                  return (
                      <div className='checkbox'>
                        <input 
                          className='checkbox-pull'
                          id={item.id}
                          key={item.id}
                          type='checkbox' 
                          onChange={() => changeChecked(item.id)}
                          checked={item.done} 
                          value={item.todo}
                        />
                        <label htmlFor={item.id}><span></span>{item.todo}</label>
                      </div>
                  )
              })
          }

          <div className='checkbox'>
            <input 
              className='checkbox-pull'
              id="addTodo"
              type='checkbox' 
              onChange={() => null}
              checked={false} 
            />
            <label htmlFor="addTodo"><span></span></label>
            <input className='newToDo' type='text' placeholder='add...' onKeyDown={addToDo} />
          </div>
        </div>
      </div>
    </div>
    )
}

export default ToDoList