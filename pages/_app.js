export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
      />
      <Component {...pageProps} />
      <br />
      <footer>
        Add to this & check out the source code @{" "}
        <a href="https://github.com/neelr/DVHacktoberfest22">
          neelr/DVHacktoberfest22
        </a>
      </footer>
    </>
  );
}
