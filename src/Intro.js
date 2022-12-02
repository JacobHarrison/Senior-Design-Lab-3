import './Intro.css';
export default function Intro() {
    return <h class="intro">
        <div class="grid-container">
            <div class="maxPic"><b>Max Barten</b><img src={process.env.PUBLIC_URL + "Max_image.jpeg"} /></div>
            <div class="aboutMax">
                <b>Major:</b><br />
                    Computer Science and Engineering<br />
                <b>Skills:</b><br />
                    Software Engineering + Embedded Software Development<br />
                <b>Interests:</b><br />
                    Fishing, Exercise, Movies, creating fun personal projects<br />
                <b>Contact Information:</b><br />
                    515-777-0769<br />
                    mbarten12@gmail.com<br />
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
            <div class="thomasPic"><b>Thomas Pawlowski</b><img src={process.env.PUBLIC_URL + "IMG_8031.jpg"} /></div>
            <div class="aboutThomas">
                <b>Major:</b><br />
                    Computer Science and Engineering<br />
                <b>Skills:</b><br />
                    Python, Java, C++, and Ruby<br />
                <b>Interests:</b><br />
                    watching or playing golf <br />
                <b>Contact Information:</b><br />
                    708-289-9794<br />
                    tpawlowski06@gmail.com<br />
            </div>
            <div class="wileyPic"><b>Jacob Wiley</b><img src={process.env.PUBLIC_URL + "WileyIntro.jfif"} /></div>
            <div class="aboutWiley">
                <b>Major:</b><br />
                    Computer Science and Engineering<br />
                <b>Skills:</b><br />
                    Software Engineering, Embedded Software Engineering<br />
                <b>Interests:</b><br />
                    Arduino Projects, Poker, Videogames<br />
                <b>Contact Information:</b><br />
                    641-455-4610<br />
                    jacobjwiley@gmail.com<br />
            </div>
        </div>
    </h>
}