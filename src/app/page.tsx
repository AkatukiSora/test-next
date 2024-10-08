"use client"
import { Button } from '@mui/material';
import { useState } from 'react';
import PushButton from './client';
const pushButton = new PushButton();

export default function Home() {

  const [text, setText] = useState("Hoge");
  
  const pushHandler = () => {
    pushButton.pushButton();
    setText(pushButton.currentText);
  }

  return <>
    <main>
      <div>
        <p>{text}</p>
        <Button variant="outlined" onClick={pushHandler}>Contained</Button>
      </div>
    </main>
  </>;
}