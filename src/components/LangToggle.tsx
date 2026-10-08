// Enlace de cambio de idioma (island React montada en Header.astro): apunta a
// la misma ruta en el otro locale via altLocaleHref.
import { FiGlobe } from 'react-icons/fi';

interface Props {
	href: string;
	label: string;
	ariaLabel: string;
}

export default function LangToggle({ href, label, ariaLabel }: Props) {
	return (
		<a className="header__toggle header__toggle--lang" href={href} aria-label={ariaLabel}>
			<FiGlobe className="header__toggle-icon" />
			<span>{label}</span>
		</a>
	);
}