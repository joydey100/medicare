import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import SingleService from "./Components/SingleService/SingleService";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthContextComponent from "./Context/AuthContextComponent";

function App() {
  return (
    <AuthContextComponent>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute exact path="/about">
              <About />
            </PrivateRoute>
            <Route exact path="/services">
              <ServicesPage />
            </Route>
            <PrivateRoute exact path="/services/:id">
              <SingleService />
            </PrivateRoute>
            <PrivateRoute exact path="/contact">
              <Contact />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </AuthContextComponent>
  );
}

export default App;
