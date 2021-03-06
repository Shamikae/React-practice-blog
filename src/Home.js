import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    // let name = 'Kay'
    // Hook - useState
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
    // Output a list of data stored in useState and map 
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum', author:'sam', id: 1},
        { title: 'My story', body: 'lorem ipsum', author:'henry', id: 2},
        { title: 'My stream of income', body: 'lorem ipsum', author:'kim', id: 3},
    ]);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id );
        setBlogs(newBlogs);
    }

    const [name1, setName1] = useState('mario');

    useEffect(() =>{
        console.log('use effect ran');
        console.log(name1);
    }, [name1] ); /*hook occurs after every render when state changes. dependencies effect when it runs*/

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('Sy')}>Click me again</button> {/* Anonymus arrow function */}
            <p>{name} is {age} years old </p>
            <button onClick={clickChange}>Change Name</button>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> {/* Prop */}
            <BlogList blogs={blogs.filter((blog) => blog.author === 'kim' )} title="Mika's Blogs"/> {/* blogs - Props allow you to pass data from parent component to child component */}
            <button onClick={() => setName1('sham')}>change name</button>
            <p>{name1}</p>
        </div>
    );
}

export default Home;