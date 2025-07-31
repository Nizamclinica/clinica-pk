import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BriefcaseMedical } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MedicalStorePage() {
  const pharmacies = [
    {
      name: 'My Health Pharmacy',
      imageUrl: 'https://images.unsplash.com/photo-1585435557343-3c90272c63c9?q=80&w=870&auto=format&fit=crop',
      description: 'Your trusted source for genuine medicines and healthcare products, delivered right to your doorstep.',
      dataAiHint: 'modern pharmacy interior',
      href: '/medical-store/my-health-pharmacy',
      live: true,
    },
    {
      name: 'Umer Pharmacy',
      imageUrl: 'https://images.unsplash.com/photo-1576625398897-01a242a3a08c?q=80&w=870&auto=format&fit=crop',
      description: 'A wide range of pharmaceuticals and wellness products with fast and reliable service.',
      dataAiHint: 'pharmacy counter bright',
      href: '#',
      live: false,
    },
    {
      name: 'Tall Pharmacy',
      imageUrl: 'https://images.unsplash.com/photo-1628771065518-5d8241720511?q=80&w=870&auto=format&fit=crop',
      description: 'Comprehensive healthcare solutions, from prescription medications to everyday wellness items.',
      dataAiHint: 'pharmacist smiling customer',
      href: '#',
      live: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <BriefcaseMedical className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
          Online Medical Store
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Order from our trusted partner pharmacies and get your medicines delivered to you.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pharmacies.map((pharmacy) => (
          <Card key={pharmacy.name} className="overflow-hidden group transition-shadow hover:shadow-xl">
            <CardHeader className="p-0">
              <div className="relative h-56 w-full">
                <Image
                  src={pharmacy.imageUrl}
                  alt={`Photo of ${pharmacy.name}`}
                  data-ai-hint={pharmacy.dataAiHint}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline text-xl mb-2">{pharmacy.name}</CardTitle>
              <p className="text-muted-foreground mb-4 flex-grow">{pharmacy.description}</p>
              <Button asChild={pharmacy.live} disabled={!pharmacy.live} className="w-full">
                {pharmacy.live ? <Link href={pharmacy.href}>Visit Store</Link> : <span>Coming Soon</span>}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
