export type Representation = 'text/html' | 'text/markdown';
type Entry = { mediaType: string; q: number; order: number };

function entries(header: string): Entry[] {
  return header.split(',').map((part, order) => {
    const [mediaType, ...parameters] = part.trim().toLowerCase().split(';');
    const rawQ = parameters.find((value) => value.trim().startsWith('q='))?.trim().slice(2);
    const parsed = rawQ === undefined ? 1 : Number(rawQ);
    return { mediaType: mediaType.trim(), q: Number.isFinite(parsed) ? Math.max(0, Math.min(1, parsed)) : 0, order };
  });
}

function specificity(entry: Entry, candidate: Representation) {
  if (entry.mediaType === candidate) return 2;
  if (entry.mediaType === `${candidate.split('/')[0]}/*`) return 1;
  return entry.mediaType === '*/*' ? 0 : -1;
}

export function preferredRepresentation(header: string | null): Representation | null {
  if (!header) return 'text/html';
  const accepted = entries(header);
  const offered: Representation[] = ['text/html', 'text/markdown'];
  let best: { type: Representation; q: number; order: number; offeredOrder: number } | null = null;
  offered.forEach((candidate, offeredOrder) => {
    let chosen: { q: number; order: number; specificity: number } | null = null;
    accepted.forEach((entry) => {
      const rank = specificity(entry, candidate);
      if (rank < 0) return;
      if (!chosen || rank > chosen.specificity || (rank === chosen.specificity && entry.order < chosen.order)) chosen = { q: entry.q, order: entry.order, specificity: rank };
    });
    const selected = chosen as { q: number; order: number; specificity: number } | null;
    if (!selected || selected.q <= 0) return;
    if (!best || selected.q > best.q || (selected.q === best.q && selected.order < best.order) || (selected.q === best.q && selected.order === best.order && offeredOrder < best.offeredOrder)) best = { type: candidate, q: selected.q, order: selected.order, offeredOrder };
  });
  return (best as { type: Representation } | null)?.type ?? null;
}

export function appendVaryAccept(headers: Headers) {
  const current = headers.get('Vary');
  if (!current) return headers.set('Vary', 'Accept');
  if (!current.split(',').some((value) => value.trim().toLowerCase() === 'accept')) headers.set('Vary', `${current}, Accept`);
}
