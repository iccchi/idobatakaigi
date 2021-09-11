import React, {useRef, useEffect} from 'react'
import {ListItem, Avatar, ListItemAvatar, ListItemText, Typography} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { garavatarPath } from '../gravatar';

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

export const MessageItem = ({name, text, isLastItem}) => {
  const classes = useStyles()
  const avatarPath = garavatarPath(name)
  const ref = useRef(null)

  useEffect(()=>{
    if(isLastItem){
      ref.current.scrollIntoView({behavior: 'smooth'})
      console.log('5434')
    }
    console.log('1234')
  }, [isLastItem])

  return (
    <ListItem divider={true} ref={ref}>
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
