import './App.css'
import {Component} from "react";
import MyComponent from "./component/MyComponent";

class App extends Component {
    render() {
        const name = 'react';
        return (
            <div className="react">
                {name}
                <MyComponent />
            </div>
        );
    }
}

export default App;
