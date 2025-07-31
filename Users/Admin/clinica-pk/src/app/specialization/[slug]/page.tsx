import { specializations, doctors } from '@/lib/data';
import { notFound } from 'next/navigation';
import { DoctorCard } from '@/components/doctor/DoctorCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function SpecializationPage({ params }: { params: { slug: string } }) {
  const specialization = specializations.find((s) => s.slug === params.slug);
  if (!specialization) {
    notFound();
  }

  const doctorsInSpecialization = doctors.filter(
    (d) => d.specialization === specialization.slug
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/specializations" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Specializations
          </Link>
        </Button>
      </div>

      <header className="mb-12 text-center">
        <specialization.icon className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
          {specialization.name}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {specialization.description}
        </p>
      </header>

      {doctorsInSpecialization.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsInSpecialization.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <h2 className="text-2xl font-headline font-semibold">No Doctors Found</h2>
          <p className="mt-2 text-muted-foreground">
            There are currently no doctors listed for this specialization.
          </p>
        </div>
      )}
    </div>
  );
}
