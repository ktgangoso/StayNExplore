import React from 'react'
import { Box, Typography } from '@mui/material'

function Room() {
    return (
        <div id='room'>
            <Box sx={{ height: "100vh", margin: 0, padding: 0 }}>
                <Typography>Room Available</Typography>
            </Box>
        </div>
    )
}

export default Room