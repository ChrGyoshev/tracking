import IntroCard from "./introCard";
import "./App.css";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

function App() {
  const tracking_number = "158271900314162555901532";
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://clients.mbm-express.net/dream/ttlistbl.php?wb=${tracking_number}&lang=bg`
        );
        if (!response.ok) {
          throw new Error("Response failed");
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setData(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? <Spinner /> : <IntroCard />}

      <div>
        {data.map((item, index) => (
          <h1 key={index}>
            {index === 0 ? <div>{item.info}</div> : <div>{item.dt}</div>}
          </h1> // Display each item's info
        ))}
      </div>
    </>
  );
}

export default App;
