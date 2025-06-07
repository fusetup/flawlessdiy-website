"use client";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { serviceSubcategories } from "@/lib/serviceSubcategories";
import { Button } from "@/components/ui/button";
import { ServiceIcon } from "@/components/ui/service-icons";
import { use } from "react";

const iconColorPalette = [
	"text-orange-500",
	"text-blue-500",
	"text-green-600",
	"text-yellow-500",
	"text-purple-500",
	"text-pink-500",
	"text-cyan-500",
	"text-emerald-600",
	"text-red-500",
	"text-sky-500",
	"text-lime-500",
	"text-fuchsia-500",
	"text-rose-500",
	"text-indigo-500",
	"text-teal-500",
];

export default function ServiceCategoryPage({ params }: { params: Promise<{ service: string }> }) {
	// Use React.use() to unwrap the Promise params
	const awaitedParams = use(params);
	const service = services.find(
		(s) => s.title.toLowerCase().replace(/\s+/g, "-") === awaitedParams.service
	);
	if (!service) return notFound();

	const palette = iconColorPalette;
	// Get subcategories for this service with stable color mapping
	const subCategories = (serviceSubcategories[awaitedParams.service] || []).map((sub, i) => {
		// Use a stable hash-based color assignment instead of index
		const topicHash = sub.topic.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
		const color = palette[topicHash % palette.length];
		return {
			...sub,
			iconColor: color,
		};
	}) || [];

	return (
		<div className="flex flex-col min-h-screen bg-background">
			{/* Hero Section */}
			<section className="w-full bg-gradient-to-r from-green-50 to-blue-50 py-16 border-b">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
						{service.title}
					</h1>
					<p className="text-lg mb-6 text-gray-600 max-w-2xl mx-auto">
						{service.longDescription || service.description}
					</p>
				</div>
			</section>			{/* Sub-category Cards */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-semibold mb-8 text-primary">
						{service.title} Sub-categories
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{subCategories.map((sub, idx) => {
							const { iconColor } = sub;
							return (
								<div
									key={idx}
									className="flex flex-col bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 h-full"
								>
									<div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b border-gray-100">
										<ServiceIcon 
											topic={sub.topic} 
											className={`w-20 h-20 ${iconColor} drop-shadow-md`} 
										/>
									</div>									<div className="flex-1 p-6 flex flex-col">
										<h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{sub.topic}</h3>
										<p className="text-gray-600 text-sm leading-relaxed flex-1">
											{sub.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}
