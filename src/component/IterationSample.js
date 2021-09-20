const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람']
    const namesList = names.map((name, idx) => <li key={idx}>{name}</li>);
    return <ul>{namesList}</ul>
}

export default IterationSample
