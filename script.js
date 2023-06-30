fetch("https://dummyjson.com/products/")
  .then((res) => res.json())
  .then((json) => {
    const arr = json.products;

    for (let i = 0; i < arr.length; i++) {
      const product = arr[i];
      if (product.price > 40) {
        const element = document.createElement("p");
        element.textContent = `${product.title} - $${product.price}`;
        document.body.appendChild(element);
      }
    }
  });
