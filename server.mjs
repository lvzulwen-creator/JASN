import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('.', import.meta.url)));
const publicRoot = join(projectRoot, 'public');
const port = Number(process.env.PORT || 3000);
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

createServer((request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const candidatePath = requestPath === '/' ? '/index.html' : requestPath;
  const absolutePath = resolve(publicRoot, `.${normalize(candidatePath)}`);

  if (!absolutePath.startsWith(`${publicRoot}/`) || !existsSync(absolutePath) || !statSync(absolutePath).isFile()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  response.writeHead(200, {
    'Cache-Control': 'no-cache',
    'Content-Type': mimeTypes[extname(absolutePath).toLowerCase()] || 'application/octet-stream',
  });

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  createReadStream(absolutePath).pipe(response);
}).listen(port, '0.0.0.0', () => {
  console.log(`Help Jason fundraiser preview is running at http://0.0.0.0:${port}`);
});
