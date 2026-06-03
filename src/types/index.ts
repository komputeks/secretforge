export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  owner_id: string;
  encryption_key: string;
  created_at: string;
  updated_at: string;
}

export interface Secret {
  id: string;
  project_id: string;
  key: string;
  encrypted_value: string;
  iv: string;
  auth_tag: string;
  description: string | null;
  environment: 'development' | 'preview' | 'production';
  created_at: string;
  updated_at: string;
  value?: string;
}

export interface SecretVersion {
  id: string;
  secret_id: string;
  encrypted_value: string;
  iv: string;
  auth_tag: string;
  created_by: string | null;
  created_at: string;
}

export interface Team {
  id: string;
  name: string;
  slug: string;
  owner_id: string;
  created_at: string;
}

export interface TeamMember {
  id: string;
  team_id: string;
  user_id: string;
  role: 'owner' | 'admin' | 'member';
  created_at: string;
}

export interface AuditLog {
  id: string;
  user_id: string | null;
  project_id: string | null;
  action: string;
  resource_type: string | null;
  resource_id: string | null;
  metadata: Record<string, any>;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
}

export type Environment = 'development' | 'preview' | 'production';
