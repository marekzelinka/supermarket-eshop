import { useOutletContext } from "react-router";

export default function ProductDetailNutrition() {
  const product = useOutletContext();

  const values = {
    Protein: product.nutrition.protein,
    Carbohydrates: product.nutrition.carbs,
    Fat: product.nutrition.fat,
    Salt: product.nutrition.salt,
  };

  return (
    <table className="table table-nutrition">
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(values).map(([label, value]) => (
          <tr key={label}>
            <td>{label}</td>
            <td>
              {value.toLocaleString("en-US", {
                style: "unit",
                unit: "gram",
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
