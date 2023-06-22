import { GlobalStyles } from "@/styles/global";
import { Global } from "@emotion/react";
import { Html, Head, Main, NextScript } from "next/document";
 
export default function Document() {
  return (
    <>
      <Html>
        <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins|Monoton&display=swap"
        />
        <Global styles={GlobalStyles} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  )
}