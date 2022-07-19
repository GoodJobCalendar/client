import { useState } from "react";
import "./styles.css";
import Calendar from "./Calendar";
import Details from "./Details";

const WeekSchedule = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };
  return (
    <div className="App">
      <h1>Week View Calendar with react</h1>
      <br />
      <h2>Example</h2>
      <Calendar showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
    </div>
  );
};

export default WeekSchedule;
