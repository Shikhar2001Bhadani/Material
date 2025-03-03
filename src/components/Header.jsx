import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Acciojob
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
