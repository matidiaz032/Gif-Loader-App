import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        { isLoading && <span className="loader"></span> }
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image} //Paso todas las propiedades como props con spread operator
          />
        ))}
      </div>
    </>
  );
};
