import React, { useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid} from '@material-ui/core';
import { garavatarPath } from '../gravatar';
import {MessageField} from './MessageField';
import {MessageSubmitButton} from './MessageSubmitButton'

const useStyles = makeStyles({
  root:{
    gridRow: 2,
    margin: "26px"
  }
})

export const MessageInputField = ({name}) => {
  const inputEl = useRef(null)
  const [text, setText] = useState('')
  const classes = useStyles()
  const avatarPath = garavatarPath(name)

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath}/>
        </Grid>
        <Grid item xs={10}>
           <MessageField setText={setText} text={text} name={name} inputEl={inputEl}/>
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton name={name} text={text} setText={setText} inputEl={inputEl}/>
        </Grid>
      </Grid>
    </div>
  )
}
