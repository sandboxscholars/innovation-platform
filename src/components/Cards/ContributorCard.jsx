import { ArrowRight } from "lucide-react";
import Avatar from '@mui/material/Avatar';

export default function ContributorCard({ name, role, contributions, email }) {
  return (
    <div className="flex items-center justify-between bg-[var(--primary-color)]/35 rounded-3xl px-6 py-4 shadow-sm hover:shadow-md transition w-full">
      {/* Left - Profile */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Placeholder avatar */}
        <Avatar src="" alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-blue-300 flex-shrink-0" />

        <div className="flex flex-col overflow-hidden">
          <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
          <p className="text-sm italic text-gray-700 truncate">{role}</p>
          <p className="text-sm text-gray-800 truncate">{contributions}</p>
          <p className="text-sm text-gray-600 truncate">{email}</p>
        </div>
      </div>

      {/* Right - Arrow inside circle */}
      <div className="flex-shrink-0 ml-4">
        <ArrowRight className="w-10 h-10 cursor-pointer" /> 
      </div>
    </div>
  );
}
