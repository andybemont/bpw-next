const bookedDates: string[] = [
  "2025-10-25",
  "2025-10-19",
  "2025-10-11",
  "2025-10-4",
  "2025-9-27",
  "2025-9-19",
  "2025-9-6",
  "2025-9-5",
  "2025-8-30",
  "2025-8-24",
  "2025-8-21",
  "2025-8-20",
  "2025-8-19",
  "2025-8-18",
  "2025-8-17",
  "2025-8-16",
  "2025-8-15",
  "2025-8-14",
  "2025-8-13",
  "2025-8-12",
  "2025-8-11",
  "2025-8-10",
  "2025-8-9",
  "2025-8-2",
  "2025-7-27",
  "2025-7-19",
  "2025-7-13",
  "2025-7-12",
  "2025-7-11",
  "2025-7-10",
  "2025-7-5",
  "2025-6-28",
  "2025-6-20",
  "2025-6-14",
  "2025-6-8",
  "2025-5-31",
  "2025-5-24",
  "2025-5-17",
  "2025-5-10",
  "2025-5-3",
  "2025-4-20",
  "2025-4-19",
  "2025-4-18",
  "2025-4-17",
  "2025-4-16",
  "2025-4-15",
  "2025-4-14",
  "2025-4-13",
  "2025-4-12",
];

function isDateBooked(date: string) {
  return bookedDates.includes(date);
}

export { isDateBooked };
