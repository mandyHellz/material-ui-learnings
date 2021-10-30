import React from "react";
import ReactDOM from "react-dom";
import App from './App';

import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            main: "#990000"
        }
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);