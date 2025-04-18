import React from 'react'
import { Box, Typography, Button } from '@mui/material'

function Home() {
  return (
    <div id='home'>
      <Box sx={{ height: "100vh", padding: "3rem" }}>
        <Box sx={{ textAlign: "center", padding: 0, margin: 0 }}>
          <Typography sx={{ fontSize: "5rem", fontWeight: "700" }}>Title</Typography>
          <Typography sx={{ fontSize: "5rem", fontWeight: "700" }}>Heading</Typography>
        </Box>
        <Box sx={{ textAlign: "center", paddingLeft: 25, paddingRight: 25, marginTop: "2rem" }}>
          <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, sapiente quisquam! Ullam repellat quod earum
            velit aliquid sunt quisquam, recusandae soluta deserunt at optio sed reiciendis hic magni sit animi?
          </Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem"}}>
          <Button variant="outlined" sx={{padding: "1rem"}}>Book Now!</Button>
        </Box>
      </Box>
    </div>
  )
}

export default Home