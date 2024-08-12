import IntroCard from "./introCard";
import "./App.css";
import { useState } from "react";
import Spinner from "./Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  return <>{loading ? <Spinner /> : <IntroCard />}</>;
}

export default App;
