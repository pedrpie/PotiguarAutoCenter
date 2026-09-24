import Emoji from '../Emoji/Emoji';
import GoogleIcon from './GoogleIcon';

export default function ReviewCard({ review }) {
  const { name, meta, avatar, rating, text } = review;

  return (
    <article className="card-review">
      <div className="review-header">
        <div className={`review-avatar avatar-${avatar}`} aria-hidden="true">
          {name.charAt(0).toUpperCase()}
        </div>
        <div className="review-user-info">
          <h3>{name}</h3>
          <span className="review-unit">{meta}</span>
        </div>
        <div className="google-logo-mini" title="Avaliação Verificada no Google">
          <GoogleIcon size={16} />
        </div>
      </div>

      <div className="review-stars" role="img" aria-label={`Nota ${rating} de 5`}>
        {Array.from({ length: rating }, (_, index) => (
          <Emoji key={index} name="star" />
        ))}
      </div>

      <p className="review-text">"{text}"</p>
    </article>
  );
}
