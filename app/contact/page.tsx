export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-black text-zinc-950 md:text-6xl">
        Contact Us
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Have travel suggestions, partnership ideas, or feedback? We'd love to
        hear from you.
      </p>

      <div className="mt-10 rounded-3xl border border-zinc-200 p-8">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-zinc-500">Email</p>
            <p className="mt-2 text-lg font-medium text-zinc-950">
              contact@indiatripguide.com
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-500">
              Collaborations
            </p>
            <p className="mt-2 text-lg font-medium text-zinc-950">
              support@indiatripguide.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}