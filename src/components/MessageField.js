import React, { useState } from 'react'
import { TextField } from '@material-ui/core' 
import { pushMessage } from '../firebase'

export const MessageField = ({name, setText, text, inputEl}) => {
  const [isComposed, setIsComposed] = useState(false)
 
  return (
    <TextField
      inputRef={inputEl}
      autoFocus
      fullWidth={true} 
      onChange={e=>setText(e.target.value)}
      onKeyDown={(e)=>{
        if(isComposed || e.target.value==='') return;
        if(e.key==="Enter"){
          
          pushMessage({name , text})
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
