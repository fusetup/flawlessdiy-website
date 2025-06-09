"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
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

// Function to get carpentry image based on subcategory topic
const getCarpentryImage = (topic: string): string | null => {
	const imageMap: Record<string, string> = {
		"Door Hanging": "/Carpentry/Door Hanging.png",
		"Skirting Board Installation": "/Carpentry/skirting board.png",
		"Custom Shelving": "/Carpentry/shelving.png",
		"Loft Boarding": "/Carpentry/Loft Boarding.webp",
		"Stud Wall Construction": "/Carpentry/stud wall.png",
		"Bespoke Wardrobes": "/Carpentry/wood.png",
		"Architrave Installation": "/Carpentry/door.png",
		"Decking Installation": "/Carpentry/Work.png",
		"Staircase Repairs": "/Carpentry/Stairs.png",
		"Window Sill Repair": "/Carpentry/Sanding.png",
		"Flooring": "/Carpentry/Flooring.png",
		"Kitchen": "/Carpentry/kitchen.png",
	};
	
	return imageMap[topic] || null;
};

// Function to get cleaning image based on subcategory topic
const getCleaningImage = (topic: string): string | null => {
	const imageMap: Record<string, string> = {
		"End of Tenancy Cleaning": "/Cleaning/End of Tenancy.png",
		"Regular Domestic Cleaning": "/Cleaning/Regular Cleaning.png",
		"Oven Cleaning": "/Cleaning/Oven Cleaning.png",
		"Carpet Cleaning": "/Cleaning/Carpet Cleaning.png",
		"Window Cleaning": "/Cleaning/Window Cleaning.webp",
		"Bathroom Deep Clean": "/Cleaning/Bathroom deep Cleaning.png",
		"After-Build Clean": "/Cleaning/After Build.png",
		"Fridge/Freezer Cleaning": "/Cleaning/Fidge_freezer cleaning.png",
		"Floor Stripping & Polishing": "/Cleaning/Floor striping.png",
		"Kitchen Degrease": "/Cleaning/kitchen degrease.png",
	};
	
	return imageMap[topic] || null;
};

// Function to get gardening image based on subcategory topic
const getGardeningImage = (topic: string): string | null => {
	const imageMap: Record<string, string> = {
		"Lawn Mowing": "/Gardening/Lawn mowing.png",
		"Hedge Trimming": "/Gardening/Hedge Triming.png",
		"Weed Control": "/Gardening/weed control.png",
		"Garden Clearance": "/Gardening/Garden Clearance.png",
		"Planting Services": "/Gardening/Planting servises.png",
		"Soil Preparation": "/Gardening/Soil Preparation.png",
		"Mulching": "/Gardening/Mulching.png",
		"Seasonal Tidy-Ups": "/Gardening/Seasonal tidy up.png",
		"Irrigation Setup": "/Gardening/Irrigation.png",
		"Turfing": "/Gardening/turfing.png",
	};
	
	return imageMap[topic] || null;
};

// Function to get painting image based on subcategory topic
const getPaintingImage = (topic: string): string | null => {
    const imageMap: Record<string, string> = {
        "Wall Painting": "/Painting/Wall Painting.png",
        "Ceiling Painting": "/Painting/Celling Painting.png",
        "Trim & Woodwork Painting": "/Painting/Trim and woodwork.png",
        "Exterior Masonry Painting": "/Painting/Exterior Masonry Painting.png",
        "Fence & Shed Painting": "/Painting/Fence & Shed Painting.png",
        "Metal Gate Painting": "/Painting/metal gate.png",
        "Feature Wall Design": "/Painting/Feature Wall Design.png",
        "Wallpaper Installation": "/Painting/Wallpaper Installation.png",
        "Staircase Painting": "/Painting/Staircase Painting.png",
        "Garage Door Painting": "/Painting/Garage Door Painting.png",
    };
    return imageMap[topic] || null;
};

// Function to get handyman image based on subcategory topic
const getHandymanImage = (topic: string): string | null => {
    const imageMap: Record<string, string> = {
        "Flat Pack Assembly": "/Handyman/Flat Pack.png",
        "TV Wall Mounting": "/Handyman/Tv mount.png",
        "Curtain Rail Installation": "/Handyman/curtain rail.png",
        "Picture & Mirror Hanging": "/Handyman/Picture hangging.png",
        "Door Handle Repairs": "/Handyman/door handle.webp",
        "Shelf Fitting": "/Handyman/shelf fitting.webp",
        "Blind Installation": "/Handyman/Blinds.png",
        "Minor Leak Repairs": "/Handyman/minor leak.png",
        "Furniture Repairs": "/Handyman/furniture fixing.webp",
        "Wall Crack Filling": "/Handyman/wall crack.webp",
    };
    return imageMap[topic] || null;
};

// Function to get jet wash cleaning image based on subcategory topic
const getJetWashImage = (topic: string): string | null => {
    const imageMap: Record<string, string> = {
        "Driveway Jet Washing": "/Jet Washing/Driveway Jet Washing.png",
        "Patio Cleaning": "/Jet Washing/Patio Cleaning.png",
        "Decking Cleaning": "/Jet Washing/Decking Cleaning.png",
        "Brick Wall Washing": "/Jet Washing/Brick Wall Washing.png",
        "Garden Furniture Cleaning": "/Jet Washing/Garden Furniture Cleaning.png",
        "Garage Floor Cleaning": "/Jet Washing/Garage Floor Cleaning.png",
        "Graffiti Removal": "/Jet Washing/Graffiti Removal.png",
        "Vehicle Jet Wash (On-Site)": "/Jet Washing/Vehicle Jet Wash (on site).png",
        "Bin Area Cleaning": "/Jet Washing/Bin Area Cleaning.png",
        "Swimming Pool Area Wash": "/Jet Washing/Swimming Pool Area Wash.png",
    };
    return imageMap[topic] || null;
};

// Function to get gutter cleaning image based on subcategory topic
const getGutterCleaningImage = (topic: string): string | null => {
    const imageMap: Record<string, string> = {
        "Gutter Vacuuming": "/Gutter Cleaning/Gutter vaccuming.webp",
        "Downpipe Unblocking": "/Gutter Cleaning/Downpipe.png",
        "Gutter Maintenance Check": "/Gutter Cleaning/maintenance.webp",
        "Fascia Wipe Down": "/Gutter Cleaning/Fascia.png",
        "Gutter Guard Installation": "/Gutter Cleaning/Gutter Guard.png",
        "Conservatory Gutter Cleaning": "/Gutter Cleaning/Consevartory.png",
        "Rainwater Flow Test": "/Gutter Cleaning/Rainwater flow test.png",
        "Outbuilding Gutter Cleaning": "/Gutter Cleaning/Outbuilding gutter cleaning.png",
        "Emergency Overflow Response": "/Gutter Cleaning/overflow.webp",
        "Gutter Joint Resealing": "/Gutter Cleaning/joint reseal.webp",
    };
    return imageMap[topic] || null;
};

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
					</h2>					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{subCategories.map((sub, idx) => {
							const { iconColor } = sub;
							const isCarpentry = awaitedParams.service === "carpentry";
							const isCleaning = awaitedParams.service === "cleaning";
							const isGardening = awaitedParams.service === "gardening";
							const isPainting = awaitedParams.service === "painting";
							const isHandyman = awaitedParams.service === "handyman";
							const isJetWash = awaitedParams.service === "jet-wash-cleaning";
							const isGutterCleaning = awaitedParams.service === "gutter-cleaning";
							const carpentryImage = isCarpentry ? getCarpentryImage(sub.topic) : null;
							const cleaningImage = isCleaning ? getCleaningImage(sub.topic) : null;
							const gardeningImage = isGardening ? getGardeningImage(sub.topic) : null;
							const paintingImage = isPainting ? getPaintingImage(sub.topic) : null;
							const handymanImage = isHandyman ? getHandymanImage(sub.topic) : null;
							const jetWashImage = isJetWash ? getJetWashImage(sub.topic) : null;
							const gutterCleaningImage = isGutterCleaning ? getGutterCleaningImage(sub.topic) : null;
							const serviceImage = carpentryImage || cleaningImage || gardeningImage || paintingImage || handymanImage || jetWashImage || gutterCleaningImage;
							
							return (
								<div
									key={idx}
									className="flex flex-col bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 h-full"
								>
									<div className="w-full h-80 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b border-gray-100">
										{serviceImage ? (
											<div className="relative w-full h-full">
												<Image
													src={serviceImage}
													alt={sub.topic}
													fill
													className="object-cover"
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												/>
											</div>
										) : (
											<ServiceIcon 
												topic={sub.topic} 
												className={`w-20 h-20 ${iconColor} drop-shadow-md`} 
											/>
										)}
									</div><div className="flex-1 p-6 flex flex-col">
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
