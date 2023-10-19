import axios from "axios";
import { message } from "antd";
import { FruitPredictionDto } from "./models/FruitPrediction";

export const predictPredictGet = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/predict");
    // Maneja la respuesta aquí
    const pred = new FruitPredictionDto(response.data.prediction);
    return pred;
  } catch (error) {
    // Maneja los errores aquí
    message.error("Oops the prediction failed");
    throw error;
  }
};
