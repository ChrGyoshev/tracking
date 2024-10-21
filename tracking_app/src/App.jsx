import TrackingCard from "./TrackingCard";
import "./App.css";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

function App() {
  const tracking_number = "158271900372329305901532"; // Enter your own tracking number here

  const [loading, setLoading] = useState(true); // if loading is true spinner is active
  const [data, setData] = useState([]); // state to keep data from fetched tracking number

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
        setLoading(!loading);
      } catch (error) {
        setLoading(!loading);
        setData(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <TrackingCard data={data} tracking_number={tracking_number} />
      )}
    </>
  );
}

export default App;
