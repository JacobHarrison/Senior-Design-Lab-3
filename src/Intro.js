import './Intro.css';
export default function Intro() {
    return <h class="intro">
        <div class="grid-container">
            <div class="maxPic"><b>Max Barten</b><img src={process.env.PUBLIC_URL + "imgJH1.PNG"} /></div>
            <div class="aboutMax">
                <b>Major:</b><br />
                    Computer Science and Engineering<br />
                <b>Skills:</b><br />
                    Skills here<br />
                <b>Interests:</b><br />
                    Interests here<br />
                <b>Contact Information:</b><br />
                    XXX-XXX-XXXX<br />
                    XXXXXXX@gmail.com<br />
            </div>
            <div class="harrisonPic"><b>Jacob Harrison</b><img src={process.env.PUBLIC_URL + "imgJH3.PNG"} /></div>           
            <div class="aboutHarrison">
                <b>Major:</b><br />
                Computer Science and Engineering<br />
                <b>Skills:</b><br />
                Engineering Problem Solving<br />
                <b>Interests:</b><br />
                Staying active and playing games<br />
                <b>Contact Information:</b><br />
                309-992-0083<br />
                cobplaystation@gmail.com<br />
            </div>
            <div class="thomasPic"><b>Thomas Pawlowski</b><img src={process.env.PUBLIC_URL + "imgJH1.PNG"} /></div>
            <div class="aboutThomas">
                <b>Major:</b><br />
                    Computer Science and Engineering<br />
                <b>Skills:</b><br />
                    Skills here<br />
                <b>Interests:</b><br />
                    Interests here<br />
                <b>Contact Information:</b><br />
                    XXX-XXX-XXXX<br />
                    XXXXXXX@gmail.com<br />
            </div>
            <div class="wileyPic"><b>Jacob Wiley</b><img src={process.env.PUBLIC_URL + "imgJH1.PNG"} /></div>
            <div class="aboutWiley">
                <b>Major:</b><br />
                    Computer Science and Engineering<br />
                <b>Skills:</b><br />
                    Skills here<br />
                <b>Interests:</b><br />
                    Interests here<br />
                <b>Contact Information:</b><br />
                    XXX-XXX-XXXX<br />
                    XXXXXXX@gmail.com<br />
            </div>
        </div>
    </h>
}