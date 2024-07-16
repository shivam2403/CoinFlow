import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import Grid from "../Grid";
import "./styles.css";
import List from "../List";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="Grid" sx={style} />
            <Tab label="List" value="List" sx={style} />
          </TabList>
        </div>
        <TabPanel value="Grid">
          <div className="grid-flex">
            {
              coins.map((coin, i) => (
                <Grid coin={coin} key={i} />
              ))
            }
          </div>
        </TabPanel>
        <TabPanel value="List">
          <table className="list-table">
            {coins.map((coin, i) => {
              return <List key={i} coin={coin} hide={false}></List>
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
