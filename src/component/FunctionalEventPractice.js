import {useState} from "react";

const FunctionalEventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    })
    const {username, message} = form
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm)
    }

    const onClick = () => {
        alert(`${username}: ${message}`)
        setForm({
            username: '',
            message: ''
        })
    }
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick()
        }
    }

    return (
        <div>
            <h1>이벤트 연습2</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="Type something..."
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default FunctionalEventPractice
