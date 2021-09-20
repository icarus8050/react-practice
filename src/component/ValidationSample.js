import {Component} from "react";
import '../css/ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.inputTag.focus()
    }

    handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                clicked: true,
                validated: this.state.password === '0000'
            })
        }
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => this.inputTag=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                    onKeyPress={this.handleOnKeyPress}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample
