// Lista de navegacion principal (island React montada en Header.astro).
// isActive ignora el prefijo /es|/en para comparar rutas; cada enlace lleva su
// icono react-icons y aria-current="page" cuando corresponde.
import type { ComponentType } from 'react';
import { FiHome, FiUsers, FiPackage, FiTool } from 'react-icons/fi';
import { FaHardHat } from 'react-icons/fa';
import { NAV } from '../data/site';
import { href } from '../i18n';
import type { Locale } from '../i18n';

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
	inicio: FiHome,
	nosotros: FiUsers,
	construccion: FaHardHat,
	productos: FiPackage,
	servicios: FiTool,
};

function stripLang(path: string): string {
	return path.replace(/^\/(es|en)(?=\/|$)/, '') || '/';
}

function isActive(pathname: string, itemHref: string): boolean {
	const path = stripLang(pathname);
	const linkPath = stripLang(itemHref);
	if (linkPath === '/') return path === '/';
	return path === linkPath || path.startsWith(linkPath + '/');
}

interface Props {
	lang: Locale;
	pathname: string;
	labels: Record<string, string>;
}

export default function HeaderNav({ lang, pathname, labels }: Props) {
	return (
		<ul className="nav__list">
			{NAV.map((item) => {
				const Icon = ICONS[item.key];
				const label = labels[item.key];
				const linkHref = href(item.href, lang);
				const active = isActive(pathname, linkHref);
				return (
					<li
						key={item.key}
						className={`nav__item${active ? ' nav__item--active' : ''}`}
					>
						<a
							className={`nav__link group${active ? ' nav__link--active' : ''}`}
							href={linkHref}
							aria-label={label}
							aria-current={active ? 'page' : undefined}
						>
							<Icon className="nav__icon" />
							<span className="nav__text">{label}</span>
						</a>
					</li>
				);
			})}
			<div className="nav__indicator" aria-hidden="true" />
		</ul>
	);
}

