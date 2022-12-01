import './Intro.css';
export default function Intro() {
    return <h class="intro">
        <div class="grid-container">         
            <div class="maxPic"><img src={process.env.PUBLIC_URL + "imgJH1.PNG"} /></div>
            <div class="aboutMax">Max stuff here</div>
            <div class="harrisonPic"><img src={process.env.PUBLIC_URL + "imgJH1.PNG"} /></div>           
            <div class="aboutHarrison">Harrison stuff here</div>           
            <div class="thomasPic"><img src={process.env.PUBLIC_URL + "imgJH1.PNG"} /></div>
            <div class="aboutThomas">Thomas stuff here</div> 
            <div class="wileyPic"><img src={process.env.PUBLIC_URL + "imgJH1.PNG"} /></div>
            <div class="aboutWiley">Wiley stuff here</div>
        </div>
    </h>
}