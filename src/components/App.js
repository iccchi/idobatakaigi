import React, { useState } from 'react';
import SignIn from './SignIn';
import {Main} from './Main';
import config from '../config.json'
console.log({config})
export default () => {
  const [name, setName] = useState("");

  return(
    name || config.signInEnabled ? <Main name={name}/> : <SignIn setName={setName}/>
  )
};
