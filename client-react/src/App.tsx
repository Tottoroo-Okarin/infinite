import classNames from "classnames/bind";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styles from './App.module.scss'
import { Layout } from './features/layout/Layout';
import { TodoDetailsPage } from "./features/todos/components/TodoDetailsPage/TodoDetailsPage";
import { TodoListContainer } from './features/todos/components/TodoListContainer/TodoListContainer';
import { TodoListPage } from './features/todos/components/TodoListPage/TodoListPage';

const classes = classNames.bind(styles)

function App() {
  const appStyles = classes({
    app: true
  })

  return (
    <div className={appStyles}>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/todos"/>
          </Route>
          <Route exact path="/todos" component={TodoListPage} />
          <Route path="/todos/details/:id" component={TodoDetailsPage} />
        </Switch>
      </Layout>
    </div>
  );
}
export default App;
