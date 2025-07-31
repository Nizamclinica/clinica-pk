import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Doctor } from '@/lib/data';
import { Star } from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow hover:shadow-xl">
      <CardHeader className="flex-row items-start gap-4 p-4">
        <Image
          src={doctor.imageUrl}
          alt={`Photo of ${doctor.name}`}
          data-ai-hint="medical professional"
          width={100}
          height={100}
          className="rounded-full border-4 border-primary/20"
        />
        <div className="flex-1">
          <CardTitle className="font-headline text-xl mb-1">{doctor.name}</CardTitle>
          <CardDescription>{doctor.experience} years of experience</CardDescription>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`} />
            ))}
            <span className="text-xs text-muted-foreground ml-1">(100+ reviews)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {doctor.expertise.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-secondary/50 flex gap-2">
        <Button variant="outline" asChild className="flex-1">
          <Link href={`/doctor/${doctor.id}`}>View Profile</Link>
        </Button>
        <Button asChild className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href={`/doctor/${doctor.id}/book`}>Book Me</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
