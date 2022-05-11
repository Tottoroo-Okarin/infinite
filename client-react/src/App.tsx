import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import styles from './App.module.scss'
import { Layout } from './features/layout/Layout';
import { TodoDetailsPage } from "./features/todos/components/TodoDetailsPage/TodoDetailsPage";
import { TodoListContainer } from './features/todos/components/TodoListContainer/TodoListContainer';
import { TodoListPage } from './features/todos/components/TodoListPage/TodoListPage';

function App() {
  return (
    <div className={styles['App']}>
      <Layout>
        <Switch>
          <Route exact path="/" component={TodoListPage} />
          <Route path="/details" component={TodoDetailsPage} />
        </Switch>
      </Layout>
    </div>
  );
}
export default App;
