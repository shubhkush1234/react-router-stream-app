import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './components/StreamCreate';
import StreamDelete from './components/StreamDelete';
import StreamEdit from './components/StreamEdit';
import StreamShow from './components/StreamShow';
import StreamList from './components/StreamList';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/edit" exact component={StreamEdit} />

      </BrowserRouter>
    </div>
  );
}

export default App;
