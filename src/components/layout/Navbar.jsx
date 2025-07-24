import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { BrainCircuit, Menu, X } from 'lucide-react';
import { ShowSidebar } from './showside';
import { Hidesidebar } from './showside';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';



const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate('/login');
      })
      .catch((error) => console.error('Logout Error:', error));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className='sidebar'>
          <li>
            <Link to="/" className="logo"><X style={{ color: 'black' }} onClick={Hidesidebar} /></Link>
          </li>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/help" className="nav-link">Help</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li>
            {user ? (
              <div className="nav-user-toggle">
                <span onClick={() => setShowLogout(!showLogout)} className="user-name">
                  {user.displayName || user.email}
                </span>
                {showLogout && (
                  <button onClick={handleLogout} className="logout-btn">Logout</button>
                )}
              </div>
            ) : (
              <Link to="/login" className="nav-link">Login</Link>
            )}
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/" className="logo">
              <span><BrainCircuit size={24} color={'black'} />Quizmify</span>
            </Link>
          </li>
          <li className='onmobile'><Link to="/" className="nav-link">Home</Link></li>
          <li className='onmobile'><Link to="/help" className="nav-link">Help</Link></li>
          <li className='onmobile'><Link to="/about" className="nav-link">About</Link></li>
          <li className='onmobile'>
            {user ? (
              <div className="nav-user-toggle">
                <span onClick={() => setShowLogout(!showLogout)} className="user-name">
                  {user.displayName || user.email}
                </span>
                {showLogout && (
                  <button onClick={handleLogout} className="logout-btn">Logout</button>
                )}
              </div>
            ) : (
              <Link to="/login" className="nav-link">Login</Link>
            )}
          </li>
          <li><Menu onClick={ShowSidebar} className='menubutton' /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



