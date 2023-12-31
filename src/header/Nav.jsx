import { NavLink } from 'react-router-dom';

export default function Nav({ onClick, className }) {
	return (
		<nav
			className={className}
			onClick={onClick}>
			<NavLink to="/home">Home</NavLink>
			<NavLink to="/services">Serviços</NavLink>
			<NavLink to="/mapa">MAPA 48h</NavLink>
			<NavLink to="/sales">Promoções</NavLink>
			<NavLink to="/contacts">Contacto</NavLink>
		</nav>
	);
}
