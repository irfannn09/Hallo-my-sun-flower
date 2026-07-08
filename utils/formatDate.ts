export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getDaysTogether(startDate: string): number {
  const start = new Date(startDate).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - start);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
