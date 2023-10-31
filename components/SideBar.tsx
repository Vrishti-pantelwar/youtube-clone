import { Button, Stack } from "@mui/material";
import { categories } from "../utils/constants";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};
const SideBar = ({ selectedCategory, setSelectedCategory }: Props) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => (
        <Button
          onClick={() => setSelectedCategory(cat.name)}
          key={cat.name}
          className="category-btn"
          style={{
            background: cat.name === selectedCategory ? "#fc1503" : undefined,
            color: "#fff",
          }}
        >
          <span
            style={{
              color: cat.name === selectedCategory ? "#fff" : "#fc1503",
              marginRight: "15px",
              paddingTop: "4px",
            }}
          >
            {cat.icon}
          </span>
          <span
            style={{
              opacity: cat.name === selectedCategory ? 1 : 0.8,
            }}
          >
            {cat.name}
          </span>
        </Button>
      ))}
    </Stack>
  );
};

export default SideBar;
