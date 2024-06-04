import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
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
