import React from 'react';
import { FaAws } from "react-icons/fa";
import { MdCloud, MdStorage, MdSecurity, MdCode, MdBusiness } from "react-icons/md";
const TechnologyProficiency = () => {
const technologies = [
 {
category: "Cloud Platforms",
items: [
 { name: "AWS", icon: FaAws },
 { name: "Azure", icon: MdCloud },
 { name: "Google Cloud", icon: MdCloud }
 ]
 },
 {
category: "Infrastructure & DevOps",
items: [
 { name: "Terraform", icon: MdStorage },
 { name: "Kubernetes", icon: MdStorage },
 { name: "Jenkins", icon: MdCode }
 ]
 },
 {
category: "Security & Compliance",
items: [
 { name: "Cloud Security", icon: MdSecurity },
 { name: "Enterprise Solutions", icon: MdBusiness }
 ]
 }
 ];
return (
<div className="min-h-screen bg-gradient-to-b from-teal-950 to-emerald-950 text-white">
<section className="bg-teal-900/30 py-24 border-y border-emerald-800/30">
<div className="container mx-auto px-6">
<h2 className="text-4xl font-bold text-center mb-16">Technology Stack</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{technologies.map((category) => (
<div
key={category.category}
className="bg-teal-900/50 rounded-xl p-6 border border-emerald-800/30"
>
<h3 className="text-xl font-semibold mb-6">{category.category}</h3>
<div className="space-y-3">
{category.items.map((tech) => (
<div
key={tech.name}
className="flex items-center space-x-3 p-3 bg-teal-950/50 rounded-lg hover:bg-teal-950/70 transition-colors"
>
<tech.icon className="w-6 h-6 text-yellow-600" />
<span className="text-yellow-100/90">{tech.name}</span>
</div>
 ))}
</div>
</div>
 ))}
</div>
</div>
</section>
</div>
 );
};
export default TechnologyProficiency;