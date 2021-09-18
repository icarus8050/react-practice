import './App.css'
import {Component} from "react";
import MyComponent from "./component/MyComponent";
import MySecondComponent from "./component/MySecondComponent"

class App extends Component {
    render() {
        return (
            <div>
                <MyComponent name="React" favoriteNumber={7}>리액트</MyComponent>
                <hr/>
                <MySecondComponent favoriteNumber={3}>리액트</MySecondComponent>
            </div>
        );
    }
}

export default App;
