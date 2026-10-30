import { mkdir, writeFile } from 'node:fs/promises';

// Real files let GitHub Pages resolve retired routes without an SPA/404 fallback.
const destinations = {
  about: '/#anni',
  services: '/#servicios',
  contact: '/#contacto',
  booking: '/#contacto',
  courses: '/',
  testimonials: '/',
  '404': '/',
};
for (const [route, destination] of Object.entries(destinations)) {
  await mkdir(`dist/${route}`, { recursive: true });
  await writeFile(`dist/${route}/index.html`, `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="refresh" content="0;url=${destination}"><link rel="canonical" href="https://anniaguilar.com${destination}">
<title>Anni Aguilar — Página actualizada</title></head><body><p>Esta página se ha actualizado. <a href="${destination}">Continúa al sitio de Anni Aguilar.</a></p></body></html>\n`);
}
await writeFile('dist/404.html', `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Página no encontrada — Anni Aguilar</title></head><body><h1>Página no encontrada</h1><p><a href="/">Visita el sitio de Anni Aguilar.</a></p></body></html>\n`);
