export function isValid(exp: string): boolean {
  return /^[0-9+\-*/.() ]+$/.test(exp);
}
