import { Stethoscope } from 'lucide-react';
import { specializations } from '@/lib/data';
import { SpecializationCard } from '@/components/specialization/SpecializationCard';
import { Search } from '@/components/specialization/Search';

export default function SpecializationsPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || '';
  const filteredSpecializations = specializations.filter((spec) =>
    spec.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
          Find Your Specialist
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore a wide range of medical fields and connect with the right doctor for your needs.
        </p>
      </header>

      <div className="mb-12 max-w-2xl mx-auto">
        <Search placeholder="Search for a specialization..." />
      </div>
      
      {filteredSpecializations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSpecializations.map((specialization) => (
            <SpecializationCard key={specialization.slug} specialization={specialization} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Stethoscope className="mx-auto h-24 w-24 text-muted-foreground/50" />
          <h2 className="mt-4 text-2xl font-headline font-semibold">No Specializations Found</h2>
          <p className="mt-2 text-muted-foreground">Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  );
}
