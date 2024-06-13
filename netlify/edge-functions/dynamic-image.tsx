/** @jsxImportSource https://esm.sh/react */

import { ImageResponse } from "../../mod.ts";

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");

  return new ImageResponse(
    <div
      style={{
        fontSize: 60,
        color: "white",
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
