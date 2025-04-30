// postbuild.js
import fs from "fs";
import path from "path";

const src = path.resolve("client", "public", "video");
const dest = path.resolve("dist", "public", "video");

// Função para copiar diretórios recursivamente
function copyDirSync(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });

  for (const entry of fs.readdirSync(srcDir)) {
    const srcPath = path.join(srcDir, entry);
    const destPath = path.join(destDir, entry);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDirSync(src, dest);
console.log("✅ Vídeo copiado para dist/public/video");