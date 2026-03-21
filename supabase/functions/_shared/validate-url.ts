/**
 * Shared URL validation to prevent SSRF attacks.
 * Blocks private IPs, localhost, link-local, IPv6 internal, and special domains.
 */
export function validateUrl(url: string): { valid: boolean; error?: string; sanitizedUrl?: string } {
  try {
    const urlWithProtocol = url.startsWith('http') ? url : 'https://' + url;
    const urlObj = new URL(urlWithProtocol);

    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return { valid: false, error: 'Invalid protocol' };
    }

    const hostname = urlObj.hostname.toLowerCase();
    if (
      hostname === 'localhost' ||
      hostname.startsWith('127.') ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.startsWith('172.16.') || hostname.startsWith('172.17.') ||
      hostname.startsWith('172.18.') || hostname.startsWith('172.19.') ||
      hostname.startsWith('172.20.') || hostname.startsWith('172.21.') ||
      hostname.startsWith('172.22.') || hostname.startsWith('172.23.') ||
      hostname.startsWith('172.24.') || hostname.startsWith('172.25.') ||
      hostname.startsWith('172.26.') || hostname.startsWith('172.27.') ||
      hostname.startsWith('172.28.') || hostname.startsWith('172.29.') ||
      hostname.startsWith('172.30.') || hostname.startsWith('172.31.') ||
      hostname === '0.0.0.0' ||
      hostname.startsWith('169.254.') ||
      hostname.startsWith('100.64.') ||
      hostname.endsWith('.local') ||
      hostname.endsWith('.internal') ||
      hostname.endsWith('.localhost')
    ) {
      return { valid: false, error: 'Internal URLs not allowed' };
    }

    const cleanHost = hostname.replace(/[\[\]]/g, '');
    if (
      cleanHost === '::1' ||
      cleanHost.startsWith('::ffff:127.') ||
      cleanHost.startsWith('fe80:') ||
      cleanHost.startsWith('fc') ||
      cleanHost.startsWith('fd')
    ) {
      return { valid: false, error: 'Internal URLs not allowed' };
    }

    if (url.length > 2048) {
      return { valid: false, error: 'URL too long' };
    }

    return { valid: true, sanitizedUrl: urlWithProtocol };
  } catch {
    return { valid: false, error: 'Invalid URL format' };
  }
}
