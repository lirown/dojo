/**
 * Mapping between roles and labels
 */
export const ROLES = {
  ENTRY: 'Entry Level Engineer',
  NORMAL: 'Software Engineer',
  SENIOR: 'Senior Software Engineer',
  PRINCIPAL: 'Principal Software Engineer',
  STAFF: 'Staff Software Engineer'
};

/**
 * Mapping between roles and labels
 */
export var quizQuestions = [
  {
    question:
      'When it’s unclear why you need to build a certain capability, what do you do?',
    answers: [
      {
        content: 'As long as I understand the task, it’s fine with me',
        type: ROLES.ENTRY
      },
      {
        content: 'Ask my manager, this is their job',
        type: ROLES.NORMAL
      },
      {
        content:
          'I feel comfortable talking with various people (product, sales, etc.) and figuring out the answer',
        type: ROLES.SENIOR
      },
      {
        content:
          "I’m usually the one who figure these thing out for others. That's how I work",
        type: ROLES.PRINCIPAL
      }
    ]
  },
  {
    question:
      'When you lead projects, how big are they (number of people involved / time)?',
    answers: [
      {
        content: "I help with other projects; haven't lead one myself yet",
        type: ROLES.ENTRY
      },
      {
        content: 'I work by myself / up to a few weeks',
        type: ROLES.NORMAL
      },
      {
        content:
          'Me and 2-3 more people from my team / a few weeks to a few months',
        type: ROLES.SENIOR
      },
      {
        content:
          'Me and 5-15 people from various teams, for a few weeks to a few months',
        type: ROLES.STAFF
      },
      {
        content:
          'I lead some of the biggest initiatives in the company, having at least 10 people working with me for more than a year',
        type: ROLES.PRINCIPAL
      }
    ]
  },
  {
    question:
      'Do you know well the company’s goals for the year and why these goals were chosen?',
    answers: [
      {
        content:
          'Not really. I remember some numbers but not more than that. I don’t think it’s needed for me to work.',
        type: ROLES.ENTRY
      },
      {
        content:
          'Yes, I know the goals well. I don’t know the rational for picking them',
        type: ROLES.NORMAL
      },
      {
        content:
          'I can explain the goals and why they’re critical for our success to other teammates',
        type: ROLES.SENIOR
      },
      {
        content:
          'I use the company’s goals to attract talent during interviews and while helping to onboard new teammates',
        type: ROLES.PRINCIPAL
      }
    ]
  },
  {
    question: 'Who usually hears from you?',
    answers: [
      {
        content: 'I update my manager on my progress.',
        type: ROLES.ENTRY
      },
      {
        content: 'My teammates. I provide context on my work.',
        type: ROLES.NORMAL
      },
      {
        content:
          'I tend to update bigger forums around the projects I lead, or things I did to make others’ life easier',
        type: ROLES.SENIOR
      },
      {
        content:
          'It’s very common to hear from me on various projects and initiatives by email, Slack and f2f. Many people outside of my team know my work.',
        type: ROLES.PRINCIPAL
      }
    ]
  },
  {
    question:
      'If others are working on a big project (>6 months effort), when are they coming to consult with you?',
    answers: [
      {
        content: 'Very rarely. Maybe if it’s around code I wrote.',
        type: ROLES.ENTRY
      },
      {
        content:
          'Here and there. I do have some expertise in specific types of systems or solutions that people want to leverage my knowledge for',
        type: ROLES.NORMAL
      },
      {
        content:
          'People consult with me on big projects where I have context - from making sure requirements are solid to the solutions and tradeoffs they have in mind',
        type: ROLES.SENIOR
      },
      {
        content:
          'People consult with me on everything they feel is a big challenge. Even if I don’t have specific context, they feel comfortable sharing and getting my perspective.',
        type: ROLES.PRINCIPAL
      }
    ]
  }
];

/**
 * Will return the level of engineeing by the answers submitted.
 * @param {Object} answers of the quiz questions.
 * @returns {String} with the role resulted by quiz
 */
export function getQuizResult({ answers }) {
  const roles = Array.from(new Set(answers)).filter((x) => x !== undefined);

  if (roles.length === 1 && roles.includes(ROLES.ENTRY)) {
    return 'entry-level-engineer';
  } else if (
    !roles.includes(ROLES.ENTRY) &&
    !roles.includes(ROLES.NORMAL) &&
    !roles.includes(ROLES.SENIOR) &&
    !roles.includes(ROLES.STAFF)
  ) {
    return 'principal-software-engineer';
  } else if (
    !roles.includes(ROLES.ENTRY) &&
    !roles.includes(ROLES.NORMAL) &&
    (roles.includes(ROLES.PRINCIPAL) || roles.includes(ROLES.STAFF))
  ) {
    params.role = 'staff-software-engineer';
  } else if (!roles.includes(ROLES.ENTRY) && !roles.includes(ROLES.NORMAL)) {
    return 'senior-software-engineer';
  }
  return 'software-engineer';
}
