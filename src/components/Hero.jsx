function Hero() {
  return (
    <section className="hero rounded-4 p-4 p-md-5 mb-4 text-white">
      <div className="hero-content">
        <span className="badge bg-light text-danger mb-3">
          <i className="fa-solid fa-fire me-2"></i>Spécialité piquante
        </span>
        <h1 className="display-5 fw-bold">
          Des plats qui <span className="text-warning">brûlent la langue</span> !
        </h1>
        <p className="lead mb-4">
          Harissa, piment, épices... Ici, on aime quand ça pique.
          <br />
          Tu es prêt(e) à relever le défi ?
        </p>
        <a href="#menu" className="btn btn-harra btn-lg rounded-pill px-4">
          Commander maintenant
          <i className="fa-solid fa-arrow-right ms-2"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;