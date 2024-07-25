import logo from './logo.svg';
import './App.scss';
import Test from './Test/Test';
import ListToDo from './ToDos/ListToDo';
import Nav from './Nav/Nav';
import Home from './Test/Home';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/**
 * 2 components: class component và function components (function và arrow function)
 * component của react là 1 class hay là 1 function có chức năng đặc biệt để render ra html
 * nó sử dụng cú pháp jsx, nó là function hay là một cái hàm của js, thay vì trả về hàm hay biến thì nó trả về 1 đống html
 */

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/todo">
              <ListToDo />
            </Route>

            <Route path="/about">
              <Test />
            </Route>

            <Route path="/user" exact>
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>

          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
