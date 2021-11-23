import NavBar from "./components/NavBar";
import SideOpener from "./components/SideOpener/SideOpener";
import Routing from "./utils/routing";
import { Box } from "@mui/system";

import "./App.css";

function App() {
  return (
    <Box container>
      <Box className="AppWrapper">
        <NavBar />
        <SideOpener />
        <Routing />
      </Box>
    </Box>
  );
}

export default App;
