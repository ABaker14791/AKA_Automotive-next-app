import Image from "next/image";
import { fetchWooCommerceSingle } from "../../utils/wooCommerceApi";
import styles from "../../styles/usedDetails.module.css";

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const items = await fetchWooCommerceSingle(`${id}`);
  const data = await items.data;

  return {
    props: {
      usedbike: data,
    },
  };
};

const BikeDetails = (usedbike: any) => {
  const bike = usedbike.usedbike;
  return (
    <div className={styles.container}>
      <div className={styles.main_image}>
        <Image
          src={bike.images[0].src}
          alt={bike.images[0].alt}
          layout="fill"
          objectFit="contain"
          objectPosition="top"
        />
      </div>
      <div className={styles.summary}>
        <h1>{bike.name}</h1>
        <strong>£{bike.regular_price}</strong>
      </div>
    </div>
  );
};

export default BikeDetails;
