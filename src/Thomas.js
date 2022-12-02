import './Thomas.css';
import React from 'react';
import commentBox from 'commentbox.io';

class PageWithComments extends React.Component {

    componentDidMount() {

        this.removeCommentBox = commentBox('5726753473429504-proj');
    }


    render() {

        return (
            <div className="commentbox" />
        );
    }
}


export default function Thomas() {

    return (
        <h class="thomas">
            <div class="header">
                <pageHeader>Thomas' Page!</pageHeader>
            </div>
            <img src={process.env.PUBLIC_URL + "IMG_8031.jpg"} width="500" height="700" />
            <div class="item2">
                <p>Click <a href="https://github.com/thomas12393">here</a> to visit my GitHub! </p>
                <p>You can contact me at: tpawlowski06@gmail.com</p></div>
            <div class="scroll">
                <b>Thomas'Summary</b>
                <div>Hello, I am a senior Computer Science and Engineering student at the University of Iowa with a focus in Software Engineering. I've worked at the Sciences Library here at the University of Iowa for almost 3 years here at the University. In my free time I enjoy learning writing programs, hanging out with friends, watching sports, and playing golf.
                  <br />
                    <br />
                  Hobbies are:
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