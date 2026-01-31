export default function ProgramCard({ title, image }) {
return (
<div className="relative rounded-2xl overflow-hidden h-[220px]">
<img src={image} alt={title} className="w-full h-full object-cover" />
<div className="absolute inset-0 bg-black/40 flex items-end p-4">
<h4 className="text-white text-sm sm:text-lg font-semibold">
{title}
</h4>
</div>
</div>
);
}