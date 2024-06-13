/** @jsxImportSource https://esm.sh/react */

import { ImageResponse } from "../../mod.ts";

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Default Title";

  console.log("Title:", title);

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
        position: "relative",
      }}
    >
      <div style={{ padding: "40px" }}>
        <h1>{title}</h1>
        <div
          style={{
            fontSize: "30px",
            position: "absolute",
            bottom: "40px",
            right: "40px",
          }}
        >
          techdocs.studio
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
