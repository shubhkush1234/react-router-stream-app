import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne= () => {
  return <div>Page One</div>
}

const PageTwo= () => {
  return <div>
      Page Two
      <button>click me</button>
    </div>
}
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />

        <Route path="/PageTwo" exact component={PageTwo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
