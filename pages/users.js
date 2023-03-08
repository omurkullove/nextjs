import Link from "next/link";
import React, { useState } from "react";
import styles from "../Sass/navbar.module.scss";
import MainContainer from "../Components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer>
      <div className={styles.user}>
        <h1>User list.Total:{users.length}</h1>
        <ul>
          {users?.map(user => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <li>
                {user.name} ID:{user.id}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
}
