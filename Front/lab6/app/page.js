// zadanie 3 lab6
'use client';
import React from 'react';
// import { randomInt } from 'crypto';
// import { useEffect, useState } from 'react';

export default function Home() {

  let tasks =  [
    {task: 'Przygotować prezentację', deadline: '2023-12-05' },
    {task: 'Zakupy spożywcze', deadline: '2023-12-08' },
    {task: 'Przeczytać artykuł naukowy', deadline: '2023-12-10' },
    {task: 'Ćwiczenia fizyczne', deadline: '2023-12-15' },
    {task: 'Zaplanować wakacje', deadline: '2023-12-20' },
    {task: 'Napisać raport', deadline: '2023-12-25' },
    {task: 'Sprzątanie domu', deadline: '2023-12-28' },
    {task: 'Podjąć się nowego projektu', deadline: '2024-01-02' },
    {task: 'Nauka nowego języka', deadline: '2024-01-07' },
    {task: 'Zarezerwować miejsce na koncert', deadline: '2024-01-10' }
];
  
  const DisplayTasks = ({tasks}) => {
    return (
      <div>
        <ul>
          {tasks.map((task) => (
            <li>{task.task} deadline:{task.deadline}</li>
            ))}
          </ul>
      </div>
    )
  }

  const Form = () => {
  return (
    <div>
      <form>
        <label>FormToDoItem
          <input type="text" />
        </label>
        <label>FormToDoData
          <input type="date" />
        </label>
      </form>
    </div>
  )}
    
  return (
    <div>
      <DisplayTasks tasks={tasks}/>
      <Form />
    </div>
   );
}
