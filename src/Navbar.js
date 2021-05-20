import { Link } from 'react-router-dom';
// to get the const template below, write "sfc", then press enter, it automatically genetates it for you.
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* how to inline stlye */}
                {/* style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius: '8px'
                }} */}
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;