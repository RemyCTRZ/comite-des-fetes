import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const GalleryCard = ({ image }) => {

    const [preview, setPreview] = useState(false);

    useEffect(() => {
        const modal = document.getElementsByClassName("dialog " + image.id);

        if (preview === false) {
            modal[0].style.visibility = "hidden";
            modal[0].style.opacity = "0";
            modal[0].style.transform = "scale(.5) translate(-50%, -50%)";
        }
        else {
            modal[0].style.visibility = "visible";
            modal[0].style.opacity = "1";
            modal[0].style.transform = "scale(1) translate(-50%, -50%)";
        }
    })

    return (
        <div className="image_card">
            <img className={'image'} onClick={() => setPreview(true)} src={image.image} alt={"aperçu " + image.titre} />
            <dialog className={"dialog " + image.id}>
                <img className='image_preview' src={image.image} alt={"aperçu " + image.titre} />
                <button className="close_preview" onClick={() => setPreview(false)}><AiOutlineClose /></button>
            </dialog>
        </div>
    )
}

export default GalleryCard;