import { Card, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./ShoppingCart.scss";

const ShoppingCart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  const [readyInMin, setReadyInMin] = useState(0);
  const [health, setHealth] = useState(0);

  console.log("CART DEL SHOP:", cart);

  useEffect(() => {
    const res1 = cart.reduce((acc, item) => acc + item.pricePerServing, 0);
    const res2 = cart.reduce((acc, item) => acc + item.readyInMinutes, 0);
    const res3 = cart.reduce((acc, item) => acc + item.healthScore, 0);
    setTotal(res1);
    setReadyInMin(res2);
    setHealth(res3);
  }, [cart]);

  const delFood = (id) => {
    cart.forEach((item, index) => {
      if (item.id === id) {
        item.cantidad = 1;
        cart.splice(index, 1);
      }
    });
    setCart([...cart]);
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("cart"));
    if (dataCart) {
      setCart(dataCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <h2>Your purchase here ↓</h2>
      <div className="Shop__container">
        {cart.length === 0 ? (
          <b>No orders</b>
        ) : (
          cart.map((food, ids) => {
            return (
              <Card
                className="Shop__container-card"
                key={ids}
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={food.image} />
                <Card.Body className="Shop__card-body">
                  <Card.Title className="Shop__card-title">
                    {food.title}
                  </Card.Title>

                  <p>
                    <i className="fas fa-money-bill-wave"></i>{" "}
                    <span>Price:</span>{" "}
                    <span
                      className="Cards__price-span"
                      style={{ color: "black" }}
                    >
                      ${food.pricePerServing}
                    </span>
                  </p>
                  <p>
                    <i
                      className="far fa-clock"
                      style={{ marginRight: "5px" }}
                    ></i>
                    {food.readyInMinutes} minutes
                  </p>
                  <p>
                    <i className="fas fa-heart"></i> <span>Health score:</span>{" "}
                    {food.healthScore}
                  </p>
                  {food.vegan && <Badge bg="light">Vegan</Badge>}

                  <i
                    onClick={() => {
                      delFood(food.id);
                    }}
                    className="fas fa-trash-alt Shop__delete"
                  ></i>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>

      {/* <p>Cantidad de comidas: {cart.length} / 4</p> */}
      {cart.length > 0 && (
        <div className="Shop__total-result">
          <p>
            <span className="Shop__result-span">Total purchase:</span>{" "}
            <span className="Shop__price-span">${Math.round(total)}</span>
          </p>
          <p>
            <span className="Shop__result-span">Ready in:</span> {readyInMin}{" "}
            minutes
          </p>
          <p>
            <span className="Shop__result-span">Health score:</span> {health}
          </p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
