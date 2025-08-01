import BookMeButton from '@/components/BookMeButton';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Welcome to Clinica.pk</h1>
      <p className="mb-4">Click below to book a doctor:</p>
      <BookMeButton />
    </main>
  );
}
