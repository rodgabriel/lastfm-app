import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
