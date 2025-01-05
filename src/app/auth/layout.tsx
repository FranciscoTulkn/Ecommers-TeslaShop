export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center">
      <div className="w-full sm:W-[300PX] px-10">

        { children }
      </div>
    </main>
  );
} 