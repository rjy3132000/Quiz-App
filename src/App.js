import { Box, Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FinalScreen from "./component/FinalScreen";
import Questions from "./component/Questions";
import Setting from "./component/Setting";


function App() {
  return (
    <>
    <BrowserRouter>
      <Container maxWidth={"sm"}> 
        <Box textAlign={"center"} mt="5">
          <Routes>
            <Route path="/" exact element={<Setting/>}/>
            <Route path="/questions" element={<Questions />}/>
            <Route path="/score" element={<FinalScreen />}/>
            <Route path="/*" element={<h1>Error Page Not Found</h1>}/>
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
