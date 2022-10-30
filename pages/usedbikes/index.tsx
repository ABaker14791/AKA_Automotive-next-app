import { fetchWooCommerceProducts } from "../../utils/wooCommerceApi";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/usedbike.module.css";

export const getServerSideProps = async () => {
  const data = await fetchWooCommerceProducts();
  return {
    props: { usedbikes: data.data },
  };
};

const usedbikes = ({ usedbikes }: any) => {
  console.log(usedbikes);
  return (
    <div className={styles.usedbike_container}>
      {usedbikes.map((usedbike: any) => (
        <Link href={`/usedbikes/${usedbike.id}`} key={usedbike.id}>
          <div className={styles.card}>
            <div className={styles.image_container}>
              <Image
                src={usedbike.images[0].src}
                alt={usedbike.images[0].alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.description}>
              <span>{usedbike.name}</span>
              <span>
                {usedbike.attributes[0].name}:{" "}
                {usedbike.attributes[0].options[0]}
              </span>
              <span>
                <strong>£{usedbike.regular_price}</strong>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default usedbikes;
