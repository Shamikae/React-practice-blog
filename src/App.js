import './App.css';
import NavBar from './NavBar';
import Home from './Home';

function App() {
    const title = 'Welcome to my Blog';
  return (
    <div className="App">
        <NavBar/>
        
      <div className="content">
          <h1> {title}</h1>
          <Home/>
      </div>
    </div>
  );
}

export default App;
