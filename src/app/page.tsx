import fs from "fs";
import path from "path";

export default function Home() {
  const filePath = path.join(process.cwd(), "public", "index.html");
  const html = fs.readFileSync(filePath, "utf-8");
  
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: html }} 
      style={{ width: "100%", minHeight: "100vh" }}
    />
  );
}
