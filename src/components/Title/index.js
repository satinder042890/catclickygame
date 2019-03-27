import React from "react";
import "./style.css";

const Title = () => {
    return (

        <div className="jumbotron">
            <div className="row">
                <div className="col-6">
                    <img src="https://media.giphy.com/media/huKYfJU2Uh4vS/giphy.gif" alt="not found" />
                </div>
                <div className="col-6">
                    <div className="heading">
                        <h1 id="head">Interactive Puzzle!</h1><br />
                        <h3 id="headintro">Click on an image to earn points, but don't click on any image more than once!</h3>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Title;
