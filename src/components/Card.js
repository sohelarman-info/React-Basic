const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const currentFullDate = currentDate + "/" + currentMonth + "/" + currentYear;

function Card(props) {
  const { titleText, decText } = props;
  return (
    <div className="card">
      <div className="cardTitle">{titleText}</div>
      <p className="paragraph">
        {decText}
        <p className="date">{currentFullDate}</p>
      </p>
    </div>
  );
}
export default Card;
