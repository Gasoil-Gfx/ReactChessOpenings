const ChessOpeningCard = ({ title, description, imageUrl, altText, cardClass }) => (
  <div className={`card ${cardClass}`}>
    <img src={imageUrl} alt={altText} />
    <div className="content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default ChessOpeningCard;