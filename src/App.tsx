import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  styled,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { GroupAdd, Groups, Person2 } from "@mui/icons-material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function App() {
  const [isShow, setIsShow] = React.useState(false);
  const toggleDrawer = () => {
    setIsShow((isShow) => !isShow);
  };
  const clickMenu = (menu: string) => {
    switch (menu) {
      case "login":
        console.log("로그인");
        break;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={isShow}
            onClose={toggleDrawer}
            sx={{
              "& .MuiDrawer-paper": {
                width: "80%",
                boxSizing: "border-box",
              },
            }}
          >
            <DrawerHeader>여기 아이콘 자리</DrawerHeader>
            <Divider />
            <List>
              <ListItemButton onClick={() => clickMenu("login")}>
                <ListItemIcon>
                  <Person2 />
                </ListItemIcon>
                <ListItemText primary={"로그인"}></ListItemText>
              </ListItemButton>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemIcon>
                  <GroupAdd />
                </ListItemIcon>
                <ListItemText primary={"파티개설"}></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Groups />
                </ListItemIcon>
                <ListItemText primary={"파티목록"}></ListItemText>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
