type PageProps = {
  children: React.ReactNode;
};

export default function Page({
  children,
}: PageProps) {
  return (
    <main className="mx-auto w-full max-w-6xl p-8">
      {children}
    </main>
  );
}