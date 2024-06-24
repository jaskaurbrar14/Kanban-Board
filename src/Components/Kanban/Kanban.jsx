import React from "react";

function Kanban() {
  return (
    <>
      <h1>Kanban Board</h1>
      <main>
        <section>
          <h2> To Do</h2>
          <button>Add new Task</button>
          <form>
            <label htmlFor="Title">Title </label>
            <input
              name="Title"
              id="Title"
              type="text"
              placeholder="Enter Title here"
            ></input>
            <label htmlFor="Description">Description </label>
            <input
              name="Description"
              id="Description"
              type="text"
              placeholder="Enter Description here"
            ></input>
            <button type="submit">Add new Task</button>
          </form>
          <li>
            <ul></ul>
          </li>
        </section>
        <section>
          <h2>In Progress</h2>
          <button>Add new Task</button>
          <form>
            <label htmlFor="Title">Title </label>
            <input
              name="Title"
              id="Title"
              type="text"
              placeholder="Enter Title here"
            ></input>
            <label htmlFor="Description">Description </label>
            <input
              name="Description"
              id="Description"
              type="text"
              placeholder="Enter Description here"
            ></input>
            <button type="submit">Add new Task</button>
          </form>
          <li>
            <ul></ul>
          </li>
        </section>{" "}
        <section>
          <h2>Review</h2>
          <button>Add new Task</button>
          <form>
            <label htmlFor="Title">Title </label>
            <input
              name="Title"
              id="Title"
              type="text"
              placeholder="Enter Title here"
            ></input>
            <label htmlFor="Description">Description </label>
            <input
              name="Description"
              id="Description"
              type="text"
              placeholder="Enter Description here"
            ></input>
            <button type="submit">Add new Task</button>
          </form>
          <li>
            <ul></ul>
          </li>
        </section>{" "}
        <section>
          <h2>Done</h2>
          <button>Add new Task</button>
          <form>
            <label htmlFor="Title">Title </label>
            <input
              name="Title"
              id="Title"
              type="text"
              placeholder="Enter Title here"
            ></input>
            <label htmlFor="Description">Description </label>
            <input
              name="Description"
              id="Description"
              type="text"
              placeholder="Enter Description here"
            ></input>
            <button type="submit">Add new Task</button>
          </form>
          <li>
            <ul></ul>
          </li>
        </section>
      </main>
    </>
  );
}

export default Kanban;
