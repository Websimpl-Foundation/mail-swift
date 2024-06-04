
import Navbar from "./components/Navigation/Navbar";

import Sidepanel from "./components/Navigation/Sidepanel";


function Layout() {
	return (
		<>
			<div className="flex min-h-screen bg-gray-100">
				<Sidepanel  />
				<Navbar  />
			</div>
		</>
	);
}

export default Layout;
