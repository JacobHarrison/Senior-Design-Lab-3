import './Harrison.css';
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

export default function Harrison() {
    return (
        <h class="harrison">
            <div class="header">
                <pageHeader>Jacob Harrison</pageHeader>
            </div>
            <img class="image1" src={process.env.PUBLIC_URL + "imgJH1.PNG"} />
            <img class="image2" src={process.env.PUBLIC_URL + "testImage.PNG"} />
            <div class="item1">Jacob Harrison<br />cobplaystation@gmail.com<br />309-992-0083</div>
            <PageWithComments />
            <div class="item2">BSE., Computer Science and Engineering - 2023<br /><br/>University of Iowa</div>
            <div class="item3">
                <input type="text" id="tEntry" name="textEntry"></input></div>
            <div class="item4">
                <button id="btn" onClick={clickText}>Login Button</button></div>
            <div class="scroll">Stuff about me here, github/life/job/school/fun/awards/etc</div>
        </h>
    )    
}

function clickText() {
    var textValue = document.getElementById("tEntry").value;
    document.getElementById("btn").textContent = textValue;
}