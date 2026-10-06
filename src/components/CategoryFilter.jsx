import { categories } from "../data/products";

const categoryIcons = {
  All: "fa-border-all",
  Burgers: "fa-burger",
  Pizza: "fa-pizza-slice",
  Pasta: "fa-bowl-food",
  Desserts: "fa-cake-candles",
  Drinks: "fa-martini-glass-citrus",
};

function CategoryFilter({ selected, setSelected }) {
  return (
    <div className="d-flex flex-wrap gap-2 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className={
            "btn rounded-pill px-3 " +
            (selected === cat ? "btn-harra" : "btn-outline-harra")
          }
          onClick={() => setSelected(cat)}
        >
          <i className={`fa-solid ${categoryIcons[cat]} me-2`}></i>
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;