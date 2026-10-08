/**
 * CONTENIDO PENDIENTE DE DEFINIR POR EL NEGOCIO.
 *
 * A diferencia del resto de datos del sitio, aquí NO se incluyen valores de
 * ejemplo: una cifra, un testimonio o una certificación inventados son
 * publicidad engañosa. Mientras estos arreglos estén vacíos, los componentes
 * que los consumen muestran un aviso visible en lugar de contenido ficticio.
 *
 * Para activarlos, reemplaza los arreglos por los datos reales.
 */

export interface Stat {
	value: string;
	label: string;
}

export interface Credential {
	title: string;
	text: string;
}

export interface Testimonial {
	quote: string;
	author: string;
	role?: string;
	project?: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface CoverageArea {
	area: string;
	detail?: string;
}

export interface Guarantee {
	title: string;
	text: string;
}

/** Cifras destacadas: años de experiencia, obras entregadas, clientes, etc. */
export const STATS: Stat[] = [];

/** Licencias, certificaciones, seguros y credenciales verificables. */
export const CREDENTIALS: Credential[] = [];

/** Testimonios de clientes, con nombre y, opcionalmente, cargo y proyecto. */
export const TESTIMONIALS: Testimonial[] = [];

/** Preguntas frecuentes. Responderlas también mejora el SEO y reduce la fricción. */
export const FAQ: FaqItem[] = [];

/** Zonas donde la empresa presta servicio. */
export const COVERAGE: CoverageArea[] = [];

/** Garantías ofrecidas y, si aplica, condiciones de financiamiento. */
export const GUARANTEES: Guarantee[] = [];
