import clock from "../../resources/imgClock.png";
import "./shopListItem.scss";

import starFull from "../../resources/starFull.svg";
import starEmpty from "../../resources/starEmpty.svg";

const ShopListItem = ({ title, price, image, rating }) => {
  const renderRatingStars = (rating) => {
    let counterOfStars = Math.round(rating);
    let emptyStars = 5 - counterOfStars;
    let str = "";
    while (counterOfStars > 0) {
      counterOfStars--;
      str += `<img src=${starFull} className="rating-stars__full" alt="F"></img>`;
    }
    while (emptyStars > 0) {
      emptyStars--;
      str += `<img src=${starEmpty} className="rating-stars__empty" alt="E"></img>`;
    }
    return str;
  };
  return (
    <div className="shop-list__item">
      <div className="shop-list__img">
        <img src={image} alt="clock" />
      </div>
      <div className="shop-list-label">
        <div>
          <p className="shop-list-label__name">{title.slice(0, 15)}...</p>
          <div
            className="shop-list-label__rating"
            dangerouslySetInnerHTML={{ __html: renderRatingStars(rating.rate) }}
          ></div>
        </div>
        <p className="shop-list-label__price">
          <span className="shop-list-label__dollar">$</span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default ShopListItem;
