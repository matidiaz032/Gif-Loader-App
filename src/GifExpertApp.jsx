import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece Netflix"]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;

    //categories.push('One Piece');
    //setCategories( cat => [...cat, 'One Piece']);
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GIF Expert App</h1>
      <AddCategory
        //newCategory= { setCategories }
        onNewCategory={onAddCategory}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      ;
    </>
  );
};
