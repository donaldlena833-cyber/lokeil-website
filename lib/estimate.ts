export const estimateServices = [
  'Bathroom remodeling', 'Kitchen remodeling', 'Tile installation',
  'Flooring', 'Cabinet installation', 'Plaster or drywall repair',
  'Interior painting', 'Other interior work',
] as const;

export const estimateSources = [
  'Not sure', 'Google search', 'ChatGPT or another AI answer',
  'Yelp', 'Instagram', 'A recommendation', 'Other',
] as const;

export type EstimateDetails = {
  name: string;
  email: string;
  phone: string;
  neighborhood: string;
  service: string;
  details: string;
  timing: string;
  heardFrom: string;
};

export const emptyEstimate: EstimateDetails = {
  name: '', email: '', phone: '', neighborhood: '', service: '',
  details: '', timing: '', heardFrom: 'Not sure',
};

const fieldLimits: Record<keyof EstimateDetails, number> = {
  name: 100, email: 254, phone: 40, neighborhood: 120,
  service: 60, details: 2500, timing: 120, heardFrom: 60,
};

export function validateEstimate(input: Record<string, unknown>) {
  const value = { ...emptyEstimate };
  const errors: Partial<Record<keyof EstimateDetails, string>> = {};
  for (const field of Object.keys(fieldLimits) as Array<keyof EstimateDetails>) {
    const raw = input[field];
    if (typeof raw !== 'string' || raw.length > fieldLimits[field] || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(raw)) {
      errors[field] = 'Please check this field.';
      continue;
    }
    value[field] = raw.trim();
    if (field !== 'details' && /[\r\n]/.test(value[field])) errors[field] = 'Use one line for this field.';
  }
  if (!value.name) errors.name = 'Enter your name.';
  if (!/^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/.test(value.email)) errors.email = 'Enter an email address we can reply to.';
  if (!value.neighborhood) errors.neighborhood = 'Enter your neighborhood or ZIP code.';
  if (!(estimateServices as readonly string[]).includes(value.service)) errors.service = 'Choose the type of work.';
  if (value.details.length < 10) errors.details = 'Tell us a little more about the room and the work.';
  if (!(estimateSources as readonly string[]).includes(value.heardFrom)) errors.heardFrom = 'Choose how you found LOKEIL.';
  return { value, errors, valid: Object.keys(errors).length === 0 };
}

export function estimateBrief(value: EstimateDetails) {
  return [
    'Hello LOKEIL,', '',
    ...(value.name ? [`Name: ${value.name}`] : []),
    ...(value.email ? [`Reply email: ${value.email}`] : []),
    `Callback number: ${value.phone || 'Not provided'}`,
    `Project neighborhood: ${value.neighborhood}`, `Room or service: ${value.service}`,
    '', 'What I would like to change:', value.details,
    '', `Timing: ${value.timing || 'Still planning'}`,
    `How I found LOKEIL: ${value.heardFrom}`,
    '', 'I can send current room photos and approximate measurements.',
  ].join('\n');
}
