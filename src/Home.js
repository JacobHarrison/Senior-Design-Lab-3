import './Home.css';
export default function Home() {
    return <h class="home">
        <div class="grid-container">
            <div class="header">
                Team 13 - Killed DeBug
       </div>
            <img src={process.env.PUBLIC_URL + "IMG_7178.jpg"} />
        </div>
    </h>
}