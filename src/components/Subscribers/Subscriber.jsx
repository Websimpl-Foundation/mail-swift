import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
	Select,
} from "@/components/ui/select";
import {
	TableHead,
	TableRow,
	TableHeader,
	TableBody,
	Table,
	TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import tableData from "@/src/Data";

function Subscriber() {
	return (
		<div className="flex flex-col p-8 pb-0">
			<div className="flex flex-row gap-5 justify-between">
				<div className="flex flex-row space-x-4">
					<Input
						className="max-w-60 min-w-24"
						placeholder="Search..."
					/>
					<Select>
						<SelectTrigger
							aria-label="Filter"
							id="filter"
							className="max-w-60 min-w-16"
						>
							<SelectValue placeholder="Select your option" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="option1">Option 1</SelectItem>
							<SelectItem value="option2">Option 2</SelectItem>
							<SelectItem value="option3">Option 3</SelectItem>
							<SelectItem value="option4">Option 4</SelectItem>
						</SelectContent>
					</Select>
					<Button>Search</Button>
				</div>
				<div className="flex flex-row space-x-4">
					<div className="flex space-x-2">
						<Button>btn1</Button>
						<Button>btn2</Button>
					</div>
					<Button variant="secondary">+ New Subscriber</Button>
				</div>
			</div>

			<div className="mt-4 overflow-auto lg:h-[525px]">
				<Table className="bg-slate-100">
					<TableHeader>
						<TableRow>
							<TableHead>Email</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Created</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{tableData.map((data, key) => {
							return (
								<TableRow key={key}>
									<TableCell>{data.email}</TableCell>
									<TableCell>{data.name}</TableCell>
									<TableCell>{data.lastActive}</TableCell>
									<TableCell>
										<Badge
											className={
												data.subscriptionStatus ==
												"Subscribed"
													? "bg-emerald-200 text-emerald-800"
													: "bg-red-200 text-red-800"
											}
											variant="primary"
										>
											{data.subscriptionStatus}
										</Badge>
									</TableCell>
									<TableCell>
										<Button variant="outline">
											{data.actions}
										</Button>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}

export default Subscriber;
