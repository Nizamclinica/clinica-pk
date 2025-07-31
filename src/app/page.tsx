import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { specializations } from '@/lib/data';
import { SpecializationCard } from '@/components/specialization/SpecializationCard';
import { UserCheck, BriefcaseMedical, MapPin, Award } from 'lucide-react';
import { Stethoscope, Calendar } from 'lucide-react';


export default function HomePage() {
  const services = [
    {
      title: 'Doctor Appointments',
      description: 'Easily find and book appointments with a wide range of verified doctors and specialists.',
      icon: UserCheck,
      href: '/specializations'
    },
    {
      title: 'Online Medical Store',
      description: 'Order medicines and healthcare products from the comfort of your home.',
      icon: BriefcaseMedical,
      href: '/medical-store'
    },
    {
      title: 'Clinic Directory & Ratings',
      description: 'Access a comprehensive directory of clinics with genuine patient ratings and reviews.',
      icon: MapPin
    },
    {
      title: 'Health Blogs & Updates',
      description: 'Stay informed with the latest health-related news, articles, and tips from experts.',
      icon: Stethoscope
    },
  ];

  const milestones = [
    {
      year: '2025',
      title: 'The Vision',
      description: 'Conceptualized a platform to bridge the healthcare gap with a team of 5.',
      icon: Calendar,
    },
    {
      year: '2026',
      title: 'Launch & Growth',
      description: 'Successfully launched clinica.pk, onboarding 100+ doctors and serving 10k users.',
      icon: MapPin,
    },
    {
      year: '2027',
      title: 'Expansion',
      description: 'Introduced online pharmacy and lab tests, expanding our team to 50+ members.',
      icon: Award,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-secondary/30 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">
              Your Health, Our Priority.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Welcome to clinica.pk, your trusted partner in finding the best medical care. Connect with experienced doctors and schedule your appointments seamlessly.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/specializations">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Message from CEO Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg group">
                <Image
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=870&auto=format&fit=crop"
                    data-ai-hint="professional friendly CEO"
                    alt="Message from our CEO"
                    fill
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-headline text-3xl font-bold text-primary">A Message from Our CEO</h2>
              <blockquote className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground text-base md:text-lg italic">
                  "Our journey began with a simple yet powerful mission: to create a healthcare ecosystem that is accessible, reliable, and compassionate. We are committed to leveraging technology to empower you, our valued user, with the tools and information needed to make informed decisions about your health. At clinica.pk, we don't just connect you with doctors; we build partnerships for a healthier future. Thank you for entrusting us with your care."
                </p>
              </blockquote>
              <p className="font-semibold text-foreground">- Nizam, CEO of clinica.pk</p>
            </div>
          </div>
        </div>
      </section>

       {/* Milestones Section */}
       <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tracing our path from a simple idea to a trusted healthcare platform.
            </p>
          </header>
          <div className="relative">
            <div className="absolute left-1/2 top-0 w-1 bg-border h-full -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-1">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="md:flex items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                    <div className="md:w-1/2 md:p-8">
                       <div className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center md:text-left">
                          <h3 className="font-headline text-xl font-semibold text-primary mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 bg-background rounded-full flex items-center justify-center border-4 border-primary shadow-lg z-10">
                      <p className="text-primary font-bold text-lg">{milestone.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <header className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">
              Services We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             We provide a comprehensive suite of services designed to make your healthcare experience as smooth as possible.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const cardContent = (
                <div className="text-center p-6 bg-card border rounded-lg shadow-md hover:shadow-xl transition-shadow h-full flex flex-col items-center justify-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-headline text-xl font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );

              if (service.href) {
                return (
                  <Link key={index} href={service.href} className="block h-full">
                    {cardContent}
                  </Link>
                );
              }

              return <div key={index}>{cardContent}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Featured Specializations Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">
              Explore Our Specialities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the right specialist from our wide range of medical fields.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {specializations.slice(0, 4).map((specialization) => (
              <SpecializationCard key={specialization.slug} specialization={specialization} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/specializations">View More Specialities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="font-headline text-3xl font-bold text-primary mb-4">About Our Company</h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  clinica.pk is a pioneering digital health platform dedicated to revolutionizing access to healthcare. We connect patients with a vast network of verified doctors across various specialities, ensuring quality care is just a click away. Our mission is to simplify the healthcare journey, from finding the right specialist to managing appointments and accessing reliable health information. By leveraging technology, we aim to create a transparent, efficient, and patient-centric healthcare ecosystem that fosters well-being and empowers individuals to take control of their health.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg group">
                <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=870&auto=format&fit=crop"
                    data-ai-hint="diverse team professionals"
                    alt="Our dedicated team of professionals"
                    fill
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-500 group-hover:scale-105"
                />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
