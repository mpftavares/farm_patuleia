import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import { updateStatus } from './app/statusSlice';
import Footer from './features/Footer';
import Header from './header/Header';
import SaleModal from './sales/SaleModal';
import { isOpen } from './app/status';
import DirectionModal from './features/DirectionModal';


function App() {

	const isSaleModalOpen = useSelector((state) => state.sales.modal);

	const isDirectionModalOpen = useSelector((state) => state.directions.modal);

	const isPharmacyOpen = isOpen();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateStatus(isPharmacyOpen));
	}, [dispatch]);

	return (
		<>
			{isSaleModalOpen && <SaleModal />}
			{isDirectionModalOpen && <DirectionModal />}
			<main className="App">
				<Header />
				<div className="outlet flex-1 margin-bottom">
					<Outlet />
				</div>

				<Footer />
				<p className="powered">Powered by marianatavares &copy; 2023</p>
			</main>
		</>
	);
}

export default App;
