import Head from "next/head";
import Links from "./Links/link";

import style from "../Sass/navbar.module.scss";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"Aidin Next js" + keywords}></meta>
        <title>Main page</title>
      </Head>
      <nav className={style.navbar}>
        <Links href={"/"} text="Main" />
        <Links href={"/users"} text="Users" />
      </nav>
      <div>{children}</div>
      <footer className={style.footer}>Next JS & Sass</footer>
    </>
  );
};

export default MainContainer;
