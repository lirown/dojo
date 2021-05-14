import careerLadder from './career-ladder.js';
import { startCase } from './topic';

/**
 * default role when no route defined
 */
export const DEFAULT_ROLE = 'software-engineer';

/**
 * hold translation of role key to level, title of engineering
 */
export const roleMetadata = {
  'entry-level-engineer': {
    level: 'Dan 1',
    title: 'Entry-level Engineer / Junior Engineer'
  },
  'software-engineer': { level: 'Dan 2', title: 'Software Engineer' },
  'senior-software-engineer': {
    level: 'Dan 3',
    title: 'Senior Engineer, Tech Lead'
  },
  'staff-software-engineer': {
    level: 'Dan 4',
    title: 'Staff Engineer, Domain Owner'
  },
  'principal-software-engineer': {
    level: 'Dan 5',
    title: 'Principal Engineer, System Architect'
  }
};

/**
 * @return {String} extract role from url path
 */
export function getRoleFromURL() {
  if (location.pathname.split('/').length > 3) {
    return location.pathname.split('/').reverse()[0];
  }
  return DEFAULT_ROLE;
}

/**
 * @return {Array<Object<String,String>>} roles from ladder JSON
 */
export function getRoles() {
  return Object.values(careerLadder.Meta.Dans).map((role) => ({
    key: role.name.split(' ').join('-').toLowerCase(),
    name: role.name
  }));
}

/**
 * @return {Array<Object<String,String>>} items to do for specific role and topic
 */
export function getActionableItems() {
  const { topic, role } = this.location.params;
  const [content] = Object.values(
    careerLadder.Ladder[startCase(topic)].Ladder.filter(
      (level) => roleMetadata[role].level === Object.keys(level)[0]
    )[0]
  );
  return content;
}
