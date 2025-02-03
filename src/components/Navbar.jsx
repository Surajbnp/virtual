import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaKey, FaWallet } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";
import styles from "../styles/homepage.module.css";
import { useNavigate } from "react-router-dom";

// here we have the dynamic navbar

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(null);
  const navigate = useNavigate();

  const handleTabClick = (drawerName) => {
    setOpenDrawer(openDrawer === drawerName ? null : drawerName);
    navigate(drawerName);
  };

  const getTabStyle = (tabName) => {
    return tabName === openDrawer ? styles.activeTab : styles.inactiveTab;
  };

  return (
    <Box fontSize={"12px"} className={styles.nav}>
      <Box
        onClick={() => handleTabClick("/")}
        className={getTabStyle("/")}
      >
        <FaHome size={"22px"} />
        <Text>Home</Text>{" "}
      </Box>
      <Box
        onClick={() => handleTabClick("upgrade")}
        className={getTabStyle("upgrade")}
      >
        <FaKey size={"22px"} />
        <Text>Upgrade</Text>
      </Box>

      <Box
        onClick={() => handleTabClick("friends")}
        className={getTabStyle("friends")}
      >
        <LiaUserFriendsSolid size={"22px"} />
        <Text>Friends</Text>
      </Box>
      <Box
        onClick={() => handleTabClick("wallet")}
        className={getTabStyle("wallet")}
      >
        <FaWallet size={"22px"} />
        <Text>Wallet</Text>
      </Box>
    </Box>
  );
};

export default Navbar;
