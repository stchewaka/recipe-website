import { Avatar, Fab, Modal, Tooltip, Typography, styled} from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon} from '@mui/icons-material'
import {Box} from "@mui/system";

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",

});
const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap: "10px",
    marginBottom:"20px"

});

const Add = () => {
    const [open, setOpen] = useState[false]
return (
    <>
<Tooltip onClick={e=>setOpen(true)}
    title="Add Post " 
    sx= {{position:"fixed",
    bottom:20, 
    left:{xs:"calc(50% - 25px)", md:30}
    }}>
<Fab color="primary" aria-label="add">
    <AddIcon />
    </Fab>
    </Tooltip>
    <StyledModal
    open={open}
    onClose={e=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box width={400} height={280} bgcolor= "white" p={3} borderRadius={5}>
        <Typography variant="h6" color="gray" textAlign="center"> Create Post</Typography>
        <UserBox>
            <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AV6xyRnS8V5Xsw7bMKsPNCwknYNEMc4Feg&s"  
            sx={{width: 30, height: 30}}  />
            <Typography fontWeight={500} variant="span">Simon Chewaka</Typography>
        </UserBox>
    </Box>
  </StyledModal>
  </>
);
};

export default Add