import Image from 'next/image';
import Link from 'next/link';
import { doctors, specializations } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, GraduationCap, Stethoscope, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReviewSummarizer } from '@/components/doctor/ReviewSummarizer';

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = doctors.find((d) => d.id === params.id);
  if (!doctor) {
    notFound();
  }

  const specialization = specializations.find((s) => s.slug === doctor.specialization);

  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href={`/specialization/${doctor.specialization}`} className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to {specialization?.name || 'Doctors'}
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="lg:sticky top-24">
              <CardContent className="p-6 text-center">
                <Image
                  src={doctor.imageUrl}
                  alt={`Photo of ${doctor.name}`}
                  data-ai-hint="doctor professional"
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-primary mx-auto mb-4"
                />
                <h1 className="font-headline text-2xl font-bold">{doctor.name}</h1>
                <p className="text-muted-foreground">{specialization?.name}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`} />
                  ))}
                </div>
                <Button asChild size="lg" className="mt-6 w-full">
                  <Link href={`/doctor/${doctor.id}/book`}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">About Dr. {doctor.name.split(' ').pop()}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Stethoscope className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold font-headline">Expertise</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {doctor.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold font-headline">Experience</h3>
                      <p className="text-muted-foreground">{doctor.experience} years in practice</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <ReviewSummarizer doctorName={doctor.name} sampleReviews={doctor.reviews} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
