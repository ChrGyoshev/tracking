import Card from "react-bootstrap/Card";

function IntroCard() {
  return (
    <Card
      border="white"
      style={{ width: "18rem" }}
      className="border-2 shadow-lg p-3 mb-5 bg-body rounded-4 d-flex align-items-center"
    >
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.freepik.com/512/5952/5952766.png"
        style={{
          width: "40%",
          height: "35%",
        }}
      />
      <Card.Body>
        <Card.Title>
          <h5 className="fs-5 text-md-start">LP4T2934S762FG34876</h5>
        </Card.Title>
        <Card.Text
          style={{ borderBottom: "1px solid", paddingBottom: "0.5rem" }}
        >
          <i
            className="fa-solid fa-location-arrow"
            style={{
              fontSize: "1.5rem",
              marginRight: "1rem",
            }}
          >
            {" "}
          </i>
          Sofia
        </Card.Text>

        <Card.Text
          style={{ borderBottom: "1px solid", paddingBottom: "0.5rem" }}
        >
          <i
            className="fa-solid fa-calendar"
            style={{
              fontSize: "1.5rem",
              marginRight: "1rem",
            }}
          ></i>
          10.08.2024
        </Card.Text>

        <Card.Text>
          <i
            className="fa-solid fa-circle-info"
            style={{
              fontSize: "1.5rem",
              marginRight: "1rem",
            }}
          ></i>
          Пратка в очакване
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default IntroCard;
