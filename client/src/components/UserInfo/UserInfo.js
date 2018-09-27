import React, { Component } from "react";
import Card from "../Card/Card"
import "./UserInfo.css";


class UserInfo extends Component {
    render(){
        return(
            <Card>
                <div className="info-content">
                    <h2>Brittani Slimp</h2>
                    <h6>Full Stack Junior Developer</h6>
                    <ul className="languages">Language(s):</ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>PHP</li>
                    <ul className="skills">Skills:</ul>
                        <li>HTML/CSS</li>
                        <li>React</li>
                        <li>MongoDB</li>
                </div>
            </Card>
        )
    }
}

export default UserInfo;