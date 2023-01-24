import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navbar.styles.scss'

const Navbar = () => (
	<>
		<div className="navigation">
			<Link className="logo-container" to="/">
				<CrownLogo className="Logo" />
			</Link>
			<div className="nav-links-container">
				<Link className="nav-link" to="/shop">
					SHOP
				</Link>
			</div>
		</div>
		<Outlet />
	</>
)

export default Navbar