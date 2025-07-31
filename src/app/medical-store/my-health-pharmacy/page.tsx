import { products } from '@/lib/data';
import { ProductCard } from '@/components/medical-store/ProductCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MyHealthPharmacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
          My Health Pharmacy
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your one-stop shop for health and wellness products.
        </p>
        <div className="mt-4">
            <Button variant="outline" asChild>
                <Link href="/medical-store">Back to Pharmacies</Link>
            </Button>
        </div>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
