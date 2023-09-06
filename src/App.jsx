import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {};
  const prevPerson = () => {};

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="bt-container">
          <button className="prev-btn" onClick={prevPerson}></button>
          <button className="next-btn" onClick={nextPerson}></button>
          <FaChevronLeft />
          <FaChevronRight />
        </div>
      </article>
    </main>
  );
};
export default App;
