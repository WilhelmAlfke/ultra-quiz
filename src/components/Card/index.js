import Button from "../Button";
import Bookmark from "../Bookmark";
import "./Card.css";

export default function Card({ question, answer, tag1, tag2, tag3 }) {
  return (
    <li className="card-list__item">
      <article className="card">
        <h2 className="card__question">{question}</h2>
        <Button />
        <p className="card__answer">{answer}</p>
        <ul className="card__tag-list">
          <li className="card__tag-list-item">{tag1}</li>
          <li className="card__tag-list-item">{tag2}</li>
          <li className="card__tag-list-item">{tag3}</li>
          <Bookmark />
        </ul>
      </article>
    </li>
  );
}
