export default function Footer() {
  return (
    <footer style={{
      borderTop: '0.5em solid var(--color-midtone)',
      paddingTop: 'var(--space-xl)',
      paddingBottom: 'var(--space-xl)',
      marginTop: 'var(--space-xl)',
      textAlign: 'right',
    }}>
      <p>
        Powered By{' '}
        <a href="https://reimannlabs.com/">Reimann Labs</a>
      </p>
    </footer>
  );
}
