import { useState, useEffect } from "react";
import styled from "styled-components";

const CenterDiv = styled.div`
  text-align: center;
`;

function SayHello() {
  const [data, setData] = useState({ name: "" });

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((profile) => {
        setData(profile);
      });
  }, []);

  return <CenterDiv>hello {data.name}</CenterDiv>;
}

export default SayHello;
