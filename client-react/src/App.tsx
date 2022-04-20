import './App.css';
import { Layout } from './features/layout/Layout';
import { TodoListContainer } from './features/todos/components/TodoListContainer/TodoListContainer';

function App() {
  return (
    <div className='App'>
      <Layout>
        <TodoListContainer containerOptions={{hasActions: true}}/>
      </Layout>
    </div>
  );
}
export default App;
