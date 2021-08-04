const NavBar = () =>{
    return (
        <nav className="navBar">
            <h1> My Blog </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:"black",
                    backgroundColor:"rgba(9,13,241,.2)",
                    borderRadius:'8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default NavBar;