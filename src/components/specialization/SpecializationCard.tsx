import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Specialization } from '@/lib/data';

interface SpecializationCardProps {
  specialization: Specialization;
}

export function SpecializationCard({ specialization }: SpecializationCardProps) {
  const Icon = specialization.icon;
  return (
    <Link href={`/specialization/${specialization.slug}`} className="group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent">
        <CardHeader>
          <div className="mb-4">
            <Icon className="h-10 w-10 text-accent transition-transform duration-300 group-hover:scale-110" />
          </div>
          <CardTitle className="font-headline text-lg">{specialization.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{specialization.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
