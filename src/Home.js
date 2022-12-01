import './Home.css';
export default function Home() {
    return <h class="home">
       <div class="grid-container">
            <img src={process.env.PUBLIC_URL + "imgJH1.PNG"} />
       </div>
    </h>
}