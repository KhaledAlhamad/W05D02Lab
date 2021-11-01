import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./reducers/counter/counter";
import { addTodo, removeTodo, addTodos } from "./reducers/todos/todos";
import axios from "axios";

function App() {
  const [todostate, setTodo] = useState();

  const state = useSelector((state) => {
    return {
      todos: state.todos.todos,
      counter: state.counter.counter,
    };
  });

  // Dispatch (change values of counter reducer)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementCounter(1));
  };
  const decrement = () => {
    dispatch(decrementCounter(1));
  };
  const reset = () => {
    dispatch(resetCounter());
  };

  // Dispatch (change values of todos reducer)
  const addTo = (todo) => {
    dispatch(addTodo(todo));
  };
  const removeTo = (todo) => {
    dispatch(removeTodo(todo));
  };
  const addTos = (todos) => {
    dispatch(addTodos(todos));
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/", {
        params: {
          _limit: 10,
        },
      })
      .then((res) => {
        addTos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            decrement();
          }}
        >
          -
        </button>
        <a>{state.counter}</a>
        <button
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
        <br />{" "}
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
        <br />
        {state.todos.map((element) => {
          return (
            <div className="todo">
              <p>
                Task # {element.id}
                <br />
                {element.title.toUpperCase()}
              </p>
              <button
                onClick={() => {
                  removeTo(element);
                }}
              >
                Remove Todo
              </button>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
