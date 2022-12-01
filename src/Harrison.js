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
            <div class="item4">
                <button id="btn" onClick={clickText}>Login Button</button></div>
            <div class="scroll">
                My collegiate electives include: Artificial Intelligence, Control Systems, Numerical Analysis, Machine Learning, Database Systems. <br />
            </div>
        </h>
    )    
}

function clickText() {
    var textValue = document.getElementById("tEntry").value;
    document.getElementById("btn").textContent = textValue;
}