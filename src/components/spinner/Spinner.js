import "./spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
