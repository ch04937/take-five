import { useState } from "react";

const TickTackToe = () => {
  const [start, setStart] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setStart(!start)}>
        {start ? "Play Game" : "Reset Game"}
      </button>
      {start}
    </div>
  );
};
export default TickTackToe;
