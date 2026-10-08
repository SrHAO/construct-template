import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { SITE_URL } from '../data/site';
import { privacyEn, privacyEs, termsEn, termsEs } from './legal';

export type Locale = 'es' | 'en';
export const DEFAULT_LOCALE: Locale = 'es';

export function getLang(params: Record<string, string | undefined>): Locale {
	return params?.lang === 'en' ? 'en' : 'es';
}

export function href(path: string, lang: Locale): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `/${lang}${normalized}`;
}

export function altLocaleHref(pathname: string, currentLang: Locale): string {
	const other: Locale = currentLang === 'es' ? 'en' : 'es';
	const withoutLocale = pathname.replace(/^\/(es|en)(?=\/|$)/, '');
	const rest = withoutLocale || '/';
	return `/${other}${rest === '/' ? '' : rest}`;
}

export const es = {
	site: {
		brand: 'Constru Construcciones',
		url: SITE_URL,
		description:
			'Plantilla de sitio web para empresa de construcción: productos, servicios y contacto.',
	},
	nav: {
		ariaLabel: 'Menú principal',
		labels: {
			inicio: 'Inicio',
			nosotros: 'Nosotros',
			construccion: 'Construcción',
			productos: 'Productos',
			servicios: 'Servicios',
		},
	},
	lang: {
		toggleLabel: 'Cambiar a inglés',
		label: 'EN',
	},
	theme: {
		toLightLabel: 'Cambiar a modo claro',
		toDarkLabel: 'Cambiar a modo oscuro',
	},
	scrollTop: 'Volver arriba',
	common: {
		cotizaWhatsapp: 'Cotiza por WhatsApp',
		escribenosWhatsapp: 'Escríbenos por WhatsApp',
		verProductos: 'Ver productos',
		verTodosServicios: 'Ver todos los servicios',
		verCatalogoCompleto: 'Ver catálogo completo',
		verCatalogoYLineas: 'Ver líneas y productos',
		contactanos: 'Contáctanos',
		whatsapp: 'WhatsApp',
		cotizarAhora: 'Cotizar ahora',
		cotizarProducto: 'Cotizar producto',
		consultarInventario: 'Consultar inventario',
		chatearWhatsapp: 'Chatear por WhatsApp',
		enviarCorreo: 'Enviar correo',
		verServicio: 'Ver servicio',
		solicitarCotizacion: 'Solicitar cotización',
		cotizaciones: 'Consultas',
		verProductosFlecha: 'Ver productos →',
		verMas: 'Ver más',
	},
	carousel: {
		prev: 'Anterior',
		next: 'Siguiente',
		goto: (n: number) => `Ir al servicio ${n}`,
	},
	otrosServicios: {
		goto: (n: number) => `Ver la categoría ${n}`,
		waIntro: (item: string) => `Me interesa el servicio de ${item}`,
		groups: [
			{
				id: 'dictamenes',
				label: 'Dictámenes',
				items: [
					'Dictámenes estructurales',
					'Dictámenes de seguridad industrial',
					'Peritajes y dictámenes de daños',
				],
			},
			{
				id: 'asesoria',
				label: 'Asesoría técnica',
				items: ['Supervisión de obra', 'Estudios de suelo', 'Compatibilización de proyectos'],
			},
			{
				id: 'instalaciones',
				label: 'Instalaciones y oficios',
				items: [
					'Electricidad',
					'Albañilería',
					'Herrería',
					'Aluminio y cancelería',
					'Aire acondicionado',
				],
			},
		],
	},
	cta: {
		label: 'Cotiza',
	},
	waFloat: {
		ariaLabel: 'Escríbenos por WhatsApp',
	},
	breadcrumbs: {
		ariaLabel: 'Ruta de navegación',
		inicio: 'Inicio',
		productos: 'Productos',
		servicios: 'Servicios',
	},
	map: {
		title: 'Ubicación de la empresa',
		directions: 'Cómo llegar en Google Maps',
	},
	hero: {
		kicker: 'Construcción y suministro',
		titleBefore: 'Fuerza que',
		titleAccent: 'construye',
		titleAfter: 'proyectos',
		subtitle:
			'Somos especialistas en obra civil, suministro de materiales y servicios de construcción con calidad certificada.',
		stats: [
			{ number: '+25', label: 'Años de experiencia' },
			{ number: '+100', label: 'Proyectos entregados' },
			{ number: '3', label: 'Marcas distribuidas' },
		],
		placeholder: 'Imagen destacada (placeholder)',
	},
	footer: {
		contactoExpress: 'Contacto Express',
		contactanos: 'Contáctanos y Síguenos',
		createdBy: 'Creado por',
		facebookAria: 'Facebook',
		whatsappAria: 'WhatsApp',
		gmailAria: 'Enviar correo',
		logoAria: 'Portfolio del creador',
		contactCreator: 'Contactar al creador',
		rights: (year: number, company: string) =>
			`© ${year} ${company}. Todos los derechos reservados.`,
	},
	privacy: privacyEs,
	terms: termsEs,
	notFound: {
		title: 'Página no encontrada',
		lead: 'La página que buscas no existe o cambió de dirección. Te dejamos algunos atajos para que sigas navegando.',
		backHome: 'Ir al inicio',
		helpTitle: 'O continúa por aquí',
	},
	trust: {
		pending: 'Contenido pendiente de completar',
		pendingHint:
			'Esta sección se oculta en cuanto cargas los datos reales en src/data/trust.ts. No mostramos cifras, testimonios ni certificaciones de ejemplo para no publicar información engañosa.',
		credentials: {
			kicker: 'Confianza',
			title: 'Credenciales y certificaciones',
			subtitle: 'Documenta aquí las licencias, certificaciones y seguros que respaldan tu trabajo.',
		},
		testimonials: {
			kicker: 'Testimonios',
			title: 'Lo que dicen nuestros clientes',
			subtitle: 'Publica reseñas verificables de obras y clientes reales.',
		},
		faq: {
			kicker: 'Preguntas frecuentes',
			title: 'Dudas antes de contratar',
			subtitle: 'Aclara los puntos que más detienen a un cliente antes de solicitar una cotización.',
		},
		coverage: {
			kicker: 'Cobertura',
			title: 'Zonas donde trabajamos',
			subtitle: 'Indica las zonas en las que la empresa presta servicio y si hay condiciones o costos especiales.',
			hoursLabel: 'Horario de atención',
			weekdays: 'Lunes a viernes',
			saturday: 'Sábado',
			sunday: 'Domingo',
			closed: 'Cerrado',
			note: 'Para confirmar disponibilidad en tu zona, contacta a',
		},
		guarantees: {
			kicker: 'Compromiso',
			title: 'Garantías y formas de pago',
			subtitle: 'Aclara qué cubre la garantía, su vigencia y qué opciones de financiamiento manejas.',
		},
	},
	home: {
		servicios: {
			kicker: 'Qué hacemos',
			title: 'Nuestros servicios',
			subtitle:
				'Soluciones integrales de construcción y obra civil para proyectos residenciales, comerciales e industriales.',
		},
		productos: {
			kicker: 'Catálogo',
			title: 'Productos destacados',
			subtitle:
				'Los productos más solicitados de nuestras marcas distribuidas, listos para cotizar.',
		},
		marcas: {
			kicker: 'Distribución',
			title: 'Marcas con las que trabajamos',
			subtitle:
				'Trabajamos con marcas de calidad certificada para garantizar los mejores resultados en tu obra.',
		},
		construccion: {
			kicker: 'Construcción',
			titleBefore: 'Tu proyecto,',
			titleAccent: 'diseñado para durar',
			text: 'Ofrecemos ejecución de obra civil con estándares de calidad certificada: cimentaciones, estructuras y acabados entregados llave en mano.',
			ctaConoce: 'Conoce nuestro trabajo',
		},
		placeholderImagen: 'Imagen de construcción (placeholder)',
		final: {
			title: '¿Listo para iniciar tu proyecto?',
			text: 'Contáctanos y recibe una cotización sin compromiso para tu próxima construcción.',
		},
	},
	nosotros: {
		title: 'Nosotros',
		pageTitle: 'Nosotros',
		lead: (company: string) =>
			`${company} es una empresa dedicada a la construcción, suministro de materiales y servicios de obra civil con más de 25 años de experiencia.`,
		quienesSomos: {
			kicker: 'Nuestra empresa',
			title: 'Quiénes somos',
			subtitle: 'Texto de ejemplo reemplazable al personalizar la plantilla.',
		},
		parrafos: [
			'Contamos con un equipo de ingenieros, técnicos y personal calificado capaz de atender proyectos de cualquier magnitud.',
			'Distribuimos tres marcas de productos de calidad certificada y brindamos servicios de construcción llave en mano.',
			'Este contenido es de ejemplo; reemplázalo con la historia real de tu empresa.',
		],
		placeholderImagen: 'Imagen corporativa (placeholder)',
		valores: {
			kicker: 'Nuestros valores',
			title: 'Lo que nos distingue',
			items: [
				{ title: 'Calidad certificada', text: 'Productos y obra con los más altos estándares.' },
				{ title: 'Compromiso', text: 'Entregas puntuales y precios justos.' },
				{ title: 'Experiencia', text: 'Más de 25 años respaldan cada proyecto.' },
			],
		},
		trabajemos: {
			kicker: 'Trabajemos juntos',
			title: '¿Hablamos de tu proyecto?',
			subtitle: 'Cuéntanos qué necesitas y te asesoramos sin compromiso.',
		},
	},
	construccion: {
		title: 'Construcción',
		lead: 'Ejecutamos proyectos de obra civil y construcción con equipo propio, experiencia y respaldo de marcas certificadas.',
		servicios: {
			kicker: 'Servicios de obra',
			title: 'Lo que construimos',
			subtitle: 'Todos nuestros servicios se entregan con compromiso de calidad y tiempos pactados.',
		},
		metodologia: {
			kicker: 'Metodología',
			title: 'Nuestro proceso de trabajo',
			stepPrefix: 'Paso',
			steps: [
				'Planeación',
				'Ejecución',
				'Control de calidad',
				'Entrega llave en mano',
			],
		},
		obras: {
			kicker: 'Obras',
			title: 'Algunos de nuestros proyectos',
			placeholder: (i: number) => `Proyecto ${i} (placeholder)`,
		},
		final: {
			title: '¿Tienes una obra en mente?',
			text: (company: string) =>
				`Cotiza tu proyecto con ${company} y recibe una propuesta a la medida.`,
		},
	},
	servicios: {
		title: 'Servicios',
		lead: 'Brindamos servicios de construcción y obra civil con calidad certificada y personal calificado.',
		soluciones: {
			kicker: 'Nuestros servicios',
			title: 'Soluciones para tu obra',
		},
		detalle: {
			title: '¿Te interesa este servicio?',
			text: 'Recibe una cotización sin compromiso por WhatsApp.',
			otros: 'Otros servicios',
		},
	},
	contacto: {
		title: 'Contacto',
		lead: 'Escríbenos por WhatsApp, correo o mediante el formulario y te atenderemos a la brevedad.',
		expressKicker: 'Contacto Express',
		enviarTitulo: 'Envíanos un mensaje',
		formText: 'Completa el formulario y se abrirá WhatsApp con tu mensaje listo para enviar.',
		tel: 'Tel:',
		telAlterno: 'Tel. alterno:',
	},
	contactForm: {
		nombre: 'Nombre',
		nombrePlaceholder: 'Tu nombre',
		correo: 'Correo',
		correoPlaceholder: 'tucorreo@ejemplo.mx',
		mensaje: 'Mensaje',
		mensajePlaceholder: 'Cuéntanos sobre tu proyecto...',
		enviar: 'Enviar',
		mailSubject: 'Consulta desde el sitio web',
		waIntro: 'Hola, soy',
	},
	productos: {
		title: 'Productos',
		lead: 'Distribuimos marcas de calidad certificada para la industria de la construcción. Explora el catálogo por marca.',
		marcas: {
			kicker: 'Nuestras marcas',
			title: 'Catálogo por marca',
			subtitle: 'Haz clic en una marca para ver sus líneas y productos.',
		},
		garantia: {
			kicker: 'Garantía',
			title: 'Calidad certificada',
			subtitle:
				'Todos los productos que distribuimos cumplen estándares internacionales de calidad.',
		},
		lista: {
			kicker: 'Catálogo',
			title: 'Productos y líneas',
			subtitle:
				'Una selección representativa de nuestro catálogo por marca, lista para cotizar.',
		},
		certificaciones: ['ISO 9001', 'ISO 14001', 'Certificación CM', 'Calidad certificada'],
	},
	producto: {
		detalle: {
			title: '¿Te interesa este producto?',
			text: 'Escríbenos por WhatsApp y enviamos tu cotización a la brevedad.',
			relacionados: 'Productos relacionados',
		},
	},
	catalog: {
		marca: (slug: string) => {
			const marcas: Record<string, { label: string; description: string }> = {
				'marca-1': {
					label: 'Ternium',
					description:
						'Líder en la fabricación de aceros planos y largos para la construcción en México y América Latina: lámina, placa y varilla de alta resistencia.',
				},
				'marca-2': {
					label: 'Cemex',
					description:
						'Productor global de materiales para la construcción: cementos, concreto premezclado y soluciones para edificación y obra pública.',
				},
				'marca-3': {
					label: 'Construrama',
					description:
						'Red de tiendas de materiales para la construcción con la mayor cobertura en México: de obra negra a acabados.',
				},
			};
			return marcas[slug] ?? marcas['marca-1'];
		},
		linea: (marca: string, slug: string) => {
			const lineas: Record<
				string,
				Record<string, { label: string; description: string }>
			> = {
				'marca-1': {
					'linea-1': {
						label: 'Aceros estructurales',
						description:
							'Placa, vigas y perfiles de acero para estructuras de gran resistencia.',
					},
					'linea-2': {
						label: 'Láminas y recubiertos',
						description: 'Lámina de acero para techados, muros y fachadas.',
					},
				},
				'marca-2': {
					'linea-1': {
						label: 'Cementos',
						description: 'Cementos Portland compuestos para uso general y especial.',
					},
					'linea-2': {
						label: 'Concreto y morteros',
						description: 'Concreto premezclado y morteros listos para obra.',
					},
				},
				'marca-3': {
					'linea-1': {
						label: 'Obra negra',
						description: 'Materiales básicos para muros, cimentaciones y estructuras.',
					},
					'linea-2': {
						label: 'Acabados',
						description: 'Productos para acabados, protección y mantenimiento.',
					},
				},
			};
			return lineas[marca]?.[slug] ?? { label: slug, description: '' };
		},
	},
	whatsapp: {
		message: 'Hola, quiero información.',
		productMessage: (product: string) => `Hola, quiero información del producto ${product}.`,
	},
};

