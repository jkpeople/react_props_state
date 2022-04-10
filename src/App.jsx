import "./App.css";
import { Component } from "react";
import Box from "./components/Box";

class App extends Component {
  constructor(props) {
    super(props);

    let boxes = [];
    let numBoxes = 24;
    for (let i = 1; i <= numBoxes; i++) {
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`,
      });
    }

    // set default state
    this.state = {
      boxes,
    };
    // bind methods to this
    this.handleBoxClick = this.handleBoxClick.bind(this);                                                             // a line that alot of people forget 
  }

  getRandomColor() {
    return Math.round(Math.random() * 255);                                                                           // Will generate number between 0 and 255
  }

  handleBoxClick(event, id) {                                                                                         // Needs to randomize the color of box that's clicked // handleBoxClick will receive an event + id, using id will find the id in the state of boxes that has that id generating a new random value  
    let updatedBoxes = this.state.boxes.map((box) => {
      if (box.id == id) {
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;
      }

      return box;
    })
    this.setState({ boxes: updatedBoxes })                                                                            // Call the .setState to change boxes to whatever updated value that is (updateBoxes)
  }                                                                                                                   // This .setState being called will update boxes 



  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{
          this.state.boxes.map((box) => {
            return (
              <Box
                key={box.id}
                id={box.id}
                color={box.color}
                onClick={this.handleBoxClick}                                                                       // rendering a list of box components passing in the color on the box's object down to be used in the inline style of the actual element that is rendered by the box itself which will change its background color 
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default App;

//commit
