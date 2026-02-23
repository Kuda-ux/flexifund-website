import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "linear-gradient(135deg, #0c2d48, #1a5276)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: 700,
          borderRadius: 32,
          letterSpacing: -4,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        FF
      </div>
    ),
    {
      ...size,
    }
  );
}
