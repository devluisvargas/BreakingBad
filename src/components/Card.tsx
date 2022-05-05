import { Character } from "../type";

interface Props {
  personaje: Character;
}

export const Card = ({ personaje }: Props) => {
  return (
    <div className="card my-3">
      <img
        src={personaje.img}
        className="card-img-top"
        alt={personaje.nickname}
      />
      <div className="card-body">
        <span
          className={`btn btn-sm float-end ${
            personaje.status.toLowerCase().includes("alive")
              ? "btn-success"
              : "btn-danger"
          }`}
        >
          {personaje.status}
        </span>
        <h5 className="card-title">{personaje.name}</h5>
        <p className="card-text">{personaje.nickname}</p>
        <div className="row text-left">
          <p className="text-muted">Ocuppation</p>
          <hr />
          {personaje.occupation.map((item, index) => {
            return <strong key={index}>&bull; {item}</strong>;
          })}
        </div>
      </div>
    </div>
  );
};
