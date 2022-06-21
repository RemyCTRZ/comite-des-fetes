import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const GalleryCard = ({ image }) => {

    const [preview, setPreview] = useState(false);

    // Récupère le modal avec la classe "dialog" et switch entre visible et invisible
    // Le problème : le document.querySelector récupère le premier élément avec
    // la classe "dialog" et pas celui qui correspond à l'objet de mon tableau
    // Il faudrait que je puisse passer en paramètre l'image.id par exemple
    // et vérifier que l'image et le modal ont le même image.id dans leur classe
    // pour ensuite appliquer mes changements

    useEffect(() => {
        const modal = document.querySelector(".dialog");
        const image = document.querySelector(".image");

        console.log(image, modal);

        if (preview === false) {
            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
        }
        else {
            modal.style.visibility = "visible";
            modal.style.opacity = "1";
        }
    })

    return (
        <div className="image_card">
            <img className={'image ' + image.id} onClick={() => setPreview(true)} src={image.image} alt={"aperçu " + image.titre} />
            <dialog className={"dialog " + image.id}>
                <img className='image_preview' src={image.image} alt={"aperçu " + image.titre} />
                <button className="close_preview" onClick={() => setPreview(false)}><AiOutlineClose /></button>
            </dialog>
        </div>
    )
}

export default GalleryCard;