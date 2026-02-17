export function capitalizeWords(text: string): string {
  if (!text) return '';
  return text.toLowerCase().replace(/(?:^|\s)\S/g, (match) => {
    return match.toUpperCase();
  });
}

export function capitalizeFirstLetter(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
