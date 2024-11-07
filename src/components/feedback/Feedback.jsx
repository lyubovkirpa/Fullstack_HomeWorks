import { useState } from "react";
import MyButton from "../myButton/MyButton";
import { render } from "@testing-library/react";

function Feedback() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLike = () => {
    setLike((like) => like + 1);
  };

  const handleDislike = () => {
    setDislike((dislike) => dislike + 1);
  };

  const handleReset = () => {
    setLike(0);
    setDislike(0);
  };

  console.log(render);
  

  return (
    <div className="container">
      <div>
        <span>{dislike}</span>
        <MyButton func={handleDislike} text={"Dislike"} />
        <MyButton func={handleLike} isDanger={false} text={"Like"} />
        <span>{like}</span>
      </div>
      <MyButton func={handleReset} text={"Reset Results"} />
    </div>
  );
}

export default Feedback;
