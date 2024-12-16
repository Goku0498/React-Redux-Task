import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
import { increment, decrement } from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { DataContext } from "../contextData/UserContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cards() {
  const { data } = useContext(DataContext);
  const dispatch = useDispatch();
  const quantities = useSelector((state) => state.Card.quantities);

  const increase = (id) => dispatch(increment({ id }));
  const decrease = (id) => dispatch(decrement({ id }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="container my-4">
      {data.map((product) => {
        const {
          id,
          title,
          description,
          price,
          discountPercentage,
          rating,
          image,
          stock,
          category,
        } = product;
        const discount = Math.round(price * (discountPercentage / 100));
        const totalQuantity = quantities[id] || 0;

        return (
          <div className="card mb-5 p-4 shadow" key={id}>
            <div className="row">
              <div className="col-md-4" style={{ width: "330", height: "330" }}>
                <Slider {...settings}>
                  <img src={image} alt={title} className="img-fluid rounded" />
                  <img
                    src={product.thumbnail}
                    alt={title}
                    className="img-fluid rounded"
                  />
                </Slider>
              </div>
              <div className="col-md-8">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h2>{title}</h2>
                  <p className="text-success">In Stock: {stock}</p>
                </div>
                <p className="text-muted">Category: {category}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>{description}</p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>MRP: ${price.toFixed(2)}</h4>
                  <p>Rating: {rating}</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <p>Discount: -${discount}</p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <Button
                      variant="outline-danger"
                      onClick={() => decrease(id)}
                    >
                      -
                    </Button>
                    <span className="mx-3">{totalQuantity}</span>
                    <Button
                      variant="outline-success"
                      onClick={() => increase(id)}
                    >
                      +
                    </Button>
                  </div>
                  <h5 className="text-success">
                    Final Price After Discount: ${price - discount}
                  </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}
                >
                  <h4>Total Quantity: {totalQuantity}</h4>
                  <h4>Total Amount: ${totalQuantity * (price - discount)}</h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
