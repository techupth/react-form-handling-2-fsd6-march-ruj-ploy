import { useState } from "react";

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();

    if (
      (productName !== "") &
      (imageUrl !== "") &
      (price !== "") &
      (description !== "")
    ) {
      const product = {
        name: productName,
        img: imageUrl,
        price: price,
        description: description,
      };

      alert(JSON.stringify(product));
    } else {
      alert("Please fill out all of this form");
    }
  };

  return (
    <form onSubmit={submitHandle} className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
