import { photoStoryForImage } from '../blog/photoStories';
import { coreServices, siteData } from '../siteData';
import { servicePageContent } from './content';
import { servicePhotoReferences } from './photoReferences';

const listLabels: Record<string, string> = {
  projectFit: 'What the project can include',
  photoChecklist: 'Photos to bring to the conversation',
};

export function serviceMarkdown(path: string) {
  const content = servicePageContent[path];
  const service = coreServices.find((item) => 'href' in item && item.href === path);
  if (!content || !service) return null;
  const sections = Object.entries(content).flatMap(([key, entries]) => {
    if (typeof entries[0] === 'string') {
      return [`## ${listLabels[key] || 'Project planning'}`, ...entries.map((entry) => `- ${entry}`)];
    }
    return entries.flatMap((entry) => typeof entry === 'string' ? [] : [
      `## ${entry.title || entry.q}`,
      entry.body || entry.a || '',
      ...(entry.href ? [`[${entry.label || entry.title}](${siteData.siteUrl}${entry.href})`] : []),
    ]);
  });
  const references = servicePhotoReferences[path];
  return [
    `# ${service.title} in Queens`,
    service.summary,
    ...sections,
    ...(references ? [
      `## ${references.heading}`,
      references.intro,
      ...references.images.flatMap((image) => {
        const story = photoStoryForImage(image);
        return story ? [
          `### ${story.title}`,
          `![${story.visible.split('.')[0]}.](${siteData.siteUrl}${story.image})`,
          `[Read this photo story](${siteData.siteUrl}/blog/${story.slug})`,
        ] : [];
      }),
    ] : []),
    '## Request an estimate',
    `LOKEIL Renovation is based in ${siteData.location}. Service area: ${siteData.serviceArea}.`,
    `Call ${siteData.phoneDisplay} or email ${siteData.email}. Include the room, location, scope, current photos, and timing.`,
    `[Contact LOKEIL](${siteData.siteUrl}/contact)`,
    `Source: ${siteData.siteUrl}${path}`,
  ].join('\n\n');
}
