import React, { useState, useEffect } from "react";
import styles from "../styles/homepage.module.css";
import { Box, Flex, Image, Text, Select } from "@chakra-ui/react";
import { IoIosHelpCircle } from "react-icons/io";
import { FaBell } from "react-icons/fa";

const Homepage = ({user}) => {
  const [mineValue, setMineValue] = useState(0.0);

  useEffect(() => {
    const storedValue = parseFloat(localStorage.getItem("mineValue")) || 0;
    setMineValue(storedValue);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMineValue((prevValue) => {
        const newValue = prevValue + 0.00000001;
        localStorage.setItem("mineValue", newValue.toFixed(8));
        return newValue;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={styles.container}>
      <Box className={styles.body}>
        <Box className={styles.profile}>
          <Box className={styles.profileImage}>
            <Box border={'1px solid white'} borderRadius={'50%'}>
              <Image w={'30px'} h={'30px'} src="https://cdn-icons-png.flaticon.com/512/5987/5987424.png"  />
            </Box>
            <Box textAlign={"start"} fontSize={"12px"}>
              <Text color={"white"}>{user?.first_name}</Text>
              <Text fontSize={"10px"} color={"whitesmoke"}>
                {`Id:${user?.id}`}
              </Text>
            </Box>
          </Box>
          <Box className={styles.profileDetails}>
            <IoIosHelpCircle size={"30px"} />
            <FaBell size={"30px"} />
          </Box>
        </Box>

          {/* details div */}
          <Box textAlign={"start"} mt={4}>
            <Text fontWeight={600}>{"Free Tier"}</Text>
            <Text fontSize={"12px"}>
              {"Daily Mining Capacity - 1 Virtual "}
            </Text>
            <Text fontSize={"12px"}>{"Total Mine - 100 Virtual "}</Text>
          </Box>

        {/* mine section */}
        <Box className={styles.mine}>
          <img
            className={styles.spin}
            width={'80%'}
            style={{ animationDuration: `${400}ms` }}
            src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1736591484/fan_ok4dcn.png"
          />
        </Box>

        {/* token details */}
        <Box mt={4}>
          <Text fontWeight={700} fontSize={"28px"}>
            {mineValue.toFixed(8)}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
