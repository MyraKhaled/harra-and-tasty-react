const steps = [
  {
    icon: "fa-mobile-screen-button",
    title: "1. Tu choisis",
    text: "Parcours le menu et ajoute tes plats préférés.",
  },
  {
    icon: "fa-kitchen-set",
    title: "2. On cuisine",
    text: "Ton plat est préparé frais, avec notre harissa maison.",
  },
  {
    icon: "fa-motorcycle",
    title: "3. On livre",
    text: "Ton repas arrive chaud chez toi en environ 30 minutes.",
  },
];

function Delivery() {
  return (
    <section id="delivery" className="section-block py-5">
      <div className="text-center mb-5">
        <span className="badge bg-harra mb-3">Livraison</span>
        <h2 className="fw-bold display-6">
          Le piquant, <span className="text-harra">chez toi</span>
        </h2>
        <p className="text-secondary">Livraison rapide, 7j/7, de 11h à 23h.</p>
      </div>

      <div className="row g-4">
        {steps.map((s) => (
          <div className="col-md-4" key={s.title}>
            <div className="step-card text-center p-4 h-100 rounded-4 shadow-sm">
              <div className="step-icon mx-auto mb-3">
                <i className={`fa-solid ${s.icon} text-harra`}></i>
              </div>
              <h5 className="fw-bold">{s.title}</h5>
              <p className="text-secondary small mb-0">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Delivery;