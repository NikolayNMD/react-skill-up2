import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Піти в зал", completed: false },
    { id: 2, text: "Поїсти вареники", completed: false },
    { id: 3, text: "Попрати речі", completed: false },
  ]);


  function toggleTask(id: number) {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  return (
    <ul className="space-y-5">
        {tasks.map(({ id, text, completed }) => (
            <li 
            key={id} 
            className="flex items-center justify-between p-2 border rounded-lg"
            >
                <span className={`text-left flex-1 ${completed ? "line-through text-gray-500" : ""}`}>
                    {text}
                </span>
                <button 
                    onClick={() => toggleTask(id)} 
                    className="ml-4 w-40 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {completed ? "Незавершена" : "Завершена"}
                </button>
            </li>
        ))}
    </ul>
  );
}

export default TaskList;