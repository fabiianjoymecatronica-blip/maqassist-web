const http = require("http");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");
const port = process.env.PORT || 3000;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function renderHtml(data, req, pathname) {
  const configuredOrigin = process.env.SITE_URL;
  const requestHost = req.headers.host || 'localhost:3000';
  const safeHost = /^[a-z0-9.-]+(?::\d+)?$/i.test(requestHost) ? requestHost : 'localhost:3000';
  const protocol = req.headers['x-forwarded-proto'] === 'https' ? 'https' : safeHost.startsWith('localhost') ? 'http' : 'https';
  const origin = configuredOrigin || `${protocol}://${safeHost}`;
  const cleanPath = ['/repuestos', '/maquinas', '/planes', '/servicios', '/nosotros', '/contacto'].includes(pathname) ? pathname : '/';
  return data.toString('utf8').replace('__CANONICAL_URL__', new URL(cleanPath, origin).href);
}

http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  const requested = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(publicDir, requested));

  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403).end("Acceso denegado");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      fs.readFile(path.join(publicDir, "index.html"), (fallbackError, fallback) => {
        if (fallbackError) return res.writeHead(404).end("No encontrado");
        res.writeHead(200, { "Content-Type": types[".html"] }).end(renderHtml(fallback, req, pathname));
      });
      return;
    }
    const type = types[path.extname(filePath)] || 'application/octet-stream';
    res.writeHead(200, { "Content-Type": type }).end(type === types['.html'] ? renderHtml(data, req, pathname) : data);
  });
}).listen(port, () => console.log(`AWO Group disponible en puerto ${port}`));
