import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeNav, hamburgerClick } from './headerSlice';
import Hamburger from './components/Hamburger';
import Nav from './components/Nav';

export default function Header() {
	let dispatch = useDispatch();

	const icon = useSelector((state) => state.nav.hamburgerIcon);

	const classes = useSelector((state) => state.nav.navClass);

	return (
		<header className="header">
			<div className="header-mobile">
				<Link to="/home">
					<div className="logo">{/* // logo as background image */}</div>
				</Link>
				<Hamburger
					onClick={() => dispatch(hamburgerClick())}
					icon={icon}
				/>
			</div>
			<Nav
				onClick={() => dispatch(closeNav())}
				className={classes}
			/>
		</header>
	);
}
