import styles from "./OfferCard.module.css";

function OfferCard({ title, description, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default OfferCard;