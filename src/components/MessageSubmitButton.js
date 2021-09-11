import { IconButton } from '@material-ui/core'
import React from 'react'
import SendIcon from '@material-ui/icons/Send'
import { pushMessage } from '../firebase'
export const MessageSubmitButton = ({name, setText, text, inputEl}) => {
  
  return (
    <IconButton disabled={text===''} onClick={()=>{
      pushMessage({name: 'ichi', text});
      setText('');
      inputEl.current.focus()
    }}>
      <SendIcon />
    </IconButton>
  )
}
