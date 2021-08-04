const home = () => {
/* e for event object*/
    const handleClick = (e) => {
        console.log('Hello Ninjas', e);
    }
    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('Sy')}>Click me again</button> {/* Anonymus arrow function */}
        </div>
    );
}

export default home;