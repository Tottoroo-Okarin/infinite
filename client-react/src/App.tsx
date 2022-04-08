import React, { useEffect, useRef } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import todosCollectionReducer from './store/reducers/todos-collection.reducer';
import { TodosCollectionActions } from './store/actions';
import { TodosCollectionSelectors } from './store/selectors';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './features/todos/models/todo.model';
import TileListContainer from './components/TileListContainer/TileListContainer';
import { TodoListContainer } from './features/todos/components/TodoListContainer';




function App() {
  return (
    <div className="App">
      <TileListContainer>
        <TileListContainer.Body>
          <TodoListContainer/>
        </TileListContainer.Body>
      </TileListContainer>
    </div>
  );
}
export default App;
