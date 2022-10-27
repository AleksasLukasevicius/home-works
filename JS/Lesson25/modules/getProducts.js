const getProducts = async () => {
    try {
        const response = await fetch("https://golden-whispering-show.glitch.me");
        const products = await response.json();

        return products;

    } catch (error) {
        console.error(error);
    }
};

export { getProducts }