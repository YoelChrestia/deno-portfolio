import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>deno-portfolio</title>
        <link rel="icon" type="image/png" href="./favicon.ico" />
        <link rel="stylesheet" href="../styles/tailwind.css" />
      </Head>
      <Component />
    </html>
  );
}
