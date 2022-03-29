import React, { useEffect, useRef } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import todosCollectionReducer from './store/reducers/todos-collection.reducer';
import { TodosCollectionActions } from './store/actions';
import { TodosCollectionSelectors } from './store/selectors';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './features/todos/models/todo.model';



function App() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(TodosCollectionSelectors.getAllTodos)

  const todoNameRef: any = useRef()
  

  const handleAddTodo = () => {
    const name: string = todoNameRef.current.value
    if (name === '') return
    dispatch(TodosCollectionActions.add({ id: uuidv4(), title: name, completed: false }))
  }

  const toggleCompletedTodo = ({id, completed}: Todo) => {
    dispatch(TodosCollectionActions.updateSingle({id: id, todo: {completed: !completed}}))
  }

  const handleClearCompletedTodos = () => {
    if (todos.length === 0) return
    const completedTodosIds = todos.filter(todo => todo.completed).map(todo => todo.id)
    dispatch(TodosCollectionActions.removeMany({ ids: completedTodosIds }))
  }

  /*useEffect(() => {
    
  }, [])*/

  return (
    <div className="App">
      <div> {todos.map(todo => {
        return (
          <div>
            <label>
              {todo.title}
              <input type="checkbox" checked={todo.completed} onChange={() => toggleCompletedTodo(todo)}/>
            </label>
          </div>
        )
      })
      }
      </div>
      <div>
        <input ref={todoNameRef} type="text"> 
        </input>
        <button onClick={handleAddTodo}>
          add
        </button>
        <button onClick={handleClearCompletedTodos}>
          clear completed
        </button>
      </div>
     
    </div>
  );
}

export default App;
