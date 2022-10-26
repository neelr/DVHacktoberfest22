import fs from "fs";
import render from "github-markdown-render";

export async function getStaticPaths() {
  const fnames = fs.readdirSync("./public/people");
  return {
    paths: fnames.map((n) => {
      return {
        params: {
          name: n,
        },
      };
    }),
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params, ...ctx }) {
  let md = fs.readFileSync(`./public/people/${params.name}`, "utf8");
  md = await render(md);
  return {
    props: { name: params.name, md },
  };
}

export default function Post({ name, md, ...props }) {
  return (
    <>
      <h1>{name}</h1>
      <p dangerouslySetInnerHTML={{ __html: md }}></p>
    </>
  );
}
