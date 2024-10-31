import "@/app/ui/global.css";
import { mainText, titleText } from "@/app/ui/fonts";
import Header from "./ui/header/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${titleText.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
