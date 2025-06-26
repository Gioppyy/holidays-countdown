import { holidays } from "@/app/lib/holidays";

export const getNextHolidays = () => {
  const now = new Date();

  return holidays
    .map((h) => {
      const thisYear = h.getDate(now.getFullYear());
      const date = thisYear >= now ? thisYear : h.getDate(now.getFullYear() + 1);
      const diff = date.getTime() - now.getTime();

      const seconds = Math.ceil(diff / 1000)

      return {
        name: h.name,
        date,
        daysLeft: Math.floor(seconds / (60 * 60 * 24)),
        hoursLeft: Math.floor((seconds % (60 * 60 * 24)) / (60 * 60)),
        minutesLeft: Math.floor((seconds % (60 * 60)) / 60),
        secondsLeft: seconds % 60,
      };
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}
