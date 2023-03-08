import MainContainer from "../../Components/MainContainer";

export default function user(user) {
  return (
    <MainContainer>
      <div>
        <h1>{user.id}</h1>
        <h1>User name {user.name}</h1>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();
  return {
    props: user,
  };
}
