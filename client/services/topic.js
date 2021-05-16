import careerLadder from './career-ladder.js';
import { roleMetadata } from './role';

/**
 * default topic when no route defined
 */
export const DEFAULT_TOPIC = 'engineering-craftsmanship';

/**
 * hold translation of topic key to level, title of engineering
 */
export const topicMetadata = {
  'Engineering Craftsmanship': {
    icon: 'craft',
    link: 'engineering-craftsmanship'
  },
  'Project Leadership': {
    icon: 'leader',
    link: 'project-leadership'
  },
  'Business Involvement': {
    icon: 'business',
    link: 'business-involvement'
  },
  'Organizational Impact': {
    icon: 'impact',
    link: 'organizational-impact'
  }
};

/**
 * hold list of topics
 */
export const topics = Object.keys(topicMetadata);

/**
 * hold list of topics routes
 */
export const topicRoutes = Object.keys(topicMetadata).map((x) =>
  x.toLowerCase().split(' ').join('-')
);

/**
 * hold translation of section key to description, title of engineering ladder
 */
export const sectionMetadata = {
  Responsibilities: {
    description: "Things you're expected to do/know at this level"
  },
  Examples: {
    description:
      "Concrete things you're expected to be able to accomplish at this level"
  },
  'Anti-Patterns': {
    description:
      "Patterns of thought/action you're expected to avoid at this level"
  },
  Resources: {
    description:
      'Books/essays/blog posts that should help you improve at this level'
  }
};

/**
 * hold list of sections
 */
export const sections = Object.keys(sectionMetadata);

/**
 * @return {String} extract topic from url path
 */
export function getTopicFromURL() {
  if (location.pathname.split('/').length > 3) {
    return location.pathname.split('/').reverse()[0];
  }
  return DEFAULT_TOPIC;
}

/**
 * @return {Array<Object<String,String>>} topics from ladder JSON
 */
export function getTopics() {
  return Object.keys(careerLadder.Ladder).map((topic) => ({
    key: topic.split(' ').join('-').toLowerCase(),
    name: topic
  }));
}

/**
 * @params {String} topic a key to extract categories from
 * @return {Array<Object<String,String>>} topics from ladder JSON
 */
export function getCategoriesByTopic(topic) {
  return careerLadder.Ladder[topic].Topics;
}

/**
 * @return {String} transform regular case to start case
 */
export function startCase(string) {
  return string
    .split('-')
    .map((x) => {
      return (
        x.substring(0, 1).toUpperCase() + x.substring(1, x.length).toLowerCase()
      );
    })
    .join(' ');
}

/**
 * @return {Array<Object<String,String>>} items to do for specific role and topic
 */
export function getActionableItems({ topic, role }) {
  const [content] = Object.values(
    careerLadder.Ladder[startCase(topic)].Ladder.filter(
      (level) => roleMetadata[role].level === Object.keys(level)[0]
    )[0]
  );
  return content;
}
