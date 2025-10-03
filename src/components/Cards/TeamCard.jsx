export default function TeamCard({ name }) {
  return (
    <div className="flex items-center justify-center bg-white rounded-full border border-[var(--foreground-color)] shadow-sm hover:shadow-md transition px-6 py-3">
      <p className="font-semibold text-gray-800 text-center text-sm">{name}</p>
    </div>
  );
}
