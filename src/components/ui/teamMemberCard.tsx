// src/components/ui/TeamMemberCard.tsx
import Icon from "./icon";

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
}

export default function TeamMemberCard({ name, role, imageUrl, linkedinUrl }: TeamMemberCardProps) {
  return (
    <div className="text-center">
      <img src={imageUrl} alt={`Foto de ${name}`} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-blue-600">{role}</p>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 mt-2 inline-block">
        <Icon name="Linkedin" />
      </a>
    </div>
  );
}