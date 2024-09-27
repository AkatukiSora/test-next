import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const H1 = styled.h1`
  color: red;
`;

const StyledComponent: NextPage = () => {
  return (
    <div>
      <Head>
        <title>styled components test</title>
      </Head>
      <main>
        <H1>styled componentsのテスト</H1>
      </main>
    </div>
  );
};

export default StyledComponent;