export const en: typeof es = {
site: {
		brand: 'Constru Construcciones',
		url: SITE_URL,
		description:
			'Templated website for a construction company: products, services and contact.',
	},
	nav: {
		ariaLabel: 'Main menu',
		labels: {
			inicio: 'Home',
			nosotros: 'About',
			construccion: 'Construction',
			productos: 'Products',
			servicios: 'Services',
		},
	},
	lang: {
		toggleLabel: 'Switch to Spanish',
		label: 'ES',
	},
	theme: {
		toLightLabel: 'Switch to light mode',
		toDarkLabel: 'Switch to dark mode',
	},
	scrollTop: 'Back to top',
	common: {
		cotizaWhatsapp: 'Quote on WhatsApp',
		escribenosWhatsapp: 'Message us on WhatsApp',
		verProductos: 'View products',
		verTodosServicios: 'View all services',
		verCatalogoCompleto: 'View full catalog',
		verCatalogoYLineas: 'View lines and products',
		contactanos: 'Contact us',
		whatsapp: 'WhatsApp',
		cotizarAhora: 'Quote now',
		cotizarProducto: 'Quote product',
		consultarInventario: 'Check inventory',
		chatearWhatsapp: 'Chat on WhatsApp',
		enviarCorreo: 'Send email',
		verServicio: 'View service',
		solicitarCotizacion: 'Request a quote',
		cotizaciones: 'Inquiries',
		verProductosFlecha: 'View products →',
		verMas: 'See more',
	},
	carousel: {
		prev: 'Previous',
		next: 'Next',
		goto: (n: number) => `Go to service ${n}`,
	},
	otrosServicios: {
		goto: (n: number) => `Go to category ${n}`,
		waIntro: (item: string) => `I'm interested in ${item}`,
		groups: [
			{
				id: 'dictamenes',
				label: 'Assessments',
				items: [
					'Structural assessments',
					'Industrial safety assessments',
					'Expertise and damage assessments',
				],
			},
			{
				id: 'asesoria',
				label: 'Technical consulting',
				items: ['Site supervision', 'Soil studies', 'Project compatibility studies'],
			},
			{
				id: 'instalaciones',
				label: 'Installations and trades',
				items: [
					'Electrical work',
					'Masonry',
					'Metalwork',
					'Aluminum and glazing',
					'Air conditioning',
				],
			},
		],
	},
	cta: {
		label: 'Quote',
	},
	waFloat: {
		ariaLabel: 'Message us on WhatsApp',
	},
	breadcrumbs: {
		ariaLabel: 'Breadcrumb navigation',
		inicio: 'Home',
		productos: 'Products',
		servicios: 'Services',
	},
	map: {
		title: 'Company location',
		directions: 'Get directions on Google Maps',
	},
	hero: {
		kicker: 'Construction & supply',
		titleBefore: 'Strength that',
		titleAccent: 'builds',
		titleAfter: 'projects',
		subtitle:
			'We are specialists in civil works, materials supply and construction services with certified quality.',
		stats: [
			{ number: '+25', label: 'Years of experience' },
			{ number: '+100', label: 'Projects delivered' },
			{ number: '3', label: 'Brands distributed' },
		],
		placeholder: 'Featured image (placeholder)',
	},
	footer: {
		contactoExpress: 'Express Contact',
		contactanos: 'Contact and follow us',
		createdBy: 'Created by',
		facebookAria: 'Facebook',
		whatsappAria: 'WhatsApp',
		gmailAria: 'Send an email',
		logoAria: 'Creator portfolio',
		contactCreator: 'Contact the creator',
		rights: (year: number, company: string) =>
			`© ${year} ${company}. All rights reserved.`,
	},
	privacy: privacyEn,
	terms: termsEn,
	notFound: {
		title: 'Page not found',
		lead: 'The page you are looking for does not exist or has moved. Here are some shortcuts to keep browsing.',
		backHome: 'Go to homepage',
		helpTitle: 'Or continue from here',
	},
	trust: {
		pending: 'Content pending',
		pendingHint:
			'This section disappears as soon as you load the real data in src/data/trust.ts. We do not show sample figures, testimonials or certifications, because publishing invented claims would be misleading.',
		credentials: {
			kicker: 'Trust',
			title: 'Credentials and certifications',
			subtitle: 'Document here the licences, certifications and insurance policies that back your work.',
		},
		testimonials: {
			kicker: 'Testimonials',
			title: 'What our clients say',
			subtitle: 'Publish verifiable reviews of real projects and real clients.',
		},
		faq: {
			kicker: 'Frequently asked questions',
			title: 'Doubts before hiring',
			subtitle: 'Clarify the issues that most often hold a client back before requesting a quote.',
		},
		coverage: {
			kicker: 'Coverage',
			title: 'Areas where we work',
			subtitle: 'List the areas where the company provides service, and any special conditions or costs.',
			hoursLabel: 'Opening hours',
			weekdays: 'Monday to Friday',
			saturday: 'Saturday',
			sunday: 'Sunday',
			closed: 'Closed',
			note: 'To confirm availability in your area, contact',
		},
		guarantees: {
			kicker: 'Commitment',
			title: 'Warranties and payment options',
			subtitle: 'Clarify what the warranty covers, how long it lasts and which financing options you offer.',
		},
	},
	home: {
		servicios: {
			kicker: 'What we do',
			title: 'Our services',
			subtitle:
				'Comprehensive construction and civil works solutions for residential, commercial and industrial projects.',
		},
		productos: {
			kicker: 'Catalog',
			title: 'Featured products',
			subtitle:
				'The most requested products from our distributed brands, ready to quote.',
		},
		marcas: {
			kicker: 'Distribution',
			title: 'Brands we work with',
			subtitle:
				'We work with certified quality brands to guarantee the best results for your project.',
		},
		construccion: {
			kicker: 'Construction',
			titleBefore: 'Your project,',
			titleAccent: 'built to last',
			text: 'We deliver civil works with certified quality standards: foundations, structures and finishes delivered turnkey.',
			ctaConoce: 'See our work',
		},
		placeholderImagen: 'Construction image (placeholder)',
		final: {
			title: 'Ready to start your project?',
			text: 'Contact us and get a no-obligation quote for your next construction.',
		},
	},
	nosotros: {
		title: 'About',
		pageTitle: 'About us',
		lead: (company: string) =>
			`${company} is a company dedicated to construction, materials supply and civil works services with over 25 years of experience.`,
		quienesSomos: {
			kicker: 'Our company',
			title: 'Who we are',
			subtitle: 'Sample text, replace it when customizing the template.',
		},
		parrafos: [
			'Our team of engineers, technicians and qualified staff can handle projects of any size.',
			'We distribute three brands of certified quality products and provide turnkey construction services.',
			'This content is an example; replace it with your company’s real story.',
		],
		placeholderImagen: 'Corporate image (placeholder)',
		valores: {
			kicker: 'Our values',
			title: 'What sets us apart',
			items: [
				{ title: 'Certified quality', text: 'Products and work with the highest standards.' },
				{ title: 'Commitment', text: 'On-time delivery and fair prices.' },
				{ title: 'Experience', text: 'Over 25 years behind every project.' },
			],
		},
		trabajemos: {
			kicker: 'Let’s work together',
			title: 'Shall we talk about your project?',
			subtitle: 'Tell us what you need and we will advise you with no commitment.',
		},
	},
	construccion: {
		title: 'Construction',
		lead: 'We carry out civil works and construction projects with our own equipment, experience and certified brand support.',
		servicios: {
			kicker: 'Works services',
			title: 'What we build',
			subtitle: 'All our services are delivered with quality commitment and agreed timelines.',
		},
		metodologia: {
			kicker: 'Methodology',
			title: 'Our working process',
			stepPrefix: 'Step',
			steps: ['Planning', 'Execution', 'Quality control', 'Turnkey delivery'],
		},
		obras: {
			kicker: 'Works',
			title: 'Some of our projects',
			placeholder: (i: number) => `Project ${i} (placeholder)`,
		},
		final: {
			title: 'Do you have a project in mind?',
			text: (company: string) =>
				`Quote your project with ${company} and get a tailored proposal.`,
		},
	},
	servicios: {
		title: 'Services',
		lead: 'We provide construction and civil works services with certified quality and qualified staff.',
		soluciones: {
			kicker: 'Our services',
			title: 'Solutions for your project',
		},
		detalle: {
			title: 'Interested in this service?',
			text: 'Get a no-obligation quote on WhatsApp.',
			otros: 'Other services',
		},
	},
	contacto: {
		title: 'Contact',
		lead: 'Message us on WhatsApp, email or through the form and we will get back to you shortly.',
		expressKicker: 'Express Contact',
		enviarTitulo: 'Send us a message',
		formText: 'Fill out the form and WhatsApp will open with your message ready to send.',
		tel: 'Tel:',
		telAlterno: 'Alt. phone:',
	},
	contactForm: {
		nombre: 'Name',
		nombrePlaceholder: 'Your name',
		correo: 'Email',
		correoPlaceholder: 'yourmail@ejemplo.mx',
		mensaje: 'Message',
		mensajePlaceholder: 'Tell us about your project...',
		enviar: 'Send',
		mailSubject: 'Website inquiry',
		waIntro: 'Hello, I am',
	},
	productos: {
		title: 'Products',
		lead: 'We distribute certified quality brands for the construction industry. Explore the catalog by brand.',
		marcas: {
			kicker: 'Our brands',
			title: 'Catalog by brand',
			subtitle: 'Click a brand to see its lines and products.',
		},
		garantia: {
			kicker: 'Warranty',
			title: 'Certified quality',
			subtitle: 'All the products we distribute meet international quality standards.',
		},
		lista: {
			kicker: 'Catalog',
			title: 'Products and lines',
			subtitle:
				'A representative selection from our catalog by brand, ready to quote.',
		},
		certificaciones: ['ISO 9001', 'ISO 14001', 'CM Certification', 'Certified quality'],
	},
	producto: {
		detalle: {
			title: 'Interested in this product?',
			text: 'Message us on WhatsApp and we will send your quote shortly.',
			relacionados: 'Related products',
		},
	},
	catalog: {
		marca: (slug: string) => {
			const marcas: Record<string, { label: string; description: string }> = {
				'marca-1': {
					label: 'Ternium',
					description:
						'Leader in flat and long steel products for construction in Mexico and Latin America: high-strength sheet, plate and rebar.',
				},
				'marca-2': {
					label: 'Cemex',
					description:
						'Global producer of construction materials: cements, ready-mix concrete and solutions for buildings and public works.',
				},
				'marca-3': {
					label: 'Construrama',
					description:
						'Chain of construction material stores with the widest coverage in Mexico: from rough construction to finishes.',
				},
			};
			return marcas[slug] ?? marcas['marca-1'];
		},
		linea: (marca: string, slug: string) => {
			const lineas: Record<
				string,
				Record<string, { label: string; description: string }>
			> = {
				'marca-1': {
					'linea-1': {
						label: 'Structural steels',
						description: 'Steel plate, beams and profiles for high-strength structures.',
					},
					'linea-2': {
						label: 'Sheets and coatings',
						description: 'Steel sheet for roofing, walls and facades.',
					},
				},
				'marca-2': {
					'linea-1': {
						label: 'Cements',
						description: 'Blended Portland cements for general and specialty use.',
					},
					'linea-2': {
						label: 'Concrete and mortars',
						description: 'Ready-mix concrete and mortars for construction.',
					},
				},
				'marca-3': {
					'linea-1': {
						label: 'Rough construction',
						description: 'Basic materials for walls, foundations and structures.',
					},
					'linea-2': {
						label: 'Finishes',
						description: 'Products for finishing, protection and maintenance.',
					},
				},
			};
			return lineas[marca]?.[slug] ?? { label: slug, description: '' };
		},
	},
	whatsapp: {
		message: 'Hello, I would like some information.',
		productMessage: (product: string) => `Hello, I would like information about the product ${product}.`,
	},
};

export const dictionaries = { es, en };

export function t(lang: Locale): typeof es {
	return lang === 'en' ? en : es;
}

export type ProductEntry = CollectionEntry<'products' | 'productsEn'>;
export type ServiceEntry = CollectionEntry<'services' | 'servicesEn'>;

export async function getProducts(lang: Locale): Promise<ProductEntry[]> {
	return getCollection(lang === 'en' ? 'productsEn' : 'products') as unknown as Promise<
		ProductEntry[]
	>;
}

export async function getServices(lang: Locale): Promise<ServiceEntry[]> {
	return getCollection(lang === 'en' ? 'servicesEn' : 'services') as unknown as Promise<
		ServiceEntry[]
	>;
}
