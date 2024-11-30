import React from "react";
import "./profil.css";
import stagiaire from "./picture/s1.png"


function Profil() {
    return (
        <div className="all">
            {/* Partie 1 */}
            <div>
                <h3 className="title1">Student profile page design example</h3>
                <h5 className="title2">A responsive student profile page design</h5>
            </div>

            {/* Partie 2 */}
            <div className="info">
                <img src={stagiaire} alt="Student"></img>
                <h3>Issam Ahassan Samin</h3>
                <hr></hr>
                <p>Student ID: 32460001</p>
                <p>Class: 4</p>
                <p>Section: A</p>
            </div>

            {/* Partie 3 */}
            <div className="tableau">
                <h3>General Informations</h3>
                <table>
                    <tr>
                        <td>Roll</td>
                        <td>:</td>
                        <td>125</td>
                    </tr>
                    <tr>
                        <td>Academic Year</td>
                        <td>:</td>
                        <td>2020</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>:</td>
                        <td>Male</td>
                    </tr>
                    <tr>
                        <td>Religion</td>
                        <td>:</td>
                        <td>Group</td>
                    </tr>
                    <tr>
                        <td>Blood</td>
                        <td>:</td>
                        <td>B+</td>
                    </tr>
                </table>
            </div>

            {/* Partie 4 */}
            <div className="other">
                <h2>Other informations</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, <br></br>
                    eaque similique dicta molestiae pariatur ut blanditiis labore neque delectus.<br></br>
                    Sequi est consectetur ab nostrum illo suscipit, libero laborum exercitationem adipisci.</p>
            </div>
        </div>
    );
}

export default Profil;
