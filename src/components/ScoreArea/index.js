import React from "react";
import "./style.css";

 const ScoreArea = props => {
  return (
    
    <h1 className="text-center score">
      Score = {props.score}  |  Max Score ={props.maxscore}
    </h1>


  )
}

export default ScoreArea;