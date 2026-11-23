"use client"
import logo from "@/public/LEGO-figurhoved i skinnering.png"
import { Box } from "@mui/material";
import { Footer, Navigation } from "./Components";

export default function ClientLayout({ children }) {
    return (
        <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
            <Navigation logo={logo} />
            <Box>{children}</Box>
            <Footer logo={logo} />
        </Box>
    );
}
