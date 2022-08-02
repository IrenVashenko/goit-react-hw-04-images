import { LoderContainer } from "./Loader.styled";
import { Oval } from "react-loader-spinner";

export const Loader = () => {
    return (
        <LoderContainer>
            <Oval
                ariaLabel='loading'
                height="100"
                width="100"
                strokeColor="#FF5733"
                strokeWidth="1"
                animationDuration="3"
            />
        </LoderContainer>
    );
}