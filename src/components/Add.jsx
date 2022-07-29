import { AddIcCallOutlined, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Add as AddIc } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyleModal = styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
});
const UserBox = styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:'10px'
});

export const Add = () => {
    const [open, setopen] = useState(false)
    
  return (
    <>
        <Tooltip onClick={e => setopen(true)} title="Add Post" sx={{position:'fixed', bottom:'20px', left:{xs:'calc(50% - 25px)', md:'30px'}}}>
            <Fab color="primary" aria-label="add">
                <AddIc />
            </Fab>
        </Tooltip>
        <StyleModal
        open={open}
        onClose={e => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={'400px'} height={'280px'} p={3} border={'0px'}  bgcolor={'background.default'} color={'text.primary'} borderRadius={5}>
            <Typography variant='h6' color="gray" textAlign={'center'}>
                Create Post
            </Typography>
            <UserBox>
            <Avatar sx={{width:30,height:30}} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' />
            <Typography variant='h6'>Hamza</Typography>
            </UserBox>
            <TextField
            fullWidth 
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="What's Your Mind ?"
            variant="standard"
            sx={{marginTop:'20px'}}
          />
          <Stack direction={'row'} flex={1} gap={'10px'}  mt={3} mb={5}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:'100px'}} ><DateRange /></Button>
            
        </ButtonGroup>
        </Box>
        </StyleModal>
    </>
  )
}
