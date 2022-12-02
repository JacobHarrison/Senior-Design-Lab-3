import './Max.css';
import React from 'react';
import commentBox from 'commentbox.io';

class PageWithComments extends React.Component {

    componentDidMount() {

        this.removeCommentBox = commentBox('5670862241923072-proj');
    }


    render() {

        return (
            <div className="commentbox" />
        );
    }
}

export default function Max() {
    return (
        <h class="barten">
            <div class="header">
                <pageHeader>Max's Page!</pageHeader>
            </div>
            <img src={process.env.PUBLIC_URL + "Max_image.jpeg"} width="500" height="650" />
            <div class="item2">
                <p>Click <a href="https://github.com/max-barten">here</a> to visit my GitHub!</p>
                <p>Click <a href="https://www.linkedin.com/in/max-barten-31162b116/">here</a> to visit my LinkedIn!</p>
                <p>You can contact me at: mbarten12@gmail.com</p></div>
            <div class="scroll">
                <b>Max's Summary</b>
                <div>Max is a student at the University of Iowa pursuing a degree
                in Computer Science and Enginering. He hopes to pursue a career
                in software engineering in the future. Max most enjoys doing back-end development.
                His favorite projects so far include working on homeworks for SELT and AI. When Max
                is not doing homework, he enjoys spending time with friends and watching movies.
                    <br />
                    <br />
                    <b>Hobbies are: </b>
                    <br />
                    Going fishing, spending time with the family, and personal programming projects. </div></div>
            <PageWithComments></PageWithComments>

        </h>
    )
}

function clickText() {
    var textValue = document.getElementById("tEntry").value;
    document.getElementById("btn").textContent = textValue;
}
