import styles from "./Offers.module.css";
import { offers } from "./data";
import OfferCard from "./OfferCard";

function Offers() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            title={offer.title}
            description={offer.description}
            image={offer.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Offers;