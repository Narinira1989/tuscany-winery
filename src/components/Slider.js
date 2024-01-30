import { Carousel } from "react-bootstrap";
import { newProductData } from "./newProductData";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider() {
  return (
    <div>
      <Carousel interval={3000}>
        {newProductData.map((product) => (
          <Carousel.Item key={product.id}>
            <img
              className="d-block w-100"
              src={product.image}
              alt={`Slide ${product.id}`}
            />
            <Carousel.Caption>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
