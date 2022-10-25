import React from "react";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { Product } from "../../utils/wooCommerceTypes";

type Props = {
  product: Product;
};

const ProductCard = (props: Props) => {
  const { product } = props;
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.description}>
        <span>{product.name}</span>
        <span>--</span>
        <span>
          <strong>£{product.regular_price}</strong>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
