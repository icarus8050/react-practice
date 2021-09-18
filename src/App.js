import './App.css'
import {Component} from "react";
import MyComponent from "./component/MyComponent";

class App extends Component {
    render() {
        return (
            <MyComponent name="React" favoriteNumber={7}>리액트</MyComponent>
        );
    }
}

export default App;
