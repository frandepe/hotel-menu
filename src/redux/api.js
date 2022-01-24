import axios from "axios";
// const API_KEY = "ebdcfc960f7949c88be86f21379cf729";
const API_KEY = "320fe5ea2e9e447b8141efb301201ef9";

// initial state

const defaultValue = {
  meals: [],
  mealById: [],
};

// Action types

const GET_MEALS = "GET_MEALS";
const GET_MEALID = "GET_MEALID";

// Reducer

export default function mealsReducer(state = defaultValue, { type, payload }) {
  switch (type) {
    case GET_MEALS:
      return { ...state, meals: payload.meals };
    case GET_MEALID:
      return { ...state, mealById: payload.mealById };
    default:
      return defaultValue;
  }
}

// Actions

export const getMeals = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=60&addRecipeInformation=true`
    );
    console.log(response.data.results);
    const data = response.data.results;
    dispatch({
      type: GET_MEALS,
      payload: { meals: data },
    });
  } catch (error) {
    alert(error);
  }
};

export const getMealId = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    console.log(response.data);
    const data = response.data;
    dispatch({
      type: GET_MEALID,
      payload: { mealById: data },
    });
  } catch (error) {
    alert(error);
  }
};
