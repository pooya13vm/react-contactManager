import spinnerGIF from "../assets/images/spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinnerGIF}
        className="d-block m-auto rounded mt-5"
        style={{ width: "200px" }}
        alt="spinner"
      />
      <p className="m-3" style={{ color: "#ffffff" }}>
        Loading ...
      </p>
    </>
  );
};

export default Spinner;
