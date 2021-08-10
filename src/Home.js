import { useState } from 'react';

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
    
    

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('Sy')}>Click me again</button> {/* Anonymus arrow function */}
            <p>{name} is {age} years old </p>
            <button onClick={clickChange}>Change Name</button>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author} </p>
                </div>

            ))}
        </div>
    );
}

export default Home;