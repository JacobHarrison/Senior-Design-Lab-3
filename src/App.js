import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div class="App"> 
          <div class="header">
              <pageHeader>Team 13 - Killed DeBug!</pageHeader>
          </div>
          <button id="homeBtn">Jacob Harrison</button>
          <button id="JHBtn">Jacob Wiley</button>
          <button id="JWBtn">Home Page</button>
          <button id="MBBtn">Max Barten</button>
          <button id="TPBtn">Thomas Pawlowski</button>
          <img class="image" src={process.env.PUBLIC_URL + "testImage.PNG"} />
          <div class="item1">Jacob Harrison</div>
          <div class="item2">cobplaystation@gmail.com</div>
          <div class="item1">
              <input type="text" id="tEntry" name="textEntry"></input></div>
          <div class="item2">
              <button id="btn" onClick={clickText}>Login Button</button></div>
          <div class="scroll">Basic description of our team here</div>
    </div>
  );
}
function clickText() {
    var textValue = document.getElementById("tEntry").value;
    document.getElementById("btn").textContent = textValue;
}

export default App;
