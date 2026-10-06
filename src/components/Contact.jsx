import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-block py-5">
      <div className="text-center mb-5">
        <span className="badge bg-harra mb-3">Contact</span>
        <h2 className="fw-bold display-6">
          Une question ? <span className="text-harra">Écris-nous</span>
        </h2>
      </div>

      <div className="row g-4">
        {/* Infos */}
        <div className="col-lg-5">
          <div className="contact-card p-4 rounded-4 h-100 text-white">
            <h4 className="fw-bold mb-4">
              <i className="fa-solid fa-pepper-hot me-2"></i>Harra & Tasty
            </h4>
            <p className="mb-3">
              <i className="fa-solid fa-location-dot me-3"></i>
              Avenue Habib Bourguiba, Gabès
            </p>
            <p className="mb-3">
              <i className="fa-solid fa-phone me-3"></i>+216 00 000 000
            </p>
            <p className="mb-3">
              <i className="fa-solid fa-envelope me-3"></i>contact@harrafood.tn
            </p>
            <p className="mb-4">
              <i className="fa-regular fa-clock me-3"></i>Tous les jours : 11h - 23h
            </p>
            <a
              href="https://wa.me/21600000000"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light rounded-pill px-4 fw-bold text-danger"
            >
              <i className="fa-brands fa-whatsapp me-2"></i>
              Commander sur WhatsApp
            </a>
          </div>
        </div>

        {/* Formulaire */}
        <div className="col-lg-7">
          <form onSubmit={handleSubmit} className="p-4 rounded-4 shadow-sm form-card">
            <div className="mb-3">
              <label className="form-label fw-semibold">Nom</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Ton nom"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Téléphone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Ton numéro"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Message / Adresse de livraison
              </label>
              <textarea
                name="message"
                rows="4"
                className="form-control"
                placeholder="Écris ton message ici..."
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-harra rounded-pill px-4">
              Envoyer
              <i className="fa-solid fa-paper-plane ms-2"></i>
            </button>

            {sent && (
              <div className="alert alert-success mt-3 mb-0">
                <i className="fa-solid fa-circle-check me-2"></i>
                Message envoyé ! On te répond très vite.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;