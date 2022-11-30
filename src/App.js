import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Harrison from './Harrison';
import Thomas from './Thomas';
import Wiley from './Wiley';
import Max from './Max';
import Home from './Home';



function App() {
    let Component
    switch (window.location.pathname) {
        case "/":
            Component = Home
            break
        case "/barton":
            Component = Max
            break
        case "/harrison":
            Component = Harrison
            break
        case "/pawlowski":
            Component = Thomas
            break
        case "/wiley":
            Component = Wiley
            break
    }
    return (
    <div class="App"> 
            <Navbar />
            <Component class="comp"/>
    </div>
  );
}


export default App;
