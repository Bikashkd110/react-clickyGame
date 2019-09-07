import React, { Component } from 'react';
import ImageHolder from "./components/ImageHolder";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Jumbotron from "./components/Jumbotron";
import cards from "./cards.json";
import './App.css';

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    imagesClicked: [],
    topScore: 0,
    score: 0,
    message: "",
    shakeit: "false"
  };

  cardClicked = id => {
    //Picture array shuffled.
     const shuffledCard = this.shuffleArray(cards);
     this.setState({cards: shuffledCard});
     
     if (this.state.imagesClicked.includes(id)) {
       this.setState({ score: 0, imagesClicked: [], message: "You clicked the same image twic, please click an image below to start the Game!", shakeit: "true"});
     }
     else {
       this.setState({
         imagesClicked: this.state.imagesClicked.concat([id]),
         score: this.state.score + 1,
         message: "Correct",
         shakeit: "false"
       });
     }
     // holding the topscore.
     if (this.state.score  > this.state.topScore) {
       this.setState({ topScore: this.state.score });
     }
     
   }
   shuffleArray = (picturesArray) => {
       for (let i = picturesArray.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
       }
       return picturesArray;

    }
  
  render() {
    return (
      <div className="App">
        <Jumbotron/>
        
        <NavBar 
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />

        <Wrapper
          shakeWrapper = {this.state.shakeit}
          pictures=
            {this.state.cards.map(picture => (
              <ImageHolder
                cardClicked={this.cardClicked}
                id={picture.id}
                key={picture.id} 
                name={picture.name}
                image={picture.image}
              />
            ))}
        />  

        <Footer/> 
          
      </div>
    );
  }
}
export default App;
