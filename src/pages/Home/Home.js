import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { getMeals } from "../../redux/api";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.meals);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    dispatch(getMeals(meals));
  }, []);

  return (
    <div className="Home__container">
      <Container className="Home__container-intro-cart">
        <Row className="Home__first-row">
          <h1 className="Home__h1">Welcome to the menu...</h1>
          <Col className="Home__container-intro-img">
            <img alt="imgFood" src={meals[53]?.image} />
            <img alt="imgFood" src={meals[49]?.image} />
            <img alt="imgFood" src={meals[58]?.image} />
            <img alt="imgFood" src={meals[56]?.image} />
            <img alt="imgFood" src={meals[54]?.image} />
            <img alt="imgFood" src={meals[51]?.image} />
          </Col>
          <Col className="Home__container-h2">
            <h2>
              Look for your favorite dishes and add them to the shopping cart
            </h2>
          </Col>
          <Row className="Home__second-row">
            <Col className="Home__container-shop">
              <ShoppingCart cart={cart} setCart={setCart} />
            </Col>
          </Row>
          <Col>
            <Cards key={meals.id} cart={cart} setCart={setCart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
