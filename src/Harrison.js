import './Harrison.css';
export default function Harrison() {
    return (
        <h class="harrison">
            <div class="header">
                <pageHeader>Team 13 - Killed DeBug!</pageHeader>
            </div>
            <img class="image" src={process.env.PUBLIC_URL + "imgJH1.PNG"} />
            <div class="item1">Jacob Harrison</div>
            <div class="item2">cobplaystation@gmail.com</div>
            <div class="item3">
                <input type="text" id="tEntry" name="textEntry"></input></div>
            <div class="item4">
                <button id="btn" onClick={clickText}>Login Button</button></div>
            <div class="scroll">Stuff about me here, github/life/job/school/fun/awards/etc</div>
        </h>
    )    
}

function clickText() {
    var textValue = document.getElementById("tEntry").value;
    document.getElementById("btn").textContent = textValue;
}