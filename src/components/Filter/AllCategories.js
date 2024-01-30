import Filter from "./Filter";

const AllCategories = () => {
  return (
    <div className="categories">
      {["ALL", "RED", "WHITE", "ROSE"].map((category, index) => (
        <Filter category={category} key={index} />
      ))}
    </div>
  );
};

export default AllCategories;
