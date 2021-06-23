import './style.css';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nachalo from './Nachalo';
import Sekond from './Sekond';
import Usluga from './Usluga';
import Subscribe from './Subscribe'
import Dogovor from './Dogovor';

function App() {

  return (
    <BrowserRouter>
    <div className="main">
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Nachalo></Nachalo>
          </Route>
          <Route path="/2">
            <Sekond></Sekond>
          </Route>
          <Route path="/3">
            <Usluga></Usluga>
          </Route>
          <Route path="/4">
            <Dogovor></Dogovor>
          </Route>
          <Route path="/5">
            <Subscribe></Subscribe>
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
