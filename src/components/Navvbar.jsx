function Navvbar({ darkMode, setDarkMode, search, setSearch }) {
  return (
    <nav className="navbar harra-navbar sticky-top shadow-sm">
      <div className="container d-flex flex-wrap gap-2 align-items-center">
        <a className="navbar-brand fw-bold fs-4 m-0" href="#top">
          <i className="fa-solid fa-pepper-hot text-harra me-2"></i>
          Harra <span className="text-harra"> & Tasty</span>
        </a>

        <ul className="nav d-none d-lg-flex mx-lg-3">
          <li className="nav-item">
            <a className="nav-link nav-harra" href="#top">Accueil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-harra" href="#about">Notre histoire</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-harra" href="#menu">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-harra" href="#delivery">Livraison</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-harra" href="#contact">Contact</a>
          </li>
        </ul>

        <div className="input-group search-box flex-grow-1 ms-lg-auto">
          <span className="input-group-text border-0">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Rechercher un plat..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          className="btn btn-outline-harra rounded-pill px-3"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <>
              <i className="fa-solid fa-sun me-2"></i>Light
            </>
          ) : (
            <>
              <i className="fa-solid fa-moon me-2"></i>Dark
            </>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navvbar;