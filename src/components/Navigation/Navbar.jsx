import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Outlet } from "react-router-dom";

function Navbar() {
	
	return (
		<>
			<div className="flex flex-col flex-grow h-screen bg-blue-100">
				<div className="flex items-center justify-between h-20 px-8 bg-white w-full">
					<h2 className="text-2xl font-semibold">Subscribers</h2>
					<div className="flex items-center">
						<Avatar>
							<AvatarImage
								alt="Jon Behr"
								src="/placeholder.svg?height=32&width=32"
							/>
							<AvatarFallback>JD</AvatarFallback>
						</Avatar>
						<p className="ml-4 mr-4">Jon banega Don</p>
					</div>
				</div>
				<div className="h-[calc(100%-5rem)]">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Navbar;
