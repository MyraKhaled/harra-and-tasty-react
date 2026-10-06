const values = [
  {
    icon: "fa-fire-flame-curved",
    title: "100 % piquant",
    text: "Chaque plat a son niveau de piquant, de doux à brûle-la-langue.",
  },
  {
    icon: "fa-pepper-hot",
    title: "Harissa maison",
    text: "Notre harissa est préparée chaque jour avec des piments sélectionnés.",
  },
  {
    icon: "fa-mortar-pestle",
    title: "Saveurs tunisiennes",
    text: "On mélange nos épices tunisiennes avec les burgers, pizzas et pâtes que tu adores.",
  },
];

function About() {
  return (
    <section id="about" className="section-block py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <span className="badge bg-harra mb-3">Notre histoire</span>
          <h2 className="fw-bold display-6 mb-3">
            Ici, on aime quand ça <span className="text-harra">pique</span> !
          </h2>
          <p className="text-secondary">
            Harra & Tasty est un restaurant spécialisé dans la cuisine piquante.
            Notre idée est simple : prendre les plats que tout le monde aime
            (burgers, pizzas, pâtes) et leur donner le goût fort de la harissa
            et des piments tunisiens.
          </p>
          <p className="text-secondary">
            Tu aimes le feu en bouche ? Choisis un plat à trois piments. Tu
            veux juste goûter ? Commence par un plat doux, et garde un verre de
            lben ou une citronade bien fraîche à côté, on te le conseille.
          </p>

          <div className="d-flex gap-4 mt-4">
            <div>
              <h3 className="fw-bold text-harra m-0">9+</h3>
              <small className="text-muted">plats piquants</small>
            </div>
            <div>
              <h3 className="fw-bold text-harra m-0">3</h3>
              <small className="text-muted">niveaux de piquant</small>
            </div>
            <div>
              <h3 className="fw-bold text-harra m-0">30 min</h3>
              <small className="text-muted">livraison rapide</small>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row g-3">
            {values.map((v) => (
              <div className="col-12" key={v.title}>
                <div className="value-card d-flex gap-3 align-items-center p-3 rounded-4 shadow-sm">
                  <div className="value-icon">
                    <i className={`fa-solid ${v.icon} text-harra`}></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">{v.title}</h5>
                    <p className="mb-0 small text-secondary">{v.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;