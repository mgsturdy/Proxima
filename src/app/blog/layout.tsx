export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="pt-32 pb-24 bg-primary text-primary">
      <div className="max-w-3xl mx-auto px-6">
        {children}
      </div>
    </article>
  );
}
