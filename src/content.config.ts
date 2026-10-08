import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const productSchema = z.object({
	title: z.string(),
	description: z.string(),
	// Rutas derivadas de la carpeta: {marca}/{linea}/{slug}
	marca: z.string(),
	linea: z.string(),
});

const serviceSchema = z.object({
	title: z.string(),
	description: z.string(),
});

const products = defineCollection({
	loader: glob({ base: './src/content/products/es', pattern: '**/*.md' }),
	schema: productSchema,
});

const productsEn = defineCollection({
	loader: glob({ base: './src/content/products/en', pattern: '**/*.md' }),
	schema: productSchema,
});

const services = defineCollection({
	loader: glob({ base: './src/content/services/es', pattern: '**/*.md' }),
	schema: serviceSchema,
});

const servicesEn = defineCollection({
	loader: glob({ base: './src/content/services/en', pattern: '**/*.md' }),
	schema: serviceSchema,
});

export const collections = { products, productsEn, services, servicesEn };