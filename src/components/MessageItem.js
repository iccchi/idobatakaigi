import React from 'react'
import {ListItem, Avatar, ListItemAvatar, ListItemText, Typography} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { garavatarPath } from '../gravatar';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

export const MessageItem = ({name, text}) => {
  const classes = useStyles()
  const avatarPath = garavatarPath(name)

  return (
    <ListItem divider={true}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
    
  )
}
