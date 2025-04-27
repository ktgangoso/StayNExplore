import React from 'react'
import { Box, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Menu() {
    return (
        <div id='menu'>
            <Box sx={{ height: "100vh", margin: 0, padding: "2rem" }}>
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
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "row", gap: "1rem", width: "100%" }}>
                    <Box
                        sx={{
                            backgroundImage: 'url("/menu/resort1.webp")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '27rem',
                            width: '35rem',
                            borderRadius: "1rem",
                            padding: '.5rem',
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column"
                        }}>
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <FavoriteBorderIcon sx={{ height: "2rem", width: "2rem", backgroundColor: "#fff", padding: ".2rem", borderRadius: "50%", cursor: "pointer" }} />
                        </Box>
                        <Box sx={{ backgroundColor: "#232323", color: "#fff", borderRadius: "1rem", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                            <Box>
                                <Typography sx={{ fontSize: "1.5rem", fontWeight: "900" }}>$1,499.00</Typography>
                                <Typography sx={{ fontSize: ".8rem" }}>21 Road Beach City</Typography>
                                <Typography sx={{ fontSize: ".8rem" }}>Diamond IO 1234</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", gap: "1rem" }}>
                                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                    <ShoppingCartIcon />
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem", textAlign: "center" }}>
                                    <Box>
                                        <Typography sx={{ fontSize: ".7rem" }}>Ratings</Typography>
                                        <Typography sx={{ fontSize: ".7rem" }}>245</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: ".7rem" }}>No. of Book</Typography>
                                        <Typography sx={{ fontSize: ".7rem" }}>321</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: ".7rem" }}>Reviews</Typography>
                                        <Typography sx={{ fontSize: ".7rem" }}>90</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>


                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexDirection: "column" }}>
                        <Box sx={{
                            backgroundImage: 'url("/menu/resort2.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '12.5rem',
                            width: '56rem',
                            borderRadius: "1rem",
                            padding: '.5rem',
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column"
                        }}>
                            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <FavoriteBorderIcon sx={{ height: "2rem", width: "2rem", backgroundColor: "#fff", padding: ".2rem", borderRadius: "50%", cursor: "pointer" }} />
                            </Box>
                            <Box sx={{ backgroundColor: "#232323", color: "#fff", borderRadius: "1rem", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Box>
                                    <Typography sx={{ fontSize: "1.5rem", fontWeight: "900" }}>$1,499.00</Typography>
                                    <Typography sx={{ fontSize: ".8rem" }}>21 Road Beach City</Typography>
                                    <Typography sx={{ fontSize: ".8rem" }}>Diamond IO 1234</Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", gap: "1rem" }}>
                                    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                        <ShoppingCartIcon />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem", textAlign: "center" }}>
                                        <Box>
                                            <Typography sx={{ fontSize: ".7rem" }}>Ratings</Typography>
                                            <Typography sx={{ fontSize: ".7rem" }}>245</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: ".7rem" }}>No. of Book</Typography>
                                            <Typography sx={{ fontSize: ".7rem" }}>321</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: ".7rem" }}>Reviews</Typography>
                                            <Typography sx={{ fontSize: ".7rem" }}>90</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>


                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "row", gap: "1rem" }}>
                            <Box sx={{
                                backgroundImage: 'url("/menu/resort3.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '12.5rem',
                                width: '27rem',
                                borderRadius: "1rem",
                                padding: '.5rem',
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "column"
                            }}>
                                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    <FavoriteBorderIcon sx={{ height: "2rem", width: "2rem", backgroundColor: "#fff", padding: ".2rem", borderRadius: "50%", cursor: "pointer" }} />
                                </Box>
                                <Box sx={{ backgroundColor: "#232323", color: "#fff", borderRadius: "1rem", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                    <Box>
                                        <Typography sx={{ fontSize: "1.5rem", fontWeight: "900" }}>$1,499.00</Typography>
                                        <Typography sx={{ fontSize: ".8rem" }}>21 Road Beach City</Typography>
                                        <Typography sx={{ fontSize: ".8rem" }}>Diamond IO 1234</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", gap: "1rem" }}>
                                        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                            <ShoppingCartIcon />
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem", textAlign: "center" }}>
                                            <Box>
                                                <Typography sx={{ fontSize: ".7rem" }}>Ratings</Typography>
                                                <Typography sx={{ fontSize: ".7rem" }}>245</Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: ".7rem" }}>No. of Book</Typography>
                                                <Typography sx={{ fontSize: ".7rem" }}>321</Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: ".7rem" }}>Reviews</Typography>
                                                <Typography sx={{ fontSize: ".7rem" }}>90</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>


                            <Box sx={{
                                backgroundImage: 'url("/menu/resort4.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '12.5rem',
                                width: '27rem',
                                borderRadius: "1rem",
                                padding: '.5rem',
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "column"
                            }}>
                                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    <FavoriteBorderIcon sx={{ height: "2rem", width: "2rem", backgroundColor: "#fff", padding: ".2rem", borderRadius: "50%", cursor: "pointer" }} />
                                </Box>

                                <Box sx={{ backgroundColor: "#232323", color: "#fff", borderRadius: "1rem", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                    <Box>
                                        <Typography sx={{ fontSize: "1.5rem", fontWeight: "900" }}>$1,499.00</Typography>
                                        <Typography sx={{ fontSize: ".8rem" }}>21 Road Beach City</Typography>
                                        <Typography sx={{ fontSize: ".8rem" }}>Diamond IO 1234</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", gap: "1rem" }}>
                                        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                            <ShoppingCartIcon />
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem", textAlign: "center" }}>
                                            <Box>
                                                <Typography sx={{ fontSize: ".7rem" }}>Ratings</Typography>
                                                <Typography sx={{ fontSize: ".7rem" }}>245</Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: ".7rem" }}>No. of Book</Typography>
                                                <Typography sx={{ fontSize: ".7rem" }}>321</Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: ".7rem" }}>Reviews</Typography>
                                                <Typography sx={{ fontSize: ".7rem" }}>90</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Menu