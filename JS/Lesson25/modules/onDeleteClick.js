import { onProductDelete } from "./main.js";

const onDeleteClick = async (idToDelete) => {
    try {
        const response = await fetch(`https://golden-whispering-show.glitch.me/${idToDelete}`, {
            method: "DELETE",
        });

        const isProductDeleted = response.ok

        if (isProductDeleted) {
            onProductDelete(idToDelete);
        }
    } catch (error) {
        console.error(error);

    }
};

export { onDeleteClick }