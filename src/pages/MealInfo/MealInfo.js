import React from "react";
import MealById from "../../components/MealById/MealById";
import "./MealInfo.scss";

const MealInfo = () => {
  return (
    <div className="MealInfo__container">
      <div>
        <h2>Learn more about this dish</h2>

        <MealById />
      </div>
    </div>
  );
};

export default MealInfo;
