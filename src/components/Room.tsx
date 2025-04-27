import React from 'react'
import { Box, Typography } from '@mui/material'

function Room() {
    return (
        <div id='room'>
            <Box sx={{ height: "100vh", margin: 0, padding: "1rem" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "row" }}>
                    <Box sx={{ width: "100%" }}>
                        <Typography sx={{ fontSize: "2rem", fontWeight: "900" }}>Title</Typography>
                        <Typography sx={{ fontSize: "2rem", fontWeight: "900" }}>Heading</Typography>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit animi mollitia accusamus sed ea maxime? Nulla numquam
                        consequuntur quas est ullam beatae, mollitia blanditiis natus officia, quibusdam, dolores nemo in?
                    </Box>
                </Box>

                <Box sx={{ display: "flex", gap: ".5rem", height: "65%" }}>
                    <Box sx={{
                        backgroundImage: 'url("/menu/resort2.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat",
                        height: '100%',
                        width: '100%',
                        borderRadius: "1rem",
                        padding: '.5rem',
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column"
                    }}>
                    </Box>
                    <Box sx={{
                        backgroundImage: 'url("/menu/resort2.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat",
                        height: '100%',
                        width: '100%',
                        borderRadius: "1rem",
                        padding: '.5rem',
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column"
                    }}>
                    </Box>
                    <Box sx={{
                        backgroundImage: 'url("/menu/resort2.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat",
                        height: '100%',
                        width: '100%',
                        borderRadius: "1rem",
                        padding: '.5rem',
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column"
                    }}>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}

export default Room