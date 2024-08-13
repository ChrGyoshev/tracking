import Card from "react-bootstrap/Card";

function IntroCard({ data, tracking_number }) {
  return (
    <>
      {data.map((item, index) => (
        <Card
          key={index}
          border="white"
          style={{ width: "18rem" }}
          className="border-2 shadow-lg p-3 mb-1 mt-5 bg-body rounded-4 d-flex align-items-center"
        >
          {index === 0 && (
            <Card.Img
              variant="top"
              src="https://cdn-icons-png.freepik.com/512/5952/5952766.png"
              style={{
                width: "40%",
                height: "35%",
              }}
            />
          )}

          <Card.Body>
            <Card.Title>
              {index === 0 && (
                <h5 className="fs-5 text-md-start">{tracking_number}</h5>
              )}
            </Card.Title>

            {item.city_office && (
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
                {item.city_office}
              </Card.Text>
            )}

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
              {item.dt}
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
      ))}
    </>
  );
}

export default IntroCard;
