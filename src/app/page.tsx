export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>SecretForge</h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
        Open-source secret management for developers. AES-256 encrypted, GitHub & Vercel sync.
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <a href="/dashboard" style={{ padding: '10px 20px', background: '#000', color: '#fff', textDecoration: 'none', borderRadius: '6px' }}>
          Dashboard
        </a>
        <a href="https://github.com/komputeks/secretforge" style={{ padding: '10px 20px', border: '1px solid #ddd', textDecoration: 'none', borderRadius: '6px', color: '#000' }}>
          GitHub
        </a>
      </div>
      <div style={{ marginTop: '60px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>Features</h2>
        <ul style={{ lineHeight: '1.8', color: '#444' }}>
          <li>✓ AES-256-GCM encryption with per-project keys</li>
          <li>✓ GitHub and Vercel sync</li>
          <li>✓ Multi-environment support</li>
          <li>✓ Team management & RBAC</li>
          <li>✓ Secret versioning</li>
          <li>✓ Audit logs</li>
          <li>✓ REST API for AI agents</li>
        </ul>
      </div>
    </div>
  );
}
