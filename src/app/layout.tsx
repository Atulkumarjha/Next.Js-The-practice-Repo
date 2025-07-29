import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
return (
  <html>
  <body>
  <nav>
  <Link href="/blog">Blog</Link>
  <a href="/contact">Contact</a>
  </nav>
  {children}
  </body>
  </html>
)}