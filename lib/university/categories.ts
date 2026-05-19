import {
  getHomepageTopicSections,
  getPopularSkills,
  type UniversityTopic,
} from "./catalog";

export type { UniversityTopic } from "./catalog";

export type UniversityCategoryGroup = {
  description: string;
  id: string;
  title: string;
  topics: UniversityTopic[];
};

export type UniversityMarketplaceData = {
  featuredTopics: UniversityTopic[];
  groups: UniversityCategoryGroup[];
  popularSkills: UniversityTopic[];
};

export async function getUniversityMarketplaceData(): Promise<UniversityMarketplaceData> {
  const [sections, popularSkills] = await Promise.all([
    getHomepageTopicSections(),
    getPopularSkills(),
  ]);

  const groups = sections
    .filter((section) => section.topics.length > 0)
    .map((section) => ({
      id: section.key,
      title: section.title,
      description: section.description,
      topics: section.topics,
    }));

  return {
    groups,
    featuredTopics: groups.flatMap((group) => group.topics.slice(0, 3)),
    popularSkills,
  };
}
