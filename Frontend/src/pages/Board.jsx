import { useState } from "react";
import data from "../app/store";
import TaskCard from "../utilitys/TaskCard";
import "../index.css";

export default function Board() {
  const [tasks, settasks] = useState(data);

  const hendelDreagStart = (e, id) => {
    // console.log("drag is start");
    // e.preventDefault()
    // console.log(id);

    // const emptyImage = new Image();
    // emptyImage.src = ""; // Blank image to remove ghosting effect
    // e.dataTransfer.setDragImage(emptyImage, 0, 0);

    // e.target.classList.add("dragging")

    e.dataTransfer.setData("taskId", id);
  };

  const hendelOndrp = (e, newStatus) => {
    e.preventDefault();
    console.log("drop is start");
    const taskId = +e.dataTransfer.getData("taskId");
    const updatedData = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    settasks(updatedData);
    console.log(taskId);
    console.log(updatedData);
  };

    
  const hendeldropOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Here You Can Manage Your Task All Status</h3>
      <div className="flex w-[90%] m-auto justify-around">
        <div
          className="w-1/3 border-2 border-r-0 border-orange-600"
          onDrop={(e) => hendelOndrp(e, "pending")}
          onDragOver={hendeldropOver}
        >
          <h3 className="text-center">Pending Task</h3>

          {tasks.map((task, ind) => {
            if (task.status === "pending") {
              return (
                <div
                  key={ind}
                  draggable = {true}
                  onDragStart={(e) => hendelDreagStart(e, task.id)}
                  className="p-2"
                >
                  <TaskCard {...task} />
                </div>
              );
            }
          })}
        </div>

        <div
          className="w-1/3 border-2 border-orange-600 border-r-0"
          onDrop={(e) => hendelOndrp(e, "in_progrash")}
          onDragOver={hendeldropOver}
        >
          <h3 className="text-center">In Progrash Task</h3>
          {tasks.map((task, ind) => {
            if (task.status === "in_progrash") {
              return (
                <div
                  key={ind}
                  className="p-2"
                  draggable
                  onDragStart={(e) => hendelDreagStart(e, task.id)}
                >
                  <TaskCard {...task} />
                </div>
              );
            }
          })}
        </div>

        <div
          className="w-1/3 border-2 border-orange-600"
          onDrop={(e) => hendelOndrp(e, "complete")}
          onDragOver={hendeldropOver}
        >
          <h3 className="text-center">Completed Task</h3>
          {tasks.map((task, ind) => {
            if (task.status === "complete") {
              return (
                <div
                  key={ind}
                  className="p-2"
                  draggable
                  onDragStart={(e) => hendelDreagStart(e, task.id)}
                >
                  <TaskCard {...task} />
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="w-[90%] border-2 border-blue-500 m-auto mt-5 border-2 hover:h-[200px]">
        <h3 className="text-center mb-2">drop Here to delete</h3>
        <div
          className="border-2 grid  justify-around m-auto hover:bg-gray-500 h-[50px]"
          onDrop={(e) => hendelOndrp(e, "delete")}
          onDragOver={hendeldropOver}
        >
          {tasks.map((task, ind) => {
            if (task.status === "delete") {
              return (
                <div
                  key={ind}
                  draggable
                  onDragStart={(e) => hendelDreagStart(e, task.id)}
                  className="w-1/3 p-2"
                >
                  <TaskCard {...task} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
