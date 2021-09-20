import './App.css'
import {Component} from "react";
import MyComponent from "./component/MyComponent";
import MySecondComponent from "./component/MySecondComponent"
import Counter from "./component/Counter";
import Say from "./component/Say";
import EventPractice from "./component/EventPractice";
import FunctionalEventPractice from "./component/FunctionalEventPractice";
import ValidationSample from "./component/ValidationSample";
import ScrollBox from "./component/ScrollBox";
import IterationSample from "./component/IterationSample";

class App extends Component {
    render() {
        const counter = 'counter'
        return (
            <div>
                <MyComponent name="React" favoriteNumber={7}>리액트</MyComponent>
                <hr/>
                <MySecondComponent favoriteNumber={3}>리액트</MySecondComponent>
                <hr/>
                <Counter name={counter} number={10}/>
                <hr/>
                <Say/>
                <EventPractice/><br/>
                <FunctionalEventPractice/>
                <hr/>
                <ValidationSample/>
                <hr/>
                <ScrollBox ref={(ref) => this.scrollBox = ref}/>
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    맨 밑으로
                </button>
                <hr/>
                <IterationSample/>
            </div>
        );
    }
}

export default App;
