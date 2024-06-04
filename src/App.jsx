import {
	RouterProvider,
	Route,
	createBrowserRouter,
	createRoutesFromChildren,
	Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import Subscriber from "./components/Subscribers/Subscriber";
import MessageSent from "./components/Messages/Sent";
import MessageDraft from "./components/Messages/Draft";
import Templates from "./components/Templates/Templates";
import { subscriptionTableData, messagesTableData } from "./Data";

const router = createBrowserRouter(
	createRoutesFromChildren(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Navigate to={"/dashboard"} />} />
			<Route path="/dashboard" element={<div>Dashboard content</div>} />
			<Route path="/campaigns" element={<div>Campaigns content</div>} />
			<Route 
				path="/templates"
				element={<Templates />} />
			<Route
				path="/subscribers"
				element={<Subscriber />}
				loader={() => subscriptionTableData}
			/>
			<Route path="/messages">
				<Route index element={<Navigate to="/messages/sent" />} />
				<Route
					path="sent"
					element={<MessageSent />}
					loader={() => messagesTableData}
				/>
				<Route
					path="draft"
					element={<MessageDraft />}
					loader={() => messagesTableData}
				/>
			</Route>
			<Route
				path="/email-services"
				element={<div>Email Services content</div>}
			/>
			<Route
				path="/manage-users"
				element={<div>Manage Users content</div>}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
