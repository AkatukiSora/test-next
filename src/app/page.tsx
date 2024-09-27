"use client"
import { Button } from '@mui/material';
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState('Hoge');
  const pushButton = () => {
    if (text == "Hoge"){
      setText('Changed!');
    }else{
      setText('Hoge');
    }
  };

  return <>
    <main>
      <div>
        <p>{text}</p>
        <Button variant="contained" onClick={pushButton}>Contained</Button>
      </div>
    </main>
  </>;
}