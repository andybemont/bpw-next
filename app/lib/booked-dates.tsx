const bookedDates: string[] = [
  "2026-06-20",
  "2026-03-27",
  "2025-11-22",
  "2025-11-01",
  "2025-10-25",
  "2025-10-19",
  "2025-10-11",
  "2025-10-04",
  "2025-09-27",
  "2025-09-21",
  "2025-09-19",
  "2025-09-13",
  "2025-09-06",
  "2025-09-05",
  "2025-08-30",
  "2025-08-24",
  "2025-08-21",
  "2025-08-20",
  "2025-08-19",
  "2025-08-18",
  "2025-08-17",
  "2025-08-16",
  "2025-08-15",
  "2025-08-14",
  "2025-08-13",
  "2025-08-12",
  "2025-08-11",
  "2025-08-10",
  "2025-08-09",
  "2025-08-02",
  "2025-07-27",
  "2025-07-19",
  "2025-07-13",
  "2025-07-12",
  "2025-07-11",
  "2025-07-10",
  "2025-07-05",
  "2025-06-28",
  "2025-06-20",
  "2025-06-14",
  "2025-06-08",
  "2025-05-31",
  "2025-05-24",
  "2025-05-17",
  "2025-05-10",
  "2025-05-03",
  "2025-04-20",
  "2025-04-19",
  "2025-04-18",
  "2025-04-17",
  "2025-04-16",
  "2025-04-15",
  "2025-04-14",
  "2025-04-13",
  "2025-04-12",
];

function isDateBooked(date: string) {
  return bookedDates.includes(date);
}

export { isDateBooked };
