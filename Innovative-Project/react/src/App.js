import React from 'react';
/*import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyComponent from './MyComponent';
import NewComponents from './NewComponents';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MyComponent} />
        <Route path="/new-page" component={NewComponents} />
      </Switch>
    </Router>
  );
}

export default App;*/
import NewComponents from './NewComponent.js';
function App() {
  return (
    <div className="App">
       <div className="App">
      <NewComponents />
    </div>
    </div>
  );
}
export default App;
/*import MyComponent from './MyComponent.js';
function App() {
  return (
    <div className="App">
       <div className="App">
      <MyComponent />
    </div>
    </div>
  );
}
export default App;*/
