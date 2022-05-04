import styles from './App.module.scss'
import { Layout } from './features/layout/Layout';
import { TodoListContainer } from './features/todos/components/TodoListContainer/TodoListContainer';

function App() {
  return (
    <div className={styles['App']}>
      <Layout>
        <TodoListContainer containerOptions={{hasActions: true}}/>
      </Layout>
    </div>
  );
}
export default App;
