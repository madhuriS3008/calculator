function DessertsList(props) {
  const lowCaloriesDessert = props.desserts
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories);

  return (
    <ul>
      {lowCaloriesDessert.map((dessert) => (
        <li key={dessert.createdAt}>
          {dessert.name} - {dessert.calories} cal.
        </li>
      ))}
    </ul>
  );
}

export default DessertsList;
