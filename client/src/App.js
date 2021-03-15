import "./App.css";
import Header from "./components/header/Header";
import RecommendedVideos from "./components/recommended_video/RecommendedVideos";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/search/SearchPage";
import SearchContext from "./context/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchContext>
        <Router>
          <Header />
          <Switch>
            <Route path="/search/:searchTerm">
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            </Route>
            <Route path="/">
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            </Route>
          </Switch>
        </Router>
      </SearchContext>
    </div>
  );
}

export default App;
