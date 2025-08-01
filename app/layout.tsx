export const metadata = {
  title: 'Clinica.pk',
  description: 'Book doctors, buy medicine, and more!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
