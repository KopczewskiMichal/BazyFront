// zadanie 3 lab6
'use client';
import { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';

export default function Home() {

      let tasks =  [];
      
      const [taskArray, setTaskArr] = useState(tasks)
      useEffect (()=> {
      },[taskArray])
  
      const DisplayTasks = ({}) => {
      return (
        <div>
          <ul>
            {taskArray.map((task, index) => (
              <li key={index}>{task.task} deadline:{task.deadline}</li>
              ))}
            </ul>
        </div>
      )
    }
    
    const Form = () => {
      const [toDoText, setToDoText] = useState("")
      const [toDoDate, setToDoDate] = useState("")
      const [errorMessage, setErrorMessage] = useState("")

      const validateInputDate = (date) => {
        const actDate = new Date()
        const argDate = new Date(date)
        if (argDate.getTime() <= actDate.getTime()) return false
        else return true 
      }

      const validateInputText = (text) => {
        if (text.trim() == "") return false
        else return true 
      }

      const handleFormTextChange = event => {
        setToDoText(event.target.value);
      }
      const handleFormDateChange = event => {
        setToDoDate(event.target.value);
      }

      const handleConfirm = () => {
        if (validateInputDate(toDoDate) == false) setErrorMessage("Wprowadzona data jest wcześniejsza od aktualnej")
        else if (validateInputText(toDoText) == false) setErrorMessage("Nie wprowadzono tekstu zadania lub wprowadzono same spacje")
        else {
          const task = {task: toDoText, deadline: toDoDate}
          setTaskArr([...taskArray, task])
          setErrorMessage("")
        }
      }
      
        useEffect(() => {
        }, [toDoText, toDoDate])

        return (
          <div>
          <form>
            <p>
            <label>FormToDoItem
              <input 
              type="text"
              id="FormToDoText"
              value={toDoText}
              onChange={handleFormTextChange}/>
            </label>
            </p>
            <label>FormToDoData
              <input 
              type="date"
              id="FormToDoDate"
              value={toDoDate}
              onChange={handleFormDateChange} />
            </label>
          </form>
          <button onClick={() => handleConfirm()}>
            Confirm 
          </button>
          <p>{errorMessage}</p>
        </div>
      )
  }
        
    return (
      <div>
      <DisplayTasks/>
      <Form />
    </div>
    )

  }

  
