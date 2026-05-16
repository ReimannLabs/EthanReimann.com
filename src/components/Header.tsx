import { NavigationMenu } from '@base-ui/react/navigation-menu';

const navLinks = [
  { label: 'Photography', href: '/photography/' },
  { label: 'Projects', href: '/projects/' },
];

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '0.5em solid var(--color-midtone)',
      paddingTop: 'var(--space-xl)',
      paddingBottom: 'var(--space-xl)',
      flexWrap: 'wrap',
      gap: 'var(--space-lg)',
    }}>
      <h1 style={{ fontSize: '1em' }}>
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Ethan Reimann
        </a>
      </h1>

      <NavigationMenu.Root>
        <NavigationMenu.List style={{
          display: 'flex',
          gap: 'var(--space-xl)',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}>
          {navLinks.map((link) => (
            <NavigationMenu.Item key={link.href}>
              <NavigationMenu.Link
                href={link.href}
                style={{
                  color: 'var(--color-primary)',
                  textDecoration: 'underline solid var(--space-xs)',
                  textUnderlineOffset: 'var(--space-sm)',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                }}
              >
                {link.label}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
}
