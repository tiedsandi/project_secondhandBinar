import React from "react";
import { Box, Button, Modal } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "15px",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const ModalContainer = ({ content, setModal }) => {
  return (
    <Modal
      data-testid="modal-container"
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={() => setModal(false)}>
            <CloseOutlinedIcon />
          </Button>
        </Box>
        {content}
      </Box>
    </Modal>
  );
};

export default ModalContainer;
