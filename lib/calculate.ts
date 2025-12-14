import { evaluate } from 'mathjs';

export function calculate(exp: string): string {
  try {
    return evaluate(exp).toString();
  } catch {
    return 'Error';
  }
}
