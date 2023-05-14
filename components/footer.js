import Link from 'next/link';
export default function Footer() {
  const footermenu = [
    'Help',

    'Status',

    'Writers',

    'Blog',

    'Careers',

    'Privacy',

    'Terms',

    'About',

    'Text to speech',
  ];
  return (
    <div className="footer-menu">
      {footermenu.map((item) => {
        return (
          <span>
            <Link href="/">{item}</Link>
          </span>
        );
      })}
    </div>
  );
}
