import { estimateDeliveryConfig, handleEstimatePost, issueEstimateToken } from '../../../lib/estimateDelivery';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export async function GET() {
  const config = estimateDeliveryConfig(process.env);
  return Response.json(config ? { available: true, ...issueEstimateToken(config) } : { available: false }, {
    status: config ? 200 : 503,
    headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' },
  });
}

export async function POST(request: Request) {
  return handleEstimatePost(request, process.env);
}
