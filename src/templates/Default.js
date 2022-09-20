import { Box } from "@mui/material"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { theme } from "../themes"

const Default = ({ children }) => {
  return (
    <Box bgcolor={theme.palette.background} >
      <Header />
      <Box sx={{ paddingTop: 8, paddingBottom: 8 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Default