import {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            name: props.name
        }
    }

    render() {
        const {number, name} = this.state
        return (
            <div>
                <h1>{name}</h1>
                <h1>{number}</h1>
                <button
                    onClick={() => {
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1
                            }
                        });

                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }), () => {
                            console.log('방금 setState가 호출되었습니다.');
                            console.log(this.state)
                        });
                    }}
                >
                    +1
                </button>
            </div>
        )
    }
}

export default Counter
