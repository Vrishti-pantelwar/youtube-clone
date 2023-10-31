import { Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../utils/logo.png";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Image src={logo} alt="logo" height={45} width={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
