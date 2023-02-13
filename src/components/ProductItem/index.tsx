import styles from "./styles.module.css";
import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import ReactStars from "react-stars";
import { ProductEntity } from "../../entities/ProductEntity";

type ProductItemProps = {
  product: ProductEntity;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const handleCurrencyPtBy = (value: number) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className={styles.content}>
      <div className={styles.contentImage}>
        <button
          className={[styles.like, styles.defaultButton].join(" ")}
          type="button"
        >
          <AiOutlineHeart />
        </button>

        <img
          src={product.thumbnail}
          alt={`thumbail ${product.title}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/assets/not-found.png";
          }}
        />

        <button
          className={[styles.addProduct, styles.defaultButton].join(" ")}
          type="button"
        >
          <AiOutlinePlus /> Add
        </button>
      </div>

      <div className={styles.currency}>
        {handleCurrencyPtBy(
          product.price - (product.price * product.discountPercentage) / 100
        )}
        <span className={styles.discount}>
          {handleCurrencyPtBy(product.price)}
        </span>
      </div>
      <div className={styles.title}>{product.title}</div>

      <div className={styles.description}>{product.description}</div>

      <div className={styles.contentStars}>
        <ReactStars
          count={product.rating}
          size={23}
          onChange={() => {}}
          color1={"#ffd700"}
          color2={"#ffd700"}
        />
        <span>({product.rating})</span>
      </div>
    </div>
  );
};

export default ProductItem;
