import './Home.css';
export default function Home() {
    return <h class="home">
       <div class="grid-container">
            <img src={process.env.PUBLIC_URL + "imgJH1.PNG"} />
            <div class="aboutMax">Max stuff here</div>
            <img src={process.env.PUBLIC_URL + "imgJH1.PNG"} />
            <div class="aboutHarrison">Harrison stuff here</div>       
            <img src={process.env.PUBLIC_URL + "imgJH1.PNG"} />
            <div class="aboutThomas">Thomas stuff here</div>
            <img src={process.env.PUBLIC_URL + "imgJH1.PNG"} />       
            <div class="aboutWiley">Wiley stuff here</div>
       </div>
    </h>
}