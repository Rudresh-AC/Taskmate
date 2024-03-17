import React, { useState } from "react";
import Header from "./components/Header";
import Addtask from "./components/Addtask";
import ShowTask from "./components/ShowTask";

import "./App.css";

const App = () => {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({});

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Addtask
          task={task}
          setTask={setTask}
          tasklist={tasklist}
          setTasklist={setTasklist}
        />
        <ShowTask
          task={task}
          setTask={setTask}
          tasklist={tasklist}
          setTasklist={setTasklist}
        />
      </div>
    </div>
  );
};

export default App;
