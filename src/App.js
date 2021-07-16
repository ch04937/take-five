import { Switch, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import TicTacToe from "./components/TicTacToe";
// import { useEffect } from "react";

function App() {
  // automatically sign in users
  // useEffect(()=> {

  // }, [])
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/tictactoe" component={TicTacToe} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
