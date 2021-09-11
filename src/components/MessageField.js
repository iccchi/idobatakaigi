import React, { useState } from 'react'
import { TextField } from '@material-ui/core' 
import { pushMessage } from '../firebase'

export const MessageField = ({name, setText, text, inputEl}) => {
  const [isComposed, setIsComposed] = useState(false)
  console.log({text})
  return (
    <TextField
      inputRef={inputEl}
      autoFocus
      fullWidth={true} 
      onChange={e=>setText(e.target.value)}
      onKeyDown={(e)=>{
        if(isComposed || e.target.value==='') return;
        if(e.key==="Enter"){
          console.log('push message to firebase')
          pushMessage({name: 'ichi', text})
          setText('');
          e.preventDefault();
        }
      }}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
      value={text}
    />
  )
}
