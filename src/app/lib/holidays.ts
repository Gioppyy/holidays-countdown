export interface Holiday {
    name: string;
    getDate: (year: number) => Date;
}

const getEasterDate = (year: number): Date => {
    const f = Math.floor;
    const G = year % 19;
    const C = f(year / 100);
    const H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30;
    const I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11));
    const J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7;
    const L = I - J;
    const month = 3 + f((L + 40) / 44);
    const day = L + 28 - 31 * f(month / 4);
    return new Date(year, month - 1, day);
}

const fixedDate = (month: number, day: number): (year: number) => Date => {
    return (year) => new Date(year, month - 1, day);
}

export const holidays: Holiday[] = [
    { name: "Epifania", getDate: fixedDate(1, 6) },
    { name: "Pasqua", getDate: getEasterDate },
    { name: "Festa della Repubblica", getDate: fixedDate(6, 2) },
    { name: "Ferragosto", getDate: fixedDate(8, 15) },
    { name: "Halloween", getDate: fixedDate(10, 31) },
    { name: "Natale", getDate: fixedDate(12, 25) },
    { name: "Capodanno", getDate: fixedDate(12, 31) },
];
