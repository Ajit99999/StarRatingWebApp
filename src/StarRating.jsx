import { useState } from "react";
import "./StarRating.css";
function StarRating() {
  const [starVal, setStarVal] = useState(null);

  return (
    <>
      <div>
        <p>Star Rating</p>

        {new Array(5).fill("*").map((ele, index) => {
          return (
            <span
              onClick={() => {
                index === starVal ? setStarVal(null) : setStarVal(index);
              }}
              key={index}
              className={`${
                starVal !== null && index <= starVal ? "select" : ""
              }`}
            >
              {ele}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default StarRating;
