import { LoadMore } from './Button.styled'

export const Button = ({ handleLoadBtn }) => {
    return (
        <LoadMore type='button' onClick={handleLoadBtn}>Load more</LoadMore>
    );
};
