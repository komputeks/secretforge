import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const MASTER_KEY = process.env.ENCRYPTION_MASTER_KEY || 'f70d2a1e6647cf69b6c09dfae435a2ddbb9b039a';
const KEY_LENGTH = 32;
const IV_LENGTH = 16;

export function deriveProjectKey(projectId: string): Buffer {
  return crypto.hkdfSync(
    'sha256',
    Buffer.from(MASTER_KEY, 'hex'),
    Buffer.from('secretforge-v1', 'utf8'),
    Buffer.from(projectId, 'utf8'),
    KEY_LENGTH
  );
}

export function encryptSecret(plaintext: string, projectId: string) {
  const key = deriveProjectKey(projectId);
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  
  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return {
    encryptedValue: encrypted,
    iv: iv.toString('hex'),
    authTag: cipher.getAuthTag().toString('hex'),
  };
}

export function decryptSecret(encryptedValue: string, iv: string, authTag: string, projectId: string): string {
  const key = deriveProjectKey(projectId);
  const decipher = crypto.createDecipheriv(ALGORITHM, key, Buffer.from(iv, 'hex'));
  decipher.setAuthTag(Buffer.from(authTag, 'hex'));
  
  let decrypted = decipher.update(encryptedValue, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

export function generateProjectKey(): string {
  return crypto.randomBytes(32).toString('hex');
}
