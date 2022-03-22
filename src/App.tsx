import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import todosCollectionReducer from './store/reducers/todos-collection.reducer';
import { TodosCollectionActions } from './store/actions';
import { TodosCollectionSelectors } from './store/selectors';



function App() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(TodosCollectionSelectors.getAllTodos)

  useEffect(() => {
    dispatch(TodosCollectionActions.add({ id: 1, title: 'csdc', completed: false }))
  }, [])

  return (
    <div className="App">
      {todos.map(todo => {
        return (
          <div> {todo.title}</div>
        )
      })
      }
    </div>
  );
}

export default App;
