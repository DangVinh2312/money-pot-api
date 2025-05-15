import { createHmac } from 'crypto';

export function calculateHMacSHA256(data: string, secretKey: string) {
  const hmac = createHmac('sha256', secretKey);
  hmac.update(data);
  return hmac.digest('hex');
}
