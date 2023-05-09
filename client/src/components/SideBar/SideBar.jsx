import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Header from "../Header/Header";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";

const style = {
  height: "100%",
  width: "15rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  paddingTop: "5rem",
};

export default function SideBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <div onClick={handleOpen}>
        {" "}
        <Header />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div onClick={()=>{navigate('/')}} className="side-bar-item">
            <div>
              <FmdGoodOutlinedIcon />
            </div>
            <p>Map</p>
          </div>
          <div onClick={()=>{navigate('/table')}} className="side-bar-item">
            <div>
              <TableRestaurantOutlinedIcon />
            </div>
            <p>Table</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
