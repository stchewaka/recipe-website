import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Post = () => {
    return (
        <Card sx ={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Chef Ryan"
        subheader="June 19, 2024"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.slurrp.com/prodarticles/vnx7lrog1aa.webp"
        alt="Doro wot"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive Doro wot is a perfect dinner dish and a fun meal to cook
          together with your guests. Add a bowl of iyeb(Ethiopian cheese) to kick
          up the flavor.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        </CardActions>
    </Card>
    )
}

export default Post