import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import './App.css';

function App() {
    return (
        <React.StrictMode>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<LivroLista />} />
                    <Route path="/novo" element={<LivroDados />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
}

function NavBar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Catálogo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/novo' ? 'active' : ''}`} to="/novo">Novo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}



export default App;
