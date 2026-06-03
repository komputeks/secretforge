# SecretForge

Open-source secret management for developers. Alternative to Infisical, Doppler, and Vault.

**Live:** https://secretforge.vercel.app

## Features

### V1 - Core
- ✓ Projects with per-project encryption
- ✓ AES-256-GCM encryption (HKDF key derivation)
- ✓ Multi-environment secrets (dev/preview/prod)
- ✓ .env import/export
- ✓ GitHub sync
- ✓ Vercel sync
- ✓ REST API

### V2 - Teams
- ✓ Team workspaces
- ✓ RBAC (owner/admin/member)
- ✓ Secret versioning & rollback
- ✓ Audit logs

### V3 - CLI & AI
- ✓ CLI tool (`secretforge`)
- ✓ AI agent integrations (Claude, Copilot, Codex)
- ✓ Secret rotation

### V4 - Advanced
- ✓ Ephemeral credentials
- ✓ Dynamic secrets
- ✓ Lease management

## Tech Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS 4**
- **Supabase** (Postgres + Auth + RLS)
- **Vercel** (deployment)
- **AES-256-GCM** encryption

## Architecture

### Encryption
```
Master Key (env) 
  → HKDF-SHA256(project_id) 
  → Project Key 
  → AES-256-GCM(secret)
```

- Each secret has unique IV and auth tag
- Never store plaintext
- Server-side decryption only

### Database Schema
- `sf_projects` - Projects with encryption keys
- `sf_secrets` - Encrypted secrets
- `sf_secret_versions` - Version history
- `sf_teams` - Team workspaces
- `sf_audit_logs` - Audit trail

## Quick Start

```bash
git clone https://github.com/komputeks/secretforge
cd secretforge
npm install
```

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
ENCRYPTION_MASTER_KEY=your_32_byte_hex_key
```

```bash
npm run dev
```

## API Usage

```bash
# Get secrets
curl -H "Authorization: Bearer $TOKEN" \
  https://secretforge.vercel.app/api/projects/PROJECT_ID/secrets

# Create secret
curl -X POST -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"key":"API_KEY","value":"secret123","environment":"production"}' \
  https://secretforge.vercel.app/api/projects/PROJECT_ID/secrets
```

## Self-Hosting

1. Create Supabase project
2. Run migrations (see `/supabase`)
3. Deploy to Vercel
4. Set environment variables
5. Configure GitHub/Vercel OAuth apps

Free tier supports 10,000+ users.

## Security

- Row Level Security on all tables
- AES-256-GCM with unique IVs
- HKDF key derivation
- Audit logging
- Rate limiting
- CSRF protection

## License

MIT - Open source forever
