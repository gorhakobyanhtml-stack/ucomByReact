import styles from "./Offers.module.css";

function Offers() {
  return (
    <section className={styles.section}>
      <img src={image} alt={title} className={styles.image} />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </section>
  );
}

export default Offers;