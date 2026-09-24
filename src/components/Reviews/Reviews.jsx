import GoogleIcon from './GoogleIcon';
import ReviewCard from './ReviewCard';
import { REVIEWS } from '../../data/reviews';
import { GOOGLE_RATING } from '../../data/company';
import './Reviews.css';

export default function Reviews() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="container">
        <div className="section-header">
          <div className="google-badge-pill">
            <GoogleIcon size={18} className="google-icon" />
            <span>Avaliações Verificadas no Google • Nota {GOOGLE_RATING}</span>
          </div>
          <h2 className="section-title" id="reviews-title">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="section-subtitle">
            Mais de 1.200 clientes atendidos com nota máxima em Macaíba e
            Parnamirim
          </p>
        </div>

        <div className="grid-reviews">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
