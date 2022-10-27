const addProductForm = document.querySelector('form#add-product-form');

addProductForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const newProductImage = document.querySelector("#new-product-image-input").value.trim();
    const newProductTitle = document.querySelector("#new-product-title-input").value.trim();
    const newProductPrice = document.querySelector("#new-product-price-input").value.trim();

    try {
        const response = await fetch("https://golden-whispering-show.glitch.me", {
            method: "POST",
            body: JSON.stringify({
                image: newProductImage,
                title: newProductTitle,
                price: newProductPrice,
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });

        if (response.ok) {
            const route = location.pathname;
            const redirectRoute = route.replace("addProduct", "index");
            location.assign(redirectRoute);
        }

    } catch (error) {
        console.error(error);
    }
});

