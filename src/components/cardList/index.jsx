import Card from '../cardComponent';
import styles from "./styles.module.scss"
 

function CardList({
  items,
  handleClick,
  btnName,
  children,
  styleLi,
  styleSpan,
}) {
  return (
    <ul className={styles.goodListContainer}>
      {children}
      {items.slice(0, 3).map(item => (
        <Card
          styleSpan={styleSpan}
          styleLi={styleLi}
          key={item.id}
          item={item}
          handleClick={handleClick}
          btnName={btnName}
        />
      ))}
    </ul>
  );
};
export default CardList;
