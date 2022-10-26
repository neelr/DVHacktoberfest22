import fs from "fs";
import path from "path";

export default function App({ people, ...props }) {
  return (
    <>
      <h1>DVHacktoberfest 🎃</h1>
      <p>Take a look at different people in the club!</p>
      {people.map((name) => (
        <>
          <a href={`/hackers/${name}`}>{name}</a> <br />
        </>
      ))}
    </>
  );
}

export async function getStaticProps(context) {
  const fnames = fs.readdirSync("./public/people");
  return {
    props: { people: fnames },
  };
}
