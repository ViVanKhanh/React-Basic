import logo from './logo.svg';
import './App.scss';
import Test from './Test/Test';

/**
 * 2 components: class component và function components( functicn và arrow function)
 * component của react là 1 class hay là 1 function có chức năng đặc biệt để render ra html
* nó sử dụng cú pháp jsx, nó là function hay là một cái hàm của js, thay vì trả về hàm hay biến thì nó trả về 1 đống html
*
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world with reactghh
        </p>
        
        <Test />
      </header>
    </div>
  );
}

export default App;
