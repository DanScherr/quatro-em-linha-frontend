/** MUI */
import {createTheme} from '@mui/material';
import { grey, lime, teal } from '@mui/material/colors';

const color1 = lime;
const colo2 = teal;

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            navBar: grey[900], //#212121
            footBox: grey[800] //#424242
        },
        primary: {
            main: color1['A400'], //#c6ff00
            lightMain: color1['A200'], //#eeff41
            veryLightMain: color1['A100'], //#f4ff81
            lightestMain: color1['50'], //#f9fbe7
        },
        secondary: {
            main: colo2['A700'], //#00bfa5
            veryLightMain: colo2[600], //#00897b
        },
    }
});