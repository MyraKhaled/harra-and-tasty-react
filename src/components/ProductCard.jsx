import { useState } from "react";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card product-card h-100 border-0 shadow-sm">
      <div className="position-relative">
        {imgError ? (
          <div className="img-fallback">
            <i className={`fa-solid ${product.icon}`}></i>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top product-img"
            onError={() => setImgError(true)}
          />
        )}

        <span className="badge bg-harra position-absolute top-0 start-0 m-2">
          {product.category}
        </span>

        {product.spicy === 3 && (
          <span className="badge bg-dark position-absolute top-0 end-0 m-2">
            <i className="fa-solid fa-fire me-1"></i>Brûle la langue
          </span>
        )}
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-1">{product.name}</h5>

        <div className="mb-2" title="Niveau de piquant">
          {product.spicy === 0 ? (
            <small className="text-muted">
              <i className="fa-regular fa-snowflake me-1"></i>Rafraîchissant
            </small>
          ) : (
            [1, 2, 3].map((level) => (
              <i
                key={level}
                className={
                  "fa-solid fa-pepper-hot me-1 " +
                  (level <= product.spicy ? "text-harra" : "pepper-off")
                }
              ></i>
            ))
          )}
        </div>

        <p className="card-text text-secondary small flex-grow-1">
          {product.description}
        </p>

        <div className="d-flex justify-content-between align-items-center mt-2">
          <span className="fw-bold fs-5">${product.price.toFixed(2)}</span>
          <button
            className="btn like-btn"
            onClick={() => setLiked(!liked)}
            aria-label="Like"
          >
            {liked ? (
              <i className="fa-solid fa-heart text-danger"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;