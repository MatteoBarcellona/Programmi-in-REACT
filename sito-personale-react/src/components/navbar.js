function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm"
      style={{ padding: '0.75rem 1.5rem' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Matteo Barcellona
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
