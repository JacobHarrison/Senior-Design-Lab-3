import './Wiley.css';
import React from 'react';
import commentBox from 'commentbox.io';

class PageWithComments extends React.Component {

    componentDidMount() {

        this.removeCommentBox = commentBox('5670862241923072-proj', { backgroundColor: '#fff' });
    }


    render() {

        return (
            <div className="commentbox" />
        );
    }
}
export default function Wiley() {
    return (
        <h class="RandomHeader">
            <div class="container">
                <div class="Filler"></div>
                <div class="one">
                    <div class="alignTextHead">
                        Jacob Wiley, CSE Student
        </div>
                </div>
                <div class="Filler2"></div>
                <div class="three">
                    <div class="alignText">
                        Jacob is a passionate CSE student who is expecting to graduate after the spring 2023 semester. He hopes to land a Software Engineering position
                        before graduating. Ideally, he hopes to land an Embedded Software Engineering position as he loves working with embedded systems. Some of his favorite
                        projects have been creating java server applications and building GUIs for arduino projects. His hobbies are going out with friends, spending time
                        with family, videogames, poker and playing with my dogs.
        </div>
                </div>

                <div class="four">
                    <img class="image" src={process.env.PUBLIC_URL + "WileyImage.jfif"} />
                </div>

                <div class="five">
                    <img class="image" src={process.env.PUBLIC_URL + "WileyImage2.jfif"} />
                </div>
                <div class="contactInfo">
                    <div class="alignTextContact">
                        Here's a link to my -
            <a href="https://github.com/jacob-wiley">GitHub</a><br></br>
            Please check out my -
            <a href="https://www.linkedin.com/in/jacob-wiley-52b51a19a/">LinkedIn</a><br></br>
                    </div>
                </div>
                <div class="myComments">
                    <img class="image" src={process.env.PUBLIC_URL + "MemeWork.jpg"} />
                </div>


            </div>

            <div class="commentContainer">
                <div class="commentFiller1"></div>
                <div class="myCommments">
                    <PageWithComments></PageWithComments>
                </div>
                <div class="commentFiller2"></div>

            </div>



        </h>

    )
}