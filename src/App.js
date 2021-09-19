import './App.css'
import {Component} from "react";
import MyComponent from "./component/MyComponent";
import MySecondComponent from "./component/MySecondComponent"
import Counter from "./component/Counter";
import Say from "./component/Say";
import EventPractice from "./component/EventPractice";
import FunctionalEventPractice from "./component/FunctionalEventPractice";

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
                <EventPractice /><br/>
                <FunctionalEventPractice />
            </div>
        );
    }
}

export default App;
