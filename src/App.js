import NavBar from "./components/NavBar";
import Routing from "./utils/routing";

import { Box } from "@mui/system";

import "./App.css";

function App() {
  return (
    <Box container>
      <NavBar />
      <Routing />
    </Box>
  );
}

export default App;
