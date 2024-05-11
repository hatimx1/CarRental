function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
            <div className="container">
                <a href="#" className="navbar-brand">
                    Car Rental
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                                Home
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="#offres" className="nav-link">
                                Offres
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar