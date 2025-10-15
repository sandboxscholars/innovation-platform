import "./globals.css";
export const metadata = {
  title: "Sandbox Scholars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 2. Apply the CSS variable to the body tag */}
      <body>{children}</body>
    </html>
  );
}
