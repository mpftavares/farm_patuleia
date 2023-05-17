import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="footer light-background padding radius">
			<article>
				<Link to="/contacts">
					<h1>
						Localização{' '}
						<span className="material-symbols-outlined footer-icon">
							location_on
						</span>
					</h1>
				</Link>
				<p>Alameda das Linhas de Torres 262-A</p>
				<p>1750-152 Lisboa</p>
			</article>
			<article>
				<h1>
					Horário{' '}
					<span className="material-symbols-outlined footer-icon">
						schedule
					</span>
				</h1>
				<p>2ª a 6ª feira das 9h00 às 13h00 e das 13h45 às 20h00</p>
				<p>Sábados das 9h00 às 13h00</p>
			</article>
			<article>
				<Link to="/contacts">
					<h1>
						Contacto{' '}
						<span className="material-symbols-outlined footer-icon">call</span>
					</h1>
				</Link>
				<p>
					Telefone: <a href="tel:21 752 4103">21 752 4103</a>
				</p>
				<p>(Chamada Rede Fixa Nacional)</p>
			</article>
		</footer>
	);
}