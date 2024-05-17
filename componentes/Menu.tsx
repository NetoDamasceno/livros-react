import React from 'react';

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/LivroLista" className="nav-link">Catálogo</a>
                        </li>
                        <li className="nav-item">
                            <a href="/LivroDados" className="nav-link">Novo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
