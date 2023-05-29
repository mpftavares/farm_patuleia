import { useEffect } from 'react';
import HomeBanner from '../components/home/HomeBanner';
import Highlights from '../components/home/Highlights';
import Open from '../components/status/Open';
import Closed from '../components/status/Closed';
import Facebook from '../components/contacts/Facebook';
import StaticMap from '../components/maps/StaticMap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Home';
	}, []);

	const isPharmacyOpen = useSelector((state) => state.status.isOpen);

	return (
		<>
			{isPharmacyOpen ? (
				<div className="open-home-grid flex-col">
					<Link to="/contacts">
						<Open />
					</Link>

					<div className="hide-mobile">
						<HomeBanner />
					</div>

					<section className="flex-laptop">
						<Highlights />
						<div className="flex-col">
							<StaticMap />
							<Facebook />
						</div>
					</section>
				</div>
			) : (
				<div className="closed-home-grid flex-col">
					<div className="hide-mobile">
						<HomeBanner />
					</div>
					<Highlights />

					<section className="flex-laptop">
						<div className="flex-col">
							<Closed />
							<div className="show-laptop">
								<Facebook />
							</div>
						</div>
						<StaticMap />
						<div className="hide-laptop">
							<Facebook />
						</div>
					</section>
				</div>
			)}
		</>
	);
}
