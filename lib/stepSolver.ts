import { evaluate } from 'mathjs';

export function stepSolver(exp: string): string[] {
  return [`Solve: ${exp}`, `Result: ${evaluate(exp)}`];
}
