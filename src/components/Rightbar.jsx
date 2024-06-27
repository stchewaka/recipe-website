import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box flex={2}
        p={2} 
        sx={{display:{xs: "none", sm: "block"}}}
         ><Box position = "fixed" width={300}>
            <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Online Friends</Typography>
            <AvatarGroup max={8}>
  <             Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
                <Avatar alt=" "src="https://material-ui.com/static/images/avatar/8.jpg" />
                <Avatar alt=" "src="https://material-ui.com/static/images/avatar/9.jpg" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
                <img
                src="https://img.buzzfeed.com/buzzfeed-static/static/2022-03/5/0/asset/6201713e5c7e/sub-buzz-1009-1646440684-8.jpg?downsize=900:*&output-format=auto&output-quality=auto"
                alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img
                src="https://www.pumpkinnspice.com/wp-content/uploads/2016/03/easy-breakfast-quesadillas-13.jpg"
                alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img
                src="https://insanelygoodrecipes.com/wp-content/uploads/2021/06/Bowl-of-Braised-Short-Ribs-with-Mashed-Potatoes.jpg"
                alt=""
                />
            </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="New Food Spot in KC?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Riley Bridgers
              </Typography>
              {" — Heyy, let's go to new restarunt opening Friday."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Simon Chewaka" src="https://cmagroupcpa.com/wp-content/uploads/2019/04/Tim-Chewaka.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Mexican Food"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Dad
              </Typography>
              {" — Hi son! Mom wants to know if this Mexican dish for dinner looks good?"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
         </Box>
    </Box>)
}
export default Rightbar