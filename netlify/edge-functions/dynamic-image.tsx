/** @jsxImportSource https://esm.sh/react */

import { ImageResponse } from "../../mod.ts";

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgb(10, 10, 10)',
          fontFamily: '"Mona Sans", sans-serif',
          color: '#fff',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ padding: '40px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 600, margin: 0 }}>{title}</h1>
          <div style={{ fontSize: '30px', position: 'absolute', bottom: '40px', right: '40px' }}>techdocs.studio</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
