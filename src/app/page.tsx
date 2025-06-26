import { getNextHolidays } from '@/app/lib/countdown';
import Countdown from '@/app/components/Countdown';

export default function HomePage() {
  const holidays = getNextHolidays();

  return (
    <main className="p-6 max-w-xl mx-auto">
      <ul className="w-full flex flex-col items-center">
        {holidays.map((h, index) => (
          <li
            key={h.name}
            className={`mb-2 ${index === 0 ? 'w-full text-6xl bg-gray-900' : 'w-4/5 text-3xl bg-gray-800'} mx-auto`}
          >
            <Countdown {...h} />
          </li>
        ))}
      </ul>
    </main>
  );
}
