import Spinner from "react-bootstrap/Spinner";

export default () => {
  return (
    <>
      <div className="spinner">
        <div className="spinner-container">
          <Spinner animation="border" />
        </div>
        <h4 className="text-dark pt-2">Loading...</h4>
      </div>
    </>
  );
};
