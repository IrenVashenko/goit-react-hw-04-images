import { useState } from "react";
import {
    ImageItem,
    Image
} from "./ImageGallery.styled";
import { Modal } from "../Modal/Modal";
import { Loader } from "components/Loader/Loader";

export const ImageGalleryItem = (({ id, url, tags, largeUrl }, loading) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            {loading && showModal && <Loader />}
            <ImageItem key={id} onClick={() => setShowModal(true)}>
                <Image src={url} alt={tags} />
            </ImageItem>
            {showModal && <Modal img={largeUrl} alt={tags} onClose={() => setShowModal(false)} />}
        </>
    )
});