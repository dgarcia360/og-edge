/** @jsxImportSource https://esm.sh/react */

import { ImageResponse } from "../../mod.ts";

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");

  return new ImageResponse(
    <div
      style={{
        fontSize: 40,
        color: 'black',
        background: 'white',
        width: '100%',
        height: '100%',
        padding: '50px 200px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {title}
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
