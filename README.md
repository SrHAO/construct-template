# Construct Template

Sitio web bilingüe (es/en) para una empresa de construcción, suministro de materiales y obra civil. Construido con **Astro 7** (salida estática), **Tailwind CSS v4** e islas de **React**.

## Comandos

| Comando                  | Acción                                                          |
| :----------------------- | :-------------------------------------------------------------- |
| `npm install`            | Instala dependencias                                            |
| `npm run dev`            | Servidor de desarrollo en `localhost:4321`                      |
| `npm run build`          | Construye el sitio estático en `./dist/`                        |
| `npm run preview`        | Previsualiza la compilación de producción                        |
| `npm run check`          | Diagnósticos de Astro + TypeScript                              |
| `npm run brand:assets`   | Regenera favicon, iconos del manifest e imagen OG con `sharp`   |

## Antes de publicar

Este repositorio es una **plantilla**. Todo lo siguiente es **ficticio y debe reemplazarse**:

1. **`src/data/site.ts`** — razón social, RFC, domicilio, teléfonos, correo, dominio y redes.
   El dominio se usa también en `astro.config.mjs`; mantenlos sincronizados.
2. **`src/i18n/legal.ts`** — Aviso de privacidad y Términos y Condiciones.
   Están redactados conforme a la **LFPDPPP** (art. 16; arts. 24, 29, 37 y 38 de su Reglamento),
   pero **deben revisarse por asesoría legal** y ajustarse a la actividad real y a los
   proveedores que traten los datos. El aviso de privacidad incluye una sección
   «Aviso de muestra» que debe eliminarse al momento de publicar.
3. **`src/data/trust.ts`** — testimonios, FAQ, credenciales, cobertura y garantías.
   Están **vacíos a propósito**: publicar cifras, reseñas o certificaciones inventadas
   constitute publicidad engañosa. Al cargar datos reales, los bloques correspondientes
   se activan automáticamente.
4. **`src/content/`** — contenido Markdown de servicios y productos.

## Estructura

```text
├── public/                 # estáticos: favicon, manifest, robots, imagen OG
├── scripts/                # generación de assets de marca
└── src/
    ├── assets/fonts/       # Atkinson autoalojada
    ├── components/         # componentes Astro (y islas React)
    ├── content/            # colecciones Markdown (products, productsEn, services, servicesEn)
    ├── data/
    │   ├── site.ts         # datos de la empresa  ← reemplazar
    │   └── trust.ts        # contenido de confianza ← completar
    ├── i18n/
    │   ├── index.ts        # diccionarios de interfaz
    │   └── legal.ts        # textos legales       ← reemplazar y revisar
    ├── layouts/BaseLayout.astro
    ├── pages/[lang]/       # rutas bilingües + /404
    └── styles/             # hojas por componente (Tailwind v4 con @apply)
```

## Rutas

- `/` redirige a `/es` (configurado en `astro.config.mjs`).
- Cada página existe en `/es/...` y `/en/...`, con `canonical` y `hreflang` alternos.
- El Aviso de privacidad y los Términos y Condiciones se abren en modal desde el pie de página (no tienen URL propia).

## SEO

`BaseLayout.astro` emite por página: `canonical`, `hreflang` (es/en/x-default),
Open Graph, Twitter Card, `theme-color`, favicons, manifest y JSON-LD
`LocalBusiness` generado desde `src/data/site.ts`. El sitemap lo genera
`@astrojs/sitemap`; `public/robots.txt` lo referencia.

## Accesibilidad

- Un único anillo de foco visible por componente interactivo (`:focus-visible`).
- Los iconos decorativos usan `alt=""` + `aria-hidden="true"`.
- El modal legal cierra con `Escape`, mueve el foco al abrir y lo restaura al cerrar.

## Nota sobre el formulario

El formulario de contacto es estático: compone un `mailto:` y abre el cliente de correo
del visitante. **No hay backend, base de datos ni envío de datos por el sitio**, por lo que
no se requieren cookies ni banner de consentimiento. Si más adelante se añade un backend,
hay que actualizar el aviso de privacidad y añadir el banner correspondiente.
