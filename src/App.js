import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="App">
          <div class="header">
              <pageHeader>Page Header Goes Here!</pageHeader>
          </div>
          <div class="databox">Data and Plots Go Here!</div>
          <div class="item">
              <label for="textEntry">Press button to update button's text with value of text field</label></div>
          <div class="item">
              <input type="text" id="tEntry" name="textEntry"></input></div>
          <div class="item">
              <button id="btn" onClick={clickText}>Off</button></div>
          <div class="scroll">
              random wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom wordsrandom words</div>
    </div>
  );
}
function clickText() {
    var textValue = document.getElementById("tEntry").value;
    document.getElementById("btn").textContent = textValue;
}

export default App;
