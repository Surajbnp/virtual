import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { useState, useEffect } from "react";
import AllRoutes from "./pages/AllRoutes";

function App() {
  const [user, setUser] = useState(null);
  const [isMobile, setIsMobile] = useState(true);



  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlId = params.get("id");

      if (urlId) {
        setUser(urlId);
      } else if (window.Telegram?.WebApp) {
        Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
        const currentUser = Telegram.WebApp.initDataUnsafe?.user;
        setUser(currentUser);
      }
    }
  }, []);

  return (
    <div className="App">
      {isMobile ? (
        <>
          <AllRoutes user={user} />
          <Box
            position="fixed"
            bottom="0"
            width="100%"
            padding="10px"
            textAlign="center"
            zIndex="1000000"
            background="rgba(255, 255, 255, 0.1)"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
            backdropFilter="blur(2.5px)"
            border="1px solid rgba(255, 255, 255, 0.3)"
          >
            <Navbar />
          </Box>
        </>
      ) : (
        <Box
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          backgroundColor="lightgray"
          flexDir={"column"}
        >
          <Text fontSize={"36px"} fontWeight={600}>
            Virtual Miner
          </Text>
          <Text fontSize="xl">Please open this miner on a mobile device.</Text>
        </Box>
      )}
    </div>
  );
}

export default App;
