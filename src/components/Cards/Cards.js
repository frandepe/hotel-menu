import { Card, Button, Form, Badge } from "react-bootstrap";
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

  // Agregar al card de productos dos comidas que sean veganas y dos que no (no se puede agregar mas de 4)
  // si mi array no incluye dos productos veganos y dos no veganos entonces food
  // PROBLEMA: si tengo dos productos en el cart con el mismo id se me borran los dos

  // solucion mauro

  //   Const cantidad = carrito.filter ( productoseleccionado.vegan)
  // If (carrito.length == 4 || cantidad.length == 2){
  //  Ya no se puede agregar
  // }Else {
  //  Agrégalo
  // }

  const addFood = (id) => {
    const food = meals.filter((food) => food.id === id);

    const veganFood = cart.filter((food) => food.vegan === true);
    const nonVeganFood = cart.filter((food) => food.vegan === false);

    if (cart.length < 4) {
      if (food[0].vegan) {
        if (veganFood.length < 2) {
          setCart([...cart, food[0]]);
        } else {
          alert("You can only add two vegan food");
        }
      } else {
        if (nonVeganFood.length < 2) {
          setCart([...cart, food[0]]);
        } else {
          alert("You can only add two non-vegan food");
        }
      }
    } else {
      alert("You can only add four food");
    }
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
      <h4>
        If you are interested in knowing more about a dish, click on its image
      </h4>
      <div className="Cards__container">
        {meals
          .filter((food) =>
            food.title?.toLowerCase().includes(search.toLowerCase())
          )
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
                  <Card.Title className="Cards__card-title">
                    {food.title}
                  </Card.Title>

                  {food.vegan && <Badge bg="light">Vegan</Badge>}
                  <p>
                    <i className="fas fa-money-bill-wave"></i>{" "}
                    <span>Price:</span> ${food.pricePerServing}
                  </p>
                  <p>
                    <i className="far fa-clock"></i> <span>Delay:</span>{" "}
                    {food.readyInMinutes} minutes
                  </p>
                  <p>
                    <i className="fas fa-heart"></i> <span>Health score:</span>{" "}
                    {food.healthScore}
                  </p>

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
