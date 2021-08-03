const NavBar = () =>{
    return (
        <nav className="navBar">
            <h1> My Blog </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}

export default NavBar;