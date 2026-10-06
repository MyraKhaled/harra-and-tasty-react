function Footer() {
  return (
    <footer className="harra-footer text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h4 className="fw-bold">
              <i className="fa-solid fa-pepper-hot text-harra me-2"></i>
              Harra & Tasty
            </h4>
            <p className="small opacity-75">
              Le resto des amoureux du piquant. Burgers, pizzas et pâtes
              relevés à la harissa tunisienne.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Navigation</h6>
            <ul className="list-unstyled small">
              <li><a href="#top" className="footer-link">Accueil</a></li>
              <li><a href="#about" className="footer-link">Notre histoire</a></li>
              <li><a href="#menu" className="footer-link">Menu</a></li>
              <li><a href="#delivery" className="footer-link">Livraison</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Horaires</h6>
            <ul className="list-unstyled small opacity-75">
              <li>Lun - Ven : 11h - 23h</li>
              <li>Sam - Dim : 11h - 00h</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Suis-nous</h6>
            <div className="d-flex gap-2">
              <a href="#top" className="social-icon" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#top" className="social-icon" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#top" className="social-icon" aria-label="TikTok">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <p className="small opacity-75 mt-3 mb-0">
              <i className="fa-solid fa-phone me-2"></i>+216
            </p>
          </div>
        </div>

        <hr className="my-4 opacity-25" />
        <p className="text-center small opacity-75 mb-0">
          © 2026 Harra & Tasty — Attention, ça pique !
        </p>
      </div>
    </footer>
  );
}

export default Footer;