import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";
import AlbumPage from "./pages/AlbumPage";

// component
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="overlay"></div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/artist=:artist" exact component={ArtistPage} />
        <Route
          path="/artist=:artist/album=:album"
          exact
          component={AlbumPage}
        />
      </Switch>
    </Router>
  );
}

export default App;
