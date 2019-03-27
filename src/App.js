import React, { Component } from "react";

import Title from "./components/Title";
import ScoreArea from "./components/ScoreArea";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        images,
        score: 0,
        maxScore: 0
    };

    shuffle = data =>{
       for(let i=data.length-1; i>0; i--){
           const j= Math.floor(Math.random() * (i+1))
           const temp = data[i];
           data[i] = data[j];
           data[j] = temp;
       }
       return data;
    }

    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffle(resetData);
      };
    
    handleCorrectGuess = newData => {
        const { maxScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, maxScore);
    
        this.setState({
          images: this.shuffle(newData),
          score: newScore,
          maxScore: newTopScore
        });
      };
    
      handleIncorrectGuess = data => {
        this.setState({
          images: this.resetData(data),
          score: 0
        });
      };
    


    update = (id) =>{
        // alert("clicked = "+clicked + " id = "+id);
        let guessedCorrectly = false;
        const newImages = this.state.images.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                  newItem.clicked = true;
                  guessedCorrectly = true;
                }
              }
              return newItem;
        });
        guessedCorrectly? this.handleCorrectGuess(newImages): this.handleIncorrectGuess(newImages);

    }
    
    

    // removeFriend = id => {
    //     // Filter this.state.friends for friends with an id not equal to the id being removed
    //     const friends = this.state.friends.filter(friend => friend.id !== id);
    //     // Set this.state.friends equal to the new friends array
    //     this.setState({ friends });
    // };

    render() {
        return (
            <div className="container-fluid">
                <Title/>
                <ScoreArea 
                 score={this.state.score}
                 maxscore={this.state.maxScore}
                />
                <div className="container-fluid">
                    {this.state.images.map(item => (
                        <Wrapper
                            clicked={item.clicked}
                            id={item.id}
                            image={item.image}
                            update={this.update}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default App;