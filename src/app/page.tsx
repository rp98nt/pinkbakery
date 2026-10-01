export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white px-6">
      <main className="max-w-lg text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-pink-500">
          Welcome
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-pink-950 sm:text-5xl">
          Pink Bakery
        </h1>
        <p className="mt-4 text-lg text-pink-900/70">
          A simple Next.js starter, ready to deploy on Vercel.
        </p>
      </main>
    </div>
  );
}
