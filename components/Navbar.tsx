import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link> | 
      <Link href="/calculator"> Calculator</Link> | 
      <Link href="/practice"> Practice</Link> | 
      <Link href="/history"> History</Link>
    </nav>
  );
}
