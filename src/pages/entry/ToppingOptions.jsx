const ToppingOptions = ({ name, imagePath }) => {
  return (
    <div>
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} />
    </div>
  );
};

export default ToppingOptions;
