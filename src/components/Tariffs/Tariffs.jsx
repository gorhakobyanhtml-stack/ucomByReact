import styles from "./Tariffs.module.css";
import TariffCard from "./TariffCard";
import { tariffs } from "./data";

export default function Tariffs() {
  return (
    <section className={styles.tariffs}>
      <h2>Լավագույն առաջարկներ</h2>

      <div className={styles.grid}>
        {tariffs.map((tariff, index) => (
          <TariffCard
            key={index}
            title={tariff.title}
            price={tariff.price}
            items={tariff.items}
          />
        ))}
      </div>
    </section>
  );
}