import { Icon } from '@/components/ui/icon';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1>Next Lucide Icons</h1>
        <Icon name="Check" />
        <Icon name="Check" className="text-red-500" size={28} />
        <Icon name="Check" className="text-green-500" size={32} />
      </main>
    </div>
  );
}
