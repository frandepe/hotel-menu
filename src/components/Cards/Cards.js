import { Card, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Cards.scss";
import { useState } from "react";

const Cards = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");
  const { meals } = useSelector((state) => state.meals);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const addFood = (id) => {
    // const long = meals.filter((x) => x.vegan === 2).length;

    if (cart.length < 4) {
      const food = meals.filter((food) => food.id === id);

      // const res = food.filter((x) => x.vegan === 2).length;

      setCart([...cart, ...food]);
      console.log("CART:", cart);
      console.log("FOOD:", food);
    }

    // const check = cart.every((food) => food.vegan === 2);
    // if (check) {
    //   const food = meals.filter((food) => food.id === id);
    //   setCart([...cart, ...food]);
    // } else {
    //   alert("El producto se añadio");
    // }
  };

  return (
    <div>
      <div className="Cards__input-container">
        <h3>Find your favorite food</h3>
        <Form.Control
          type="text"
          placeholder="Search by name..."
          onChange={handleInput}
        />
      </div>
      {/* <input type="text" placeholder="Search..." onChange={handleInput} /> */}
      <h4>
        If you are interested in knowing more about a dish, click on its image
      </h4>
      <div className="Cards__container">
        {meals
          .filter((food) => {
            if (food.title?.toLowerCase().includes(search.toLowerCase())) {
              return food;
            }
          })
          .map((food) => {
            return (
              <Card
                className="Cards__container-card"
                key={food.id}
                style={{ width: "18rem" }}
              >
                <Card.Img
                  onClick={() => navigate(`/meal/${food.id}`)}
                  variant="top"
                  src={food.image}
                />
                <Card.Body className="Cards__card-body">
                  <Card.Title className="Shop__card-title">
                    {food.title}
                  </Card.Title>
                  <p>
                    <span>Price:</span> ${food.pricePerServing}
                  </p>
                  <p>
                    <span>Delay:</span> {food.readyInMinutes} minutes
                  </p>
                  <p>
                    <span>Health score:</span> {food.healthScore}
                  </p>
                  {food.vegan ? (
                    <p style={{ color: "#009714" }}>Vegan food</p>
                  ) : (
                    ""
                  )}
                  <Button
                    onClick={() => {
                      addFood(food.id);
                    }}
                    variant="primary"
                  >
                    Add <i className="fas fa-plus"></i>
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
