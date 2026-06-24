import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);

  const [stats, setStats] = useState({});

  const [title, setTitle] = useState("");

  const [priority, setPriority] = useState(1);

  const fetchData = async () => {

    try {

      const taskRes = await axios.get(
        "http://127.0.0.1:9200/tasks"
      );

      const statsRes = await axios.get(
        "http://127.0.0.1:9200/stats"
      );

      setTasks(taskRes.data);

      setStats(statsRes.data);

    }

    catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    fetchData();

    const interval = setInterval(
      fetchData,
      3000
    );

    return () => clearInterval(interval);

  }, []);

  const addTask = async () => {

    if (!title) return;

    await axios.post(

      "http://127.0.0.1:9200/tasks",

      {

        title,

        priority

      }

    );

    setTitle("");

    fetchData();

  };

  return (

    <div className="container">

      <h1>⚡ Task Queue Dashboard</h1>

      <div className="stats">

        <div className="card">

          Waiting

          <h2>{stats.waiting}</h2>

        </div>

        <div className="card">

          Active

          <h2>{stats.active}</h2>

        </div>

        <div className="card">

          Completed

          <h2>{stats.completed}</h2>

        </div>

        <div className="card">

          Failed

          <h2>{stats.failed}</h2>

        </div>

      </div>

      <div className="addTask">

        <input

          value={title}

          onChange={(e) =>

            setTitle(e.target.value)

          }

          placeholder="Task title"

        />

        <select

          value={priority}

          onChange={(e) =>

            setPriority(

              Number(e.target.value)

            )

          }

        >

          <option value={1}>Critical</option>

          <option value={2}>High</option>

          <option value={3}>Medium</option>

          <option value={4}>Low</option>

        </select>

        <button onClick={addTask}>

          Add Task

        </button>

      </div>

      <h2>Tasks</h2>

      {

        tasks.map((task) => (

          <div

            key={task.id}

            className="task"

          >

            <span>

              {task.title}

            </span>

            <span>

              P{task.priority}

            </span>

            <span>

              {task.status}

            </span>

          </div>

        ))

      }

    </div>

  );

}

export default App;