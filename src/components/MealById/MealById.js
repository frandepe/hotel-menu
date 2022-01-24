import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMealId } from "../../redux/api";
import { Image, Row, Col, Container } from "react-bootstrap";
import "./MealById.scss";

const MealById = () => {
  const dispatch = useDispatch();
  const { mealById } = useSelector((state) => state.meals);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMealId(id));
  }, []);

  return (
    <div className="MealId__container">
      <Container>
        <Row>
          <Col>
            {" "}
            <h3>{mealById.title}</h3>
            <h5>{mealById.sourceName}</h5>
            <b style={{ color: "#ff5043" }}>Servings: {mealById.servings}</b>
          </Col>
          <Col className="MealId__col2">
            <Image src={mealById.image} />
          </Col>
        </Row>
        <Row className="MealId__row2">
          <Col>
            <ul>
              <li>
                {mealById.vegan && (
                  <p>
                    <i class="fas fa-check"></i> Vegan
                  </p>
                )}
              </li>
              <li>
                {mealById.veryHealthy && (
                  <p>
                    {" "}
                    <i class="fas fa-check"></i> Very Healthy
                  </p>
                )}
              </li>
              <li>
                {mealById.dairyFree && (
                  <p>
                    {" "}
                    <i class="fas fa-check"></i> Dairy Free
                  </p>
                )}
              </li>
              <li>
                {mealById.glutenFree && (
                  <p>
                    {" "}
                    <i class="fas fa-check"></i> Gluten Free
                  </p>
                )}
              </li>
            </ul>

            <ul>
              <b>Extended ingredients:</b>
              {mealById.extendedIngredients?.map((ingredients) => (
                <li key={ingredients.id}>‣ {ingredients?.aisle}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <ul>
              <b>Dish Types:</b>
              {mealById.dishTypes?.map((types, ids) => (
                <li key={ids}>‣ {types}</li>
              ))}
            </ul>
          </Col>
          <div className="MealId__stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MealById;
