import fs from "fs";
import path from "path";

export default function App({ people, ...props }) {
  return (
    <>
      <h1>dvhacktoberfest 🎃 ~~</h1>
      <img src="https://doggo.ninja/HX2lrK.gif" />
      <br />
      <p>
        during spooky season, contribute to something spectacularly unspooky—a
        student directory for dvhackclub!
      </p>
      <h2>people:</h2>
      {people.map((name) => (
        <>
          <a href={`/hackers/${name}`}>{name}</a> <br />
        </>
      ))}
    </>
  );
}

export async function getStaticProps(context) {
  const fnames = fs.readdirSync("./people");
  return {
    props: { people: fnames },
  };
}
