import { Button } from "./Button";
import { ButtonCssModules } from "./ButtonCssModules";
import { ButtonStyledComponents } from "./ButtonStyledComponents";

export const CssVariants = () => (
    <>
        <p>Inline styling:</p>
        <Button>klicka här!</Button>

        <p>CSS Modules</p>
        <ButtonCssModules>Klicka här</ButtonCssModules>

        <p>Styled components (variant = Primary)</p>
        <ButtonStyledComponents>Klicka här!</ButtonStyledComponents>

        <p>Styled components (variant = Secondary)</p>
        <ButtonStyledComponents variant="secondary">Klicka här!</ButtonStyledComponents>
    </>
)