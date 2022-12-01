import './Harrison.css';
import React from 'react';
import commentBox from 'commentbox.io';

class PageWithComments extends React.Component {

    componentDidMount() {

        this.removeCommentBox = commentBox('5670862241923072-proj', { backgroundColor: '#fff', });
    }

    render() {

        return (
            <div className="commentbox" />
        );
    }
}

export default function Harrison() {
    return (
        <h class="harrison">
            <div class="header">
                <pageHeader>Jacob Harrison</pageHeader>
            </div>
            <img class="image1" src={process.env.PUBLIC_URL + "imgJH1.PNG"} />
            <img class="image2" src={process.env.PUBLIC_URL + "imgJH2.PNG"} />
            <div class="item1">
                Jacob Harrison<br />
                cobplaystation@gmail.com<br />
                309-992-0083<br />
                <br />
                <a href="https://github.com/jacobharrison">Click for Github!</a><br />
                <br />
                <br />
                <a href="https://linkedin.com/in/jacob-harrison-404b4724a">Click for LinkedIn!</a><br />
            </div>
            <PageWithComments />
            <div class="item2">BSE., Computer Science and Engineering - 2023<br />University of Iowa<br /><br />Fatigue analysis research paper coming soon!</div>
            <div class="item3">Software Engineer<br />-Engineering Research Facility Iowa City<br />-John Deere Chicago<br /><br />Research presented at 7th International Digital Human Modeling Symposium</div>
            <div class="item4">Sick Animation!</div>
            <div class="scroll">
                My collegiate electives include:<br />
                <div>
                    1. Artificial Intelligence<br />
                    2. Control Systems<br />
                    3. Numerical Analysis<br />
                    4. Internet of Things<br />
                    5. Database Systems.
                </div>
                My past work experience includes:<br />
                <div>
                    1. Crew Trainer - McDonalds: Aug 2017 to Aug 2018<br />
                    2. Grocery Stocker - HyVee: Sept 2018 to July 2019<br />
                    3. Team Lead - Burge Hall: Aug 2019 to Nov 2020<br />
                </div>
                My current and future work plans:<br />
                <div>
                    1. Currently<br />
                    ---Working as a software engineer for the Engineering Research Facility in Iowa City. With the guidance of Dr. Rajan Bhatt and Dr. Laura Frey Law, our goal is to implement a human fatigue model that utilizes a DH-matrix system intregrated with kinematic data for a human skeleton!<br />
                    2. Future-<br />
                    ---I have recently accepted a job with John Deere in West Loop Chicago as a software engineer where I will begin my career this July!<br />
                </div>
                Prefered Languages:<br />
                <div>
                    Python, Java, C++, C#, MatLab
                </div>
                Weird Skills:<br />
                <div>
                    1. Juggling<br />
                    2. Walking on hands<br />
                    3. Sleeping for a long time<br />
                </div>
                Achievments:<br />
                <div>
                    1. 3 x Men's 1st in Age Class - Half Marathon<br />
                    2. Completed 8 hour - Howl at the Moon Ultra<br />
                    3. National Scholars Award<br />
                    4. Robert Bruce Brown Engineering Scholarship<br />
                </div>
                Goals in life: <br />
                <div>
                    1. Make a technological difference towards the future<br />
                    2. Make the world a happier place<br />
                    3. Create generational wealth<br />
                </div>
                Favorite Games:
                <div>
                    1. MW2<br />
                    2. Minecraft<br />
                    3. Elden Ring<br />
                    4. Paladins<br />
                    5. Black Ops Zombies<br />
                    6. Mario
                </div>
                Favorite Color:
                <div>
                    Hawkeye Yellow!<br />
                </div>
                Hobbies:
                <div>
                    1. Running<br />
                    2. Swimming<br />
                    3. Video Games<br />
                    4. Watching sports<br />
                    5. Alcohol Tastings<br />
                    6. Programming!<br />
                </div>
                High School:
                <div>
                    1. Cross country captain<br />
                    2. Track and field captain<br />
                    3. Student council member<br />
                    4. Class raised over $1 million for charity<br />
                    5. Performed as a jester<br />
                    6. Rocket Scholar award<br />
                    7. Voted most likely to fall asleep in class<br />
                </div>
                Pets:
                <div>
                    1. Oreo (kitten pictured to the left)<br />
                    2. Cosmo (fish)<br />
                    3. Wanda (fish)<br />
                    4. Herky (fish)<br />
                    5. Shooter (fish)<br />
                    6. Chucky (fish)<br />
                    7. Pool Noodle (fish)<br />
                    8. Tim (fish)<br />
                    9. Memo (fish)<br />
                    10. Red King (fish)<br />
                    11. Gary (snail)<br />
                </div>
                Notes:
                <div>
                    1. Thank you for visiting my page!<br />
                    2. Leave a comment for any animated design advice you might recommend<br />
                    3. Enjoy your day!<br />
                </div>
            </div>
        </h>
    )    
}

function clickText() {
    var textValue = document.getElementById("tEntry").value;
    document.getElementById("btn").textContent = textValue;
}