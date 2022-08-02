import { useEffect } from 'react';
import { Overlay, ModelContent } from './Modal.styled';

export const Modal = ({ img, onClose, alt }) => {

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return function cleanUp() {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <Overlay onClick={onClose}>
            <ModelContent src={img} alt={alt} />
        </Overlay>
    )
}