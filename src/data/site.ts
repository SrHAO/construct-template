/**
 * DATOS DE EJEMPLO.
 * La razón social, el RFC, el domicilio, el teléfono, el correo y el dominio de
 * este archivo son ficticios y sirven únicamente para ilustrar la plantilla.
 * Deben sustituirse por los datos reales de la empresa antes de publicar el sitio.
 */
export const SITE_TITLE = 'Constru Construcciones';
export const SITE_DESCRIPTION =
	'Plantilla de sitio web para empresa de construcción: productos, servicios y contacto.';

export const SITE_URL = 'https://constru-demo.mx';

export const COMPANY = {
	name: 'Constru Construcciones',
	legalName: 'Constru Construcciones, S.A. de C.V.',
	rfc: 'COC250315QR4',
	slogan: 'Fuerza que construye',
	founded: '1999',
	portfolioUrl: 'https://profile-6f2l1yjbp-srhaostar-5261s-projects.vercel.app/',
	openingHours: 'Mo-Fr 08:00-17:00, Sa 08:00-13:00',
	areaServed: ['Ciudad de México', 'Estado de México'],
	geo: { lat: 19.49, lng: -99.16 },
};

export const PHONE = {
	display: '55 1234 5678',
	link: 'tel:+525512345678',
};

export const PHONE_ALT = {
	display: '55 9876 5432',
	link: 'tel:+525598765432',
};

export const WHATSAPP = {
	number: '525512345678',
	url: 'https://wa.me/525512345678',
};

export const EMAIL = {
	display: 'contacto@constru-demo.mx',
	address: 'contacto@constru-demo.mx',
	link: 'mailto:contacto@constru-demo.mx',
	privacy: 'privacidad@constru-demo.mx',
};

export const ADDRESS = {
	line1: 'Lote 14, Camino Real a San Antonio s/n',
	line2: 'Col. Zona Industrial Vallejo, Alcaldía Azcapotzalco, CDMX, CP 02300',
	country: 'México',
};

/**
 * Ruta de Google Maps hacia la empresa. Se omite `origin` a proposito: al no
 * indicarlo, Google usa la ubicacion actual del usuario, que es lo que busca
 * quien hace clic. Formato documentado en
 * https://developers.google.com/maps/documentation/urls/get-started
 * El destino se arma desde ADDRESS, asi el link sigue al domicilio si cambia.
 */
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
	`${ADDRESS.line1}, ${ADDRESS.line2}, ${ADDRESS.country}`
)}`;

export const SOCIAL = {
	facebook: 'https://www.facebook.com/ejemplo-mx',
};

export type NavKey = 'inicio' | 'nosotros' | 'construccion' | 'productos' | 'servicios';
export type NavItem = { key: NavKey; href: string };
export const NAV: NavItem[] = [
	{ key: 'inicio', href: '/' },
	{ key: 'nosotros', href: '/nosotros' },
	{ key: 'construccion', href: '/construccion' },
	{ key: 'productos', href: '/productos' },
	{ key: 'servicios', href: '/servicios' },
];

export const CATALOG = {
	marcas: [
		{ slug: 'marca-1', logo: '/Ternium.svg' },
		{ slug: 'marca-2', logo: '/Cemex.svg' },
		{ slug: 'marca-3', logo: '/construrama-seeklogo.svg' },
	],
	lineas: [{ slug: 'linea-1' }, { slug: 'linea-2' }],
};

export const HOME_FEATURED_COUNT = 6;
export const PRODUCTS_PAGE_COUNT = 9;