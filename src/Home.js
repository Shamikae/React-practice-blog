import { useState } from 'react';

const Home = () => {
    // let name = 'Kay'
    const[name, setName] = useState('Kay');
    const[age, setAge] = useState(1);
/* e for event object*/
    const handleClick = (e) => {
        console.log('Hello Ninjas', e);
    }
    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }
    const clickChange = (name) => {
        // name = 'Syrus';
        // console.log('Hello ' + name);
        setName('Syrus');
        setAge(2);
    }
    

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('Sy')}>Click me again</button> {/* Anonymus arrow function */}
            <p>{name} is {age} years old </p>
            <button onClick={clickChange}>Change Name</button>
        </div>
    );
}

export default Home;