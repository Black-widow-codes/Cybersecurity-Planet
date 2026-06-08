import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: "#0891b2",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        CP
      </div>
    ),
    {
      ...size,
    }
  );
}