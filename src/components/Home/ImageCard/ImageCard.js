import styles from "./ImageCard.module.scss";

const ImageCard = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.object.strDrinkThumb} alt="" />
      <h1>{props.object.strDrink}</h1>
      <p>{props.object.strCategory}</p>
    </div>
  );
};

export default ImageCard;
