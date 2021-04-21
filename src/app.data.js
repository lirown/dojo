 export default {
  "Meta": {
    "Dans": {
      "Dan 1": { "name": "Entry Level Engineer", "impact": "self" },
      "Dan 2": { "name": "Software Engineer", "impact": "team" },
      "Dan 3": { "name": "Senior Software Engineer", "impact": "team" },
      "Dan 4": { "name": "Staff Software Engineer", "impact": "teams" },
      "Dan 5": {
        "name": "Principal Software Engineer",
        "impact": "group/groups/company"
      }
    },
    "Sections": {
      "Responsibilities": "Things you're expect to do/know at this level",
      "Examples": "Concrete things you're expected to be able to accomplish at this level",
      "Anti-Patterns": "Patterns of thought/action you're expected to avoid at this level",
      "Resources": "Books/essays/blog posts that should help you improve at this level"
    }
  },
  "Ladder": {
    "Engineering Craftsmanship": {
      "Topics": [
        "Architecture",
        "Code writing skills",
        "Tests",
        "Operations",
        "Security",
        "Observability",
        "Costs optimizations",
        "Ownership",
        "Being a Chief"
      ],
      "Ladder": [
        {
          "Dan 1": {
            "Responsibilities": [
              "Focus on growth and learning the team's tech stack",
              "Contribute meaningfully to well scoped problems (with help from others)",
              "Write clean code and tests; iterate based on feedback",
              "Participate in code reviews and technical design sessions",
              "Learn the basics of debugging and the tools used for it",
              "Know when to pause and ask for help"
            ],
            "Examples": [
              "Deploy a high-quality scoped feature to production (including tests, CR, etc.)",
              "Investigate and fixe an interesting bug in one of the team's systems"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Being not self-motivated; needing someone to tell you what to do next",
                "remedy": "Cultivate autonomy"
              },
              {
                "anti-pattern": "Constantly veering into the weeds",
                "remedy": "Focus on the important things; follow the 80-20 rule"
              },
              {
                "anti-pattern": "Disregarding the team processes",
                "remedy": "Learn the team's processes well before criticizing; they're ofter there for a reason"
              },
              {
                "anti-pattern": "Working on too many things at once, not getting the important stuff done",
                "remedy": "Focus on one thing at a time, and do it well, then move on"
              }
            ],
            "Resources": [
              {
                "type": "book",
                "name": "Code Complete",
                "link": "https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670"
              },
              {
                "type": "book",
                "name": "Clean Code",
                "link": "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/"
              },
              {
                "type": "book",
                "name": "Refactoring",
                "link": "https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599/"
              }
            ]
          }
        },
        {
          "Dan 2": {
            "Responsibilities": [
              "Consistently follow best coding practices",
              "Defend your technical decisions in Code reviews",
              "Write maintainable code (i.e. code that's easy to read, refactor, add features to, etc)",
              "Provide helpful, timely code reviews",
              "Contribute to technical design in projects, including thinking through edge cases",
              "Participate in the team's on-call rotation, as applicable to the domain",
              "Understand how code fits into a broader technical context",
              "Break down large tasks into sub-tasks; give higher-level status updates on your progress",
              "Have a high-level understanding of the company's major systems (\"system overview\")",
              "Participate and contribute to design reviews in near-by scope"
            ],
            "Examples": [
              "Join on-call rotation for at least 2 services within the team's responsibility",
              "Guide a new team member on working effectively in relevant areas",
              "Have a good grasp on how the team's systems are being tested and deployed via CI/CD pipelines"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Failing to identify or communicate big roadblocks",
                "remedy": "Raise red flags early;  get unstuck quickly"
              },
              {
                "anti-pattern": "Not taking operational excellence seriously",
                "remedy": "Consider that you're setting an example for more junior devs; be proud of your work"
              },
              {
                "anti-pattern": "Providing solutions that are more complicated than necessary",
                "remedy": "There's beauty in simplicity and elegance; tried and tested is often better than the new shiny toy"
              },
              {
                "anti-pattern": "Preferring shallow progress over an in-depth understanding of code and context",
                "remedy": "You should be expanding your context and understanding; it might not seem so at the moment, but they'll server you much better later down the line that a quick win now"
              },
              {
                "anti-pattern": "Preferring patching symptoms rather than mitigating the core issue",
                "remedy": "Spend 2x time now to actually fix the problem, to save 10x time later when the bug reappears"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "What can developers learn from being on call?",
                "link": "https://jvns.ca/blog/2017/06/18/operate-your-software/"
              },
              {
                "type": "article",
                "name": "Excellence Through Code Reviewing",
                "link": "https://davidbolton.net/blog/2014/06/06/code-reviewing/"
              },
              {
                "type": "book",
                "name": "Release It!",
                "link": "https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software-dp-1680502395/dp/1680502395/"
              },
              {
                "type": "book",
                "name": "The Effective Engineer",
                "link": "https://www.amazon.com/Effective-Engineer-Engineering-Disproportionate-Meaningful/dp/0996128107/"
              }
            ]
          }
        },
        {
          "Dan 3": {
            "Responsibilities": [
              "Be an expert in the company's processes, while also helping to define and improve them",
              "Write meaningful, helpful code reviews",
              "Make well-reasoned design decisions, identifying potential issues, trade-offs, risks, and appropriate levels of abstraction",
              "Be proficient in all relevant technical skills, and able to move quickly, due to a deep understanding of large portions of the codebase (cross teams)",
              "Maintain awareness of industry trends and tools",
              "Debug expertly within your primary focus area",
              "Write tech specs and identify risks before starting major projects",
              "Set technical standards for the team",
              "Go out of your way to reduce complexity within the team's systems",
              "Become a Chief of at least one of the team's primary systems",
              "As a Chief of a system, define and drive the roadmap / vision for that system",
              "Produce high-quality postmortems (aka BetterNexts) from production incidents (or interesting wins)",
              "Take Security and Cost (cloud resources & time investment) into considerations when designing a technical solution"
            ],
            "Examples": [
              "During a code-review, be able to supplement comments with links to relevant resources or other examples, thus instructing the code committer",
              "Offer a quarterly roadmap of the system of which you are a Chief",
              "Be able to reason about \"buy vs. build\" when promoting technical initiatives (i.e. should we build a solution ourselves or buy an existing one)"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Not delegating. Always saying \u201cyes\u201d and suffer from burn-out or continuous loss of focus",
                "remedy": "Be mindful of your time and previous engagements; don't spread yourself too thin"
              },
              {
                "anti-pattern": "Letting details slip through the cracks",
                "remedy": "At your level of engineering competence, you're expected to be meticulous in your craft"
              },
              {
                "anti-pattern": "Over-emphasizing scaling or high availability far beyond the requirements (project/business needs)",
                "remedy": "While being mindful of scale and HA is important, sometimes a naive solution is good enough, and is able to get you up and running quickly"
              },
              {
                "anti-pattern": "Preferring local solutions to more global problems, especially if a problem is an obvious issue to multiple teams",
                "remedy": "Always think about the impact you're making; focusing only on your immediate surroundings limits the extent of your potential impact"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "On Being A Senior Engineer",
                "link": "https://www.kitchensoap.com/2012/10/25/on-being-a-senior-engineer/"
              },
              {
                "type": "article",
                "name": "Design Docs at Google",
                "link": "https://www.industrialempathy.com/posts/design-docs-at-google/"
              },
              {
                "type": "book",
                "name": "Patterns of Enterprise Application Architecture",
                "link": "https://www.amazon.com/Patterns-Enterprise-Application-Architecture-Martin/dp/0321127420"
              },
              {
                "type": "book",
                "name": "Working Effectively with Legacy Code",
                "link": "https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052/"
              }
            ]
          }
        },
        {
          "Dan 4": {
            "Responsibilities": [
              "Focus on technical decision making, leading work that affects one or more complex systems and mission-critical areas",
              "Consistently deliver code that sets the standard for quality and maintainability",
              "Have a broad understanding of the company's architecture and how your team's domain fits within it",
              "Systematically think through potential design impacts on other teams and the company",
              "Be a go-to expert in an area, with an increasingly strategic mindset",
              "Explore 3rd party vendors and new technologies with a sizable potential impact on the company",
              "Proactively offer ways to optimize the team's systems for costs saving, scale and operational stability",
              "Constantly keep in mind the company's security orientation (preferences, requirements, current tools, certifications) when designing and building systems",
              "Control security permissions (saying no when needed) within the team, to reduce the attack surface"
            ],
            "Examples": [
              "Integrate a new monitoring solution, including the understanding of the business needs, gathering of requirements/pains, getting buy-in, performing a DR, educating the users, and leading the execution end to end. Post-production measure impact and satisfaction.",
              "Lead a cross-team effort of documentation standardization",
              "Lead a conversation and implementation around shared libraries across team",
              "Lead a conversation and implementation around how we develop in a specific language (tooling, dev experience, best practices, etc.)",
              "Migrate a huge project to use a newer technology stack that will help increase engineering velocity"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Forcing your opinion (potentially abusing your \"title\") without giving enough attention to tradeoffs and hearing others",
                "remedy": "Be mindful of the fact that you can also be wrong, and never browbeat others; lead by conviction, not fear"
              },
              {
                "anti-pattern": "Focusing only on 1-2 teams or areas, instead of looking at the bigger picture (long-term horizon)",
                "remedy": "You're expected to be impacting multiple teams and areas; see where you can use your skill-set for maximum impact"
              },
              {
                "anti-pattern": "Giving up too quickly when trying to convince people (e.g. multiple teams, many opinions) due to high friction",
                "remedy": "People will inevitably disagree with you. That's ok. Consider their objections, but if you believe you're in the right, work harder on convincing them"
              },
              {
                "anti-pattern": "Falling in love with the solution instead of the problem. Be unable adopt others' opinions and execute on them.",
                "remedy": "There's usually nothing magical about your preferred solution; consider that there may be many equally good solutions to a problem. If others prefer and equally viable solution, it might be better to adopt it than digging in and defending yours"
              },
              {
                "anti-pattern": "Building solutions that are too \u201cshort-term\u201d oriented or not robust enough",
                "remedy": "Spend more time when gather requirements to enrich them, and make the final solution more robust"
              }
            ],
            "Resources": [
              {
                "type": "website",
                "name": "StaffEng",
                "link": "https://staffeng.com/"
              },
              {
                "type": "article",
                "name": "I Test in Prod",
                "link": "https://increment.com/testing/i-test-in-production/"
              }
            ]
          }
        },
        {
          "Dan 5": {
            "Responsibilities": [
              "Persistently debug the toughest issues throughout the entire stack, regardless of the environment; find the root cause or a viable workaround when others are unable to do so",
              "Be incredibly knowledgeable both inside and outside of the company in your area(s) of expertise",
              "Be the primary expert in multiple areas of our stack; deeply knowledgeable in several domains",
              "Own (as a Chief) cross-team shared infrastructure",
              "Lead large (multi-year engineering effort) and complicated cross-teams/groups architecture changes",
              "Help the Security team by participating in the company's Risk Analysis. Provide useful insights on topics such as PII, change management, vulnerabilities, SSH/VPN access, Disaster Recovery, etc."
            ],
            "Examples": [
              "Leads a multi-year engineering effort",
              "Leads a successful adoption of a system (high impact on day to day development and ops) that will drastically change the way everyone in the group (or groups) works"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Acting only from a technical viewpoint, without considering the business needs or needed impact (e.g. coming up with suggestions that might not be relevant for the company in the next 12-18 months)",
                "remedy": "At your level, architectural decisions have vast implications; you should always be thinking on long term impact that's aligned with the company's business needs"
              },
              {
                "anti-pattern": "Not investing time to come up with concrete vision and ideas for improving the way we work",
                "remedy": "You're expected to be able to present a coherent articulation of your ideas, not just vague statements about \"making things better\""
              },
              {
                "anti-pattern": "Focusing only on R&D, without trying to understand the impact on other groups (where applicable)",
                "remedy": "Try to expand your horizons across department lines; your decisions likely affect other departments as well \u2014\u00a0be mindful of it"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "Undervalued Software Engineering Skills \u2014 Writing Well",
                "link": "https://blog.pragmaticengineer.com/on-writing-well/"
              },
              {
                "type": "article",
                "name": "Some Thoughts on the Principal Role",
                "link": "https://margint.blog/2020/10/07/some-thoughts-on-the-principal-role/"
              },
              {
                "type": "article",
                "name": "The SaaS CTO Security Checklist",
                "link": "https://www.sqreen.com/checklists/saas-cto-security-checklist"
              }
            ]
          }
        }
      ]
    },
    "Project Leadership": {
      "Topics": [
        "Design reviews",
        "Project management",
        "Getting things done",
        "Communication",
        "Alignment",
        "Delivery"
      ],
      "Ladder": [
        {
          "Dan 1": {
            "Responsibilities": [
              "Deliver well-defined small tasks, holding yourself accountable",
              "Make steady progress on tasks; know when to ask for help in order to get unblocked",
              "Learn relevant tools and resources, while developing your productivity skills",
              "Build effort-estimation skills",
              "Seek input from colleagues with area expertise"
            ],
            "Examples": [
              "Able to scope a feature in Asana/Jira, including tests, monitoring, alerts, code-review and everything else needed to deliver a high quality feature"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Moving to writing code too quickly, without first fully scoping the effort/project",
                "remedy": "Make sure you know what you're going to do before starting coding; this will help you avoid having to backtrack later"
              },
              {
                "anti-pattern": "Avoiding raising a flag when stuck on the same problem for too long",
                "remedy": "Don't be afraid to ask for help; while some determination is commendable, don't waste too much time on a problem that someone else has already solves"
              },
              {
                "anti-pattern": "Failing to report on progress in a timely manner (\"going dark\")",
                "remedy": "Almost always prefer \"push\" to \"pull\" communications; letting others know where you stand on a task is a sure sign of ability and confidence"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "How Context Switching Sabotages Your Productivity",
                "link": "https://blog.doist.com/context-switching/"
              },
              {
                "type": "presentation",
                "name": "Time Management?",
                "link": "https://docs.google.com/presentation/d/17K27cBs_dRnW512tJrewP25AHpiUPt7JxUcxjgSxSjs/mobilepresent?slide=id.g1f5fb32513_2_45"
              }
            ]
          }
        },
        {
          "Dan 2": {
            "Responsibilities": [
              "Work autonomously to estimate and deliver medium to large tasks",
              "Master the ability to break down tasks, plan, estimate, and cut scope in order to ship on time",
              "Detect problems in requirements and notify the relevant stakeholders",
              "Attempt to identify major pitfalls in the project ahead of time",
              "Understand how people use the product/service you're building, and be able to adjust accordingly",
              "Proactively inform on issues, risks and delays in tasks",
              "Deliver design reviews for small projects",
              "Include in your project planning/estimation work such as documentation, tests, monitoring, alerts, costs, security considerations, and anything else that is required for maintenance"
            ],
            "Examples": [
              "Conduct a high quality Design Review (DR) for a 2-3w project",
              "Lead the execution of a medium-size project (2-4w) with 1-2 more people in the team",
              "Continue to support (as an owner) a project beyond shipping to production (a few weeks after the project is deployed and running)"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Placing blame on project delays elsewhere",
                "remedy": "As the owner of a project, the buck stops with you; be confident that others will recognize when a delay is not your fault, but still take responsibility for it"
              },
              {
                "anti-pattern": "Getting stuck on unimportant details; not utilize the 80-20 rule",
                "remedy": "Some parts of the project bring most of its value; focus on those first and foremost, before moving on to polishing touches"
              },
              {
                "anti-pattern": "Not communicating progress related to the project",
                "remedy": "Regardless of whether the lack of progress is due to you or others, a steady stream of communications is imperative to let your superiors know where the project stands"
              }
            ],
            "Resources": [
              {
                "type": "video",
                "name": "Scaling Yourself",
                "link": "https://www.youtube.com/watch?v=FS1mnISoG7U"
              },
              {
                "type": "article",
                "name": "We are All Product Owners! An Impact Guide for Engineers*",
                "link": "https://medium.com/@erand/we-are-all-product-owners-an-impact-guide-for-engineers-76a2b4342c74"
              }
            ]
          }
        },
        {
          "Dan 3": {
            "Responsibilities": [
              "Be able to take ownership to lead and deliver large projects (>4w of work) that spans multiple systems, with support from peers",
              "When acting as the Project Lead on a project, communicate progress to stakeholders and ensure alignment",
              "Be persistent in the face of roadblocks; dispatch them efficiently, pulling in others as necessary",
              "Scope and stage work into well-defined milestones to avoid a monolithic deliverable",
              "Be accountable end-to-end, through planning, development, deploy, monitoring and maintenance",
              "Set realistic deadlines, estimating methodically based on iterative learning",
              "Be able to question and push back on tasks/requirements",
              "Be able to reduce complexity and prioritize in alignment with company goals",
              "Handle well open-ended problems and ambiguity",
              "Suggest steps to mitigate impact of delays in projects",
              "Require minimal direction / oversight",
              "Ensure projects don't lose momentum",
              "Deliver design reviews for complex projects",
              "Seek empirical validation through PoCs, tests and research"
            ],
            "Examples": [
              "Being able to separate requirements/pains from the solution, and, if needed, agree on the former before the latter. Avoid coming up with a solution that many people will think solves the wrong requirement (or are confused due to not knowing what the requirements are)",
              "Lead a Design Review of a fairly large project (more than 6 weeks of engineering time)",
              "Mitigate risks of a complex DR which requires a new technology or uses a new capability, by doing proper research as part of the DR process (e.g. running a small-scale PoC to validate a risk/concern that might affect the DR)",
              "Get buy-in from other lead developers before presenting a DR to a wider audience"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Rushing to work on the solution before gathering and understanding business/analytical/technical needs",
                "remedy": "Time spent planning is payed back tenfold during execution"
              },
              {
                "anti-pattern": "Not stating clearly risks in a project and the way they will be mitigated",
                "remedy": "Risk mitigation is arguably the most important part of a Design Review; be sure to address risks early and with detail"
              },
              {
                "anti-pattern": "Being unable to lead other teammates in the project. Having problems with e.g. delegation, tasks assignment, solving roadblocks, communications around progress, etc.",
                "remedy": "Understand that there's only so much you can do on your own. The mark of a good leader is being able to work with others"
              },
              {
                "anti-pattern": "Not pushing back (and providing alternatives and justifications) on requirements that might add risk, add a lot of time to the project or make it extremely hard to maintain it in the long run",
                "remedy": "Taking ownership of a project means accepting responsibility for it; not pushing back on risky requirements is a sure way to end up with a project you hate supporting"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "Stepping Stones not Milestones",
                "link": "https://medium.com/@jamesacowling/stepping-stones-not-milestones-e6be0073563f"
              },
              {
                "type": "article",
                "name": "No Kings - How Do You Make Good Decisions Efficiently in a Flat Organization?",
                "link": "https://doist.com/blog/decision-making-flat-organization/"
              }
            ]
          }
        },
        {
          "Dan 4": {
            "Responsibilities": [
              "Plan and execute large projects with complex requirements and interdependencies across teams and systems",
              "Consistently deliver on-time and at a high level of quality",
              "Define key metrics and measure the project's impact",
              "Consistently reduce the complexity of projects in order to get more benefit with less work",
              "Contribute to all major architectural decisions and read all tech specs within your domain. Track status and consider implications for other systems",
              "Enable more junior engineers to take a leading role in designing solutions, by helping them understand requirements and organizational context",
              "Effectively prioritize your own workload and focus across many streams of work",
              "Market and advertise projects; create excitement for users and drive adoption",
              "Help define roadmaps and set visions for long-term projects",
              "Work closely with relevant Product Managers to gain context and understand business needs. Be able to then represent the business/product in future meetings with your teammates"
            ],
            "Examples": [
              "Explain a project's business impact (\"why do we do this?\") and tradeoffs to a wide audience. Build decision making context for others",
              "Know how to utilize meetings effectively (e.g. status meetings, daily, weekly sync) to drive project momentum and keep everyone aligned",
              "Act as a single-point-of-contact in the organization for a project. Don't require multiple managers to be involved in understanding the project's progress/status"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Struggling to raise flags and find alternative solutions when a teammate or a dependency is not keeping up, either in terms of quality or availability",
                "remedy": "Learn to think on your feet. Circumstances change, and you should be able to adapt, whether by redirecting manpower, changing requirements, delaying the project, or any other means"
              },
              {
                "anti-pattern": "Avoiding confrontations \u2014 struggling to resolve disagreements, explicitly stating your needs, etc.",
                "remedy": "Confrontations are inevitable, so it'll be nigh impossible to completely avoid them. Be sure you know *exactly* what the disagreement is about; it might be much smaller than it seems"
              },
              {
                "anti-pattern": "Trying to achieve too many things on your own, instead of relying on others around your \u2014 either by asking help or delegating tasks",
                "remedy": "Hopefully, you're surrounded by other competent people \u2014\u00a0take advantage of that fact, and work with them :)"
              },
              {
                "anti-pattern": "Inadvertently suppressing innovation from other engineers (e.g. by giving your own ideas first and loudest, criticizing without truly listening to new ideas or by giving the impression that there is only one right solution to a problem)",
                "remedy": "Be open to others, especially the more junior engineers; remember that you yourself was once a smart junior :)"
              }
            ],
            "Resources": [
              {
                "type": "book",
                "name": "Design it! From programmer to software architect",
                "link": "https://www.amazon.com/Design-Programmer-Architect-Pragmatic-Programmers/dp/1680502093/"
              },
              {
                "type": "book",
                "name": "Leading without Authority",
                "link": "https://www.amazon.com/Leading-Without-Authority-Co-Elevation-Collaboration/dp/0525575669/"
              },
              {
                "type": "article",
                "name": "System Design Cheatsheet",
                "link": "https://gist.github.com/vasanthk/485d1c25737e8e72759f"
              }
            ]
          }
        },
        {
          "Dan 5": {
            "Responsibilities": [
              "Be able to succinctly explain to management a project's goals, KPIs and milestones, at the right level of abstraction",
              "Successfully plan and deliver complex, multi team/system, long-term projects, including ones with external dependencies",
              "Be the go-to person on company-wide critical projects or initiatives",
              "Create a compelling technical vision with a company-level impact, anticipating future needs",
              "Be a role-model for balancing product and engineering concerns/risks and mitigations",
              "Initiate new projects \u2014 create buy-in, drive delivery and adoption",
              "Demonstrate great skills in project/time/energy management on multi-months projects, while keeping high momentum",
              "Organize and lead large groups of people from multiple teams/groups when working on a project"
            ],
            "Examples": [
              "Deal well with high friction as a result of cross-cutting concerns, by motivating and energizing yourself and others",
              "Distill large amounts of concerns/feedback into well defined actionable items, while solving the actual business needs of the project",
              "Respectfully and clearly explain why certain concerns or suggestions will not be done as a part of the project (due tradeoffs of time/value/risk)"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Letting friction (disagreements, unclear requirements) stall the project and kill momentum for the team that works on it. Not leading others well, leaving them feeling lost and unsure of what needs to be done",
                "remedy": "There are times when hard decisions need to be made, even if they're not perfect. So long as you're clear on risks, mitigations and tradeoffs, it's to push an imperfect solution"
              },
              {
                "anti-pattern": "Avoiding presenting dilemmas, tradeoffs and taking an active part in making a decision in a timely manner. Waiting for others to make the decision",
                "remedy": "As a principal engineer, you'll often be the most senior person working on a project. No one else will decide on the way forward for you on those occasions"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "Hitting the right level of abstraction",
                "link": "http://www.tombartel.de//2016/02/15/right-level-of-abstraction/"
              },
              {
                "type": "article",
                "name": "Making Engineering Team Communication Clearer, Faster, Better",
                "link": "https://review.firstround.com/making-engineering-team-communication-clearer-faster-better"
              }
            ]
          }
        }
      ]
    },
    "Business Involvement": {
      "Topics": [
        "Product",
        "Market understanding",
        "Precision",
        "New initiatives",
        "Scale",
        "Costs",
        "Security"
      ],
      "Ladder": [
        {
          "Dan 1": {
            "Responsibilities": [
              "Seek to understand what the company's product actually solves and how your customers interact with it",
              "Understand the high-level roles of the different departments in the R&D",
              "Understand and be able explain to others the business impact of your current task (e.g. during daily/weekly)"
            ],
            "Examples": [
              "Complete your onboarding, including around non-engineering departments, and be able to explain the concepts to others (e.g. your manager)",
              "Ask questions about how different departments in the company contribute to the product"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Having a \"code-monkey\" mindset \u2014 knowing how to deliver features but not being able to explain or not caring why they're worth doing",
                "remedy": "You'll find your work much more satisfying and meaningful if you're able to articulate the business needs of the features you're working on"
              },
              {
                "anti-pattern": "Looking \"down\" on other departments (outside of Engineering) \u2014 not understanding their work, thus discounting their needs/pains/contributions",
                "remedy": "Having strong engineers does not mean having a successful company; trust that the same people that collected great engineers also put thought into hiring amazing people in other departments"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "The Product-Minded Software Engineer",
                "link": "https://blog.pragmaticengineer.com/the-product-minded-engineer/"
              }
            ]
          }
        },
        {
          "Dan 2": {
            "Responsibilities": [
              "Understand the role of the team in the larger business context",
              "Initiate ideas affecting the team, explaining their urgency or priority with business justifications",
              "Begin understanding the pains of other teams around you (immediate internal customers)",
              "Have a basic understanding of where the company fits in its domain in the world \u2014 what's its complete offering, its differentiators vs. competitors, etc.",
              "Deepen your understanding of the high level roles of the teams in your department"
            ],
            "Examples": [
              "Can clearly explain to others (e.g. new employees) roles of teams in other departments",
              "Know, at least on a high level, how your team's systems impact the business (e.g. enabling others, directly affecting offering)"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Promoting ideas with purely technical merit, discounting business justifications",
                "remedy": "Your superiors aren't likely to greenlight such projects, which will leave you frustrated. Start from business needs, not tech; you can always choose cool tech once you know what the needs are (if applicable)"
              },
              {
                "anti-pattern": "Not considering or verifying costs when suggesting new ideas",
                "remedy": "Cost is one of the first factors experienced devs and managers consider, so before advancing a new idea, make sure you have a rough idea of how much it'll cost"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "Product Management Mental Models for Everyone",
                "link": "https://blackboxofpm.com/product-management-mental-models-for-everyone-31e7828cb50b"
              }
            ]
          }
        },
        {
          "Dan 3": {
            "Responsibilities": [
              "Understand well the pains of other teams around you (first circle / immediate internal customers)",
              "Proactively seek to talk with internal customers to understand their pains and how the team can serve them better",
              "Be able to clearly document and share your insights and suggestions from talking with other teams, so the team can learn from it and initiate ideas around it - some will be solved within the team, some will be given as feedback to other teams",
              "Take an interest in your company's business performance \u2014 understand the ARR, how margins affect the business, knows the big logos the company sold to, etc.",
              "Understand the roles of all the departments in the company, with focus on the sales pipeline",
              "Take costs, security and other business impacting aspects into consideration (e.g. when suggesting new initiatives, as part of DRs, etc.)"
            ],
            "Examples": [
              "Have a good understanding of your team's part of the sales cycle",
              "Be able to explain (at a high level) the full cycle of selling your company's product to a customer \u2014 marketing (generating a lead), pre-sale, sale, onboarding (CS/Ops) and serving the customer for the long run",
              "Share a document with the team, and other relevant teams, around information you got from your internal customers. Including a well-crafted summary of the biggest pains (with priorities), relevant suggestions (with high level cost/estimation and gain from that), and basic priorities as you see fit (with business justification)"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Not spending enough time to document proper pains & suggestions, keeping it all in your head and relying only on your memory",
                "remedy": "Others won't be able to act to whatever you keep in your head; documenting and sharing your insights is a crucial part of having them"
              },
              {
                "anti-pattern": "Spending too much of your time focusing on the team and the team's needs, instead of trying to increase your impact circle with other teams around you",
                "remedy": "One of the greatest benefits that come from increasing your understanding of the business, is the ability to increase the radius of your impact"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "Executing a Product Sunset",
                "link": "https://codeascraft.com/2019/02/01/executing-a-sunset/"
              },
              {
                "type": "article",
                "name": "How to Get Buy-in for Reducing Technical Debt",
                "link": "https://blog.coleadership.com/how-to-get-buy-in-for-reducing-technical-debt/"
              }
            ]
          }
        },
        {
          "Dan 4": {
            "Responsibilities": [
              "Understand the yearly goals and main projects of many of the group's teams, including their business impact",
              "Be aware of yearly organizational growth (e.g. new headcount) within the group, aimed at supporting business needs",
              "Be able to clearly articulate and explain to others (e.g. new or less experienced ICs) the motivation and business needs of your main systems",
              "Be able to lead one of the main pillars in the group and become a point-of-contact for it when talking with others (e.g. product offering, scale, costs, security, precision, etc.)",
              "Be continually involved in the team's backlog grooming \u2014 help the direct manager to balance tech debt, areas worth to invest in, areas where we should de-risk/mitigate potential threats, etc."
            ],
            "Examples": [
              "Lead the group's FinOps effort \u2014 tracking expenses, creating visibility, suggesting new ideas to cut costs, getting the buy-in, executing, reporting progress to the entire group, etc.",
              "Relevant VPs/directors in the org feel the need to invite you to relevant meetings, instead of inviting your direct manager. The IC (you) becomes the point-of-contact, and managers aren't needed in every conversation",
              "Take an active part in quarterly planning \u2014 suggest areas that are worth investing in, helping with high level estimations, consulting on priorities (with good reasoning behind them)"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Letting things live in a \"limbo\" for complicated domains (where ownership is a bit fluid). Being passive or unclear about time estimations, or making excuses on why we've reached this state",
                "remedy": "As they say, \"with great power comes great responsibility\". Consider stepping up and taking ownership of domains that other aren't willing to"
              },
              {
                "anti-pattern": "Not creating momentum in areas you lead - waiting for someone else to pick it up for you (e.g. your manager)",
                "remedy": "Being senior enough to lead an area implies trust from your manager. They need to know that you can be relied upon. Prove them right."
              },
              {
                "anti-pattern": "Acting as an owner (design & decision making) but avoiding the responsibility that comes with it (i.e. continuously supporting and pushing it forward)",
                "remedy": "Many engineers enjoy hacking, but don't enjoy maintenance as much. Often, though, a less flashy but well maintained product is much more valuable than an exciting new one that's hacked together but then left half finished"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "Your Org Is a Product",
                "link": "https://capwatkins.com/blog/your-org-is-a-product"
              },
              {
                "type": "book",
                "name": "The Innovator's Dilemma",
                "link": "https://www.amazon.com/Innovators-Dilemma-Revolutionary-Change-Business/dp/0062060244"
              }
            ]
          }
        },
        {
          "Dan 5": {
            "Responsibilities": [
              "Understand the yearly business goals, using those to define the main projects the group should invest in during the year",
              "As a leader of a main effort in the company, can represent it to management and outside of the company (customers, press/media, conferences, etc.)",
              "Be continuously involved in the group's backlog grooming \u2014 help various managers to balance tech debt, areas worth investing in, areas where we should de-risk/mitigate potential threats, etc.",
              "Provide feedback to extended managements (VP level and above) on things that might impose risk, ideas for better offering/security/scale, etc. Has a seat at the table when it comes to such conversations"
            ],
            "Examples": [
              "Put healthy pressure on management (VP level and above) to promote big ideas that are strategic to the company",
              "Be involved in quarterly planning of the group, relying on business needs. Able consult multiple Team Leaders"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Struggling to build good working relationships with the Team and Tech Leaders in the group, impacting their ability to initiate cross-team projects",
                "remedy": "Good relationships often matter more than technical know-how. Try to cultivate, it not friendship, then at least good working relationships with the other leading devs and managers in your area"
              },
              {
                "anti-pattern": "Being unable to translate your vast tech knowledge to the managerial level, making it harder for management to understand your value or why you should have a seat at the table",
                "remedy": "Clear articulation will often get you farther when communicating with non-technical management than the technical knowledge itself. You need to cultivate this ability in you, or you won't be able to get buy-in on the really large/important projects"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "Scaling a Technology Business is About Unscaling Technical Debt",
                "link": "https://businessofsoftware.org/2016/06/scaling-a-technology-business-is-about-unscaling-technical-debt-tall-jeff-stack-exchange-bos-usa-2015/"
              },
              {
                "type": "book",
                "name": "Shape Up - Stop Running in Circles and Ship Work that Matters",
                "link": "https://basecamp.com/shapeup/webbook"
              }
            ]
          }
        }
      ]
    },
    "Organizational Impact": {
      "Topics": [
        "Collaboration",
        "Knowledge sharing",
        "Team play",
        "Communication",
        "Mentorship and Sponsoring",
        "Processes",
        "Continuous improvement",
        "Recruiting",
        "Evangelism",
        "Well-being",
        "Onboarding experience",
        "Employees experience & retention"
      ],
      "Ladder": [
        {
          "Dan 1": {
            "Responsibilities": [
              "Build a good relationship with others in the team",
              "Maximize feedback from more experienced team members",
              "Proactively try to learn from others \u2014 takes advantage of the team members' knowledge and experience",
              "Learn and understand the team's processes and offer help where possible",
              "Adopt a good natured attitude \u2014 positive, welcoming, open to learn/listen",
              "Take an active part in the company's events and activities",
              "Be friendly to others and seek to get acquainted with people in and outside your group",
              "Take the time to introduce yourself and talk to others."
            ],
            "Examples": [
              "Capture in writing insights learned from others (e.g. how a system/process in the team work)",
              "Offer to join the on-call rotation to learn the team's systems",
              "Join company board-game nights, all-hands meetings, etc.",
              "Take special care to get to know someone outside the group."
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Being unwilling to join a team's efforts when not part of the task/project",
                "remedy": "While some project might not be immediately related to your current task, try to learn from others working on it nonetheless"
              },
              {
                "anti-pattern": "Asking the same questions or demonstrating a lack of knowledge-gathering due to \"laziness\" (e.g. not writing things after being taught them)",
                "remedy": "Asking questions is encouraged; asking the same questions signals an unwillingness to learn. Consider writing down whatever you learn"
              },
              {
                "anti-pattern": "Having a \"lone wolf\" attitude \u2014 not seeking to interact with others, in and outside the team",
                "remedy": "Eventually you'll have to work with others in and outside the team. There's only so far you'll be able to get on your own"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "Having productive conversations when I disagree",
                "link": "https://twitter.com/b0rk/status/980938694118002688"
              }
            ]
          }
        },
        {
          "Dan 2": {
            "Responsibilities": [
              "Understand the different roles each individual in the team has. Point to areas with a clear vacuum (lack of owner or knowledge)",
              "Onboard new teammates",
              "Take an active part in the team's day-to-day operations (on-call, urgent production issues on Slack, etc.)",
              "Demonstrate concern for the team's well-being; personally try to help people around you",
              "Be able to communicate teammates' issues to their direct manager early",
              "Understand the importance of having hard conversations with your peers, to provide and receive useful and authentic feedback",
              "Ask for feedback from others to continuously improve, both in craft and team work. Not waiting only for DRs/PRs to collect that feedback",
              "Willingly share domain knowledge with other teams"
            ],
            "Examples": [
              "Help to promote the company on social media (in an authentic way)",
              "Spot that one of the team members is not feeling great about their progress or an assignment, try to be friendly and assist with resolving it. If necessary, suggest talking with the direct manager",
              "Try to see if there are emergent patterns in the team, and reflect on those to the direct manager in order to verify we're working on resolving them",
              "Clearly provide useful code-review comments. If spotting a pattern, articulate it f2f, to share higher-level feedback (\"it's not only this PR, it's also a pattern that shows...\")",
              "Promote a job opening in the company on LinkedIn"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Feeling comfortable with not taking a fair share of the team's operations (or any other burden)",
                "remedy": "Earning the ire of others on the team is never a great way to progress"
              },
              {
                "anti-pattern": "Talking behind teammates' backs instead of trying to resolve issues directly",
                "remedy": "Hashing your difficulties with others might seem scary in the short term, but long-term it's the only way to foster trust and a good relationship"
              },
              {
                "anti-pattern": "Being difficult to work with due to the \"high tax\" people need to pay to provide feedback \u2014 always arguing instead of asking more questions, not taking responsibility, etc.",
                "remedy": "If you make it difficult to give you feedback, people will stop trying and you'll stagnate. Try seeing feedback not as saying anything about your as a person, but rather as a way to improve in an area you have less visibility in"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "Process is Documented Culture",
                "link": "https://john.do/process-documented-culture/"
              },
              {
                "type": "article",
                "name": "The Null Process",
                "link": "https://www.kateheddleston.com/blog/the-null-process"
              },
              {
                "type": "article",
                "name": "How To Give And Receive Effective Feedback",
                "link": "https://keen.io/blog/how-to-give-and-receive-effective-feedback/"
              }
            ]
          }
        },
        {
          "Dan 3": {
            "Responsibilities": [
              "Bring your unique talent to improve employee experience (consults with HR / team's manager to look for areas of pain)",
              "Show willingness to mentor less experienced teammates, either in technical or execution skills (e.g. communication, buy-in, task management etc.)",
              "Sponsor a less experienced team member with their direct manager. Help them to take on more challenging tasks, step outside of their comfort zone and build their confidence",
              "Have a significant role in the team's operational excellence \u2014 production issues, knowledge capturing and sharing, providing context to others",
              "Help to create and promote visibility of the team's achievements in the group/company",
              "Be able to act as the team's point of contact in various discussions \u2014 have both the EQ, know-how and tech skills to take commitments, figure out open questions and, above all, take ownership (or at least drive to a resolution)",
              "Play a part in the recruiting process \u2014 assist with the hiring process, crafting a Job Description, recommending missing skills that the team needs (to manager), etc.",
              "Help to build the company's external brand by leading or assisting the effort (e.g. write a blog post or review one by a team member, provide feedback on others' efforts)",
              "Consistently share information that can enrich others' knowledge and skills",
              "Able and willing to notice and alert relevant engineers/managers to a lack of proper documentation (FAQ, Q&A or more in-depth), or over-reliance people's memories",
              "Reduce organizational memory by committing knowledge to writing, and sharing it with the team/group"
            ],
            "Examples": [
              "Improve the developer experience by creating tools that would reduce tedious work",
              "Come up with hackathon swag for all of the employees",
              "Set up a fun team event",
              "Provide evidence (specific PR links, Asana links, etc.) when trying to sponsor a less experienced team member to their manager",
              "Send an email to the group with an interesting milestone for the team (why it's important, what does it mean for us, etc.) Even better \u2014 help someone else to write such an email, so they'll get the credit for it",
              "Review blog posts written by others; recommend topics to write about; write blog posts to cover interesting aspects of the team's challenges",
              "Share interesting blog posts / videos with takeaways worth noticing.",
              "Write posts in the Knowledge Base system on solving problems that many people deal with (e.g. CI issue, or how to use a tool)",
              "Write a System Overview and a Developer Handbook for the systems you own"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Being unwilling to bend to the team's needs. Focusing only on the ideal (\"pure\") solution and neglecting adoption and other considerations",
                "remedy": "Sometimes legacy/cost/know-how considerations make it better to choose a solution that's less \"perfect\" in theory, but actually better for the team"
              },
              {
                "anti-pattern": "Talking down to people, making them feel insecure",
                "remedy": "Just don't. People will resent and avoid you if you do that"
              },
              {
                "anti-pattern": "Taking credit for work done in cooperation with others (especially less experienced team members)",
                "remedy": "Always highlight the \"team effort\" aspect of projects. Remember that you once needed this extra push yourself"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "Being glue",
                "link": "https://noidea.dog/glue"
              },
              {
                "type": "article",
                "name": "The Hidden Costs That Engineers Ignore",
                "link": "https://www.effectiveengineer.com/blog/hidden-costs-that-engineers-ignore"
              },
              {
                "type": "book",
                "name": "How to Have Impossible Conversations",
                "link": "https://www.amazon.com/How-Have-Impossible-Conversations-Practical-dp-0738285323/dp/0738285323/"
              },
              {
                "type": "article",
                "name": "A Guide to Mindful Communication in Code Reviews",
                "link": "https://kickstarter.engineering/a-guide-to-mindful-communication-in-code-reviews-48aab5282e5e"
              }
            ]
          }
        },
        {
          "Dan 4": {
            "Responsibilities": [
              "Strive to become a \"Bar Raiser\" for the team (see resource below)",
              "Be able to suggest big changes to the way the team works by collecting feedback from internal customers, or by adopting good practices from other teams",
              "Represent the team's interest in larger discussions",
              "Detect a vacuum that the team can pick up and increase their ownership, and thus impact",
              "Come up with ideas for processes the team needs to add to support future growth or current pains/needs; lead buy-in and adoption",
              "Act as a backup for the team's manager in various discussions and assisting team members",
              "Understand well the team's problems and be able to take ownership by constantly trying to improve them",
              "Have a significant role in recruiting talent. Consistently interview potential hires",
              "Be able to be an evangelist for the company in events",
              "Improve the recruiting process by avoiding waste, reducing false positive (bad hires) and false negatives (hires we should have done)",
              "Show willingness to mentor experienced engineers in the group",
              "Improve or create documentation on important processes (e.g. write Better Nexts, conducting Design or Code Reviews, leading a Project, etc.)",
              "Mentor those that take part in the hiring process, striving to improve the quality of the interview \u2014 propose questions to ask, pitfalls to avoid, things to look for in candidates, summarizing an interview, etc."
            ],
            "Examples": [
              "Improve the team's process and tools for dealing with tickets",
              "Have the maturity to pick up and lead a high-impact project that no one else wants to lead (e.g. due to friction of different opinions, a lot of legacy code, etc.)",
              "Propose tools and processes for using common libraries in the company, even if the owner is in a different team",
              "Take the time to understand and improve processes when internal customers complain about them. Be able to provide some options on the spot, to see if they solve the majority of the problem. Summarize the feedback internally to create visibility and suggest improvements",
              "Suggest questions we should use in different phases of the interview process (including \"good answers\" and \"bad answers\")",
              "Prepare home assignments for interviews",
              "Prepare onboarding resources for new or less experienced employees",
              "Provide a well-crafted (concise, clear) document with relevant pains and requirements to someone working on a DR in a related area (e.g. a new tool that the team will use on daily basis, or one that has production implications)",
              "Join a meeting instead of the team's manager. Have the context and confidence to provide answers on the spot; take notes on open questions (and get them resolved quickly); have the trust and confidence of other members in the meeting"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Being only concerned with delivery without considering the pains and needs of the team. Not investing time to discuss areas of pain with the team's manager. Not thinking about increasing the team's velocity or happiness",
                "remedy": "Increasing the team's velocity is often a much better long-term investment of your time then working on your task, since it improves the performance of many people"
              },
              {
                "anti-pattern": "Demonstrating immaturity when speaking about the team's process, tools or problems with other teams or people outside of the organization. Being a judge and a (gossip) reporter instead of an owner",
                "remedy": "While it's ok to acknowledge issues with your team's offering, badmouthing it in front of other teams is a bad idea. Try to understand the pains others raise, offer suggestions/solutions where applicable, and bring the ideas back to the team"
              },
              {
                "anti-pattern": "Being too quick to rule out ideas or suggestions, without coming up with well-thought alternatives",
                "remedy": "Putting down ideas is easier than coming up with them. When ruling out another person's suggestion, consider the original need that sparked it, and see if you can come up with an alternative"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "Amazon's Current Employees Raise the Bar for New Hires",
                "link": "https://www.wsj.com/articles/SB10001424052702304753504579285133045398344"
              },
              {
                "type": "article",
                "name": "Lessons from Keith Rabois Essay 5 - How to Become a Magnet for Talent and Assess Talent",
                "link": "https://delian.io/lessons-5"
              },
              {
                "type": "article",
                "name": "6 Lessons I learned while implementing technical RFCs as a decision making tool",
                "link": "https://buriti.ca/6-lessons-i-learned-while-implementing-technical-rfcs-as-a-management-tool-34687dbf46cb"
              },
              {
                "type": "article",
                "name": "Organizational Debt is like Technical debt \u2013 but worse",
                "link": "https://steveblank.com/2015/05/19/organizational-debt-is-like-technical-debt-but-worse/"
              }
            ]
          }
        },
        {
          "Dan 5": {
            "Responsibilities": [
              "Promote (by getting buy-in) successful processes on the group level (or at least in multiple teams)",
              "Create opportunities for others to shine, by helping them identify areas we can afford to innovate and take risks for potentially great rewards",
              "Act as a mentor for other experienced engineers in the team, or recommend them for mentors outside of the team (or even company). Either in a specific skill/technology, or more broadly around how they promote their ideas and projects",
              "Take a proactive role in showcasing the team's strengths and achievements. Be able to represent them within the company (e.g. All Hands, or Extended Management sessions) or outside of it (e.g. conferences, blog posts)",
              "Play an integral part in the recruiting process for multiple teams (as a \"Bar Raiser\") \u2014 have a clear process and be able to provide clear feedback on candidates (biases-aware, strong examples, etc.)",
              "Be able to \"sell\" the company extremely well to potential hires",
              "Consistently reduce organizational memory by producing high-quality knowledge capturing (docs, lectures, arch topics) around the most critical parts of the system",
              "Act as a role model when promoting new initiatives for technologies or processes \u2014 be able to create buy-in, produce high quality content around it and implement the idea end to end",
              "Act as a leader around building an external brand for the company \u2014 take time to work on blog posts, lectures, open-source projects or anything else that might help attract talent"
            ],
            "Examples": [
              "Be perceived as a true believer in the company's mission and talent when talking with others outside of the company",
              "Create momentum by writing proper documentation (\"documentation spike/blitz\") in areas that desperately need it. Write a few docs and convince others to join. Announce it to others and proactively seek feedback on that",
              "Offer an experienced engineer to work together to help them improve a skill",
              "Present a big accomplishment of the team in an All-hands meeting",
              "Contribute to Reading Material for a new Engineer in the company",
              "Affect in a meaningful way the KPI of \"did you hear about our company\" (i.e. improves the chances that people will say \"Yes! I've heard a talk by X or read a blog post by Y that was fantastic..\")"
            ],
            "Anti-Patterns": [
              {
                "anti-pattern": "Only focusing on the pains of the group, while neglecting the needs of the team, which might lead to resentment by the teammates",
                "remedy": "While it's a good idea generally to progressively increase the radius of your impact, try not to neglect your team; show that you're still part of it"
              },
              {
                "anti-pattern": "Being passive about promoting the team members and achievements to the group or company",
                "remedy": "At this level, you have a loud void; use it to hype people and achievements to those who might not have the opportunity to hear from the more junior devs"
              },
              {
                "anti-pattern": "Creating the impression that big innovative new ideas should only come from Principal Engineers",
                "remedy": "This is, simply, wrong. Don't discourage more junior devs from suggesting (and, indeed, implementing) big projects"
              },
              {
                "anti-pattern": "Constantly failing to get buy-in for new initiatives due to lack of proper reasoning behind them (technical and/or business needs). Relying too much on the title",
                "remedy": "Being at this level doesn't mean everything you say is automatically accepted by all; you still need to convince people the same way as before"
              },
              {
                "anti-pattern": "Becoming numb to problems because you\u2019ve been living with them for a long time (or convincing yourself that there\u2019s no real problem there)",
                "remedy": "The fact that \"things have always been like this\" doesn't make it necessarily a good thing; if you see all new hires voicing their problems with a system/tool/process, take it seriously"
              }
            ],
            "Resources": [
              {
                "type": "article",
                "name": "\u2018Give Away Your Legos\u2019 and Other Commandments for Scaling Startups",
                "link": "https://review.firstround.com/give-away-your-legos-and-other-commandments-for-scaling-startups"
              },
              {
                "type": "article",
                "name": "Lies Enterprise Architects Told Me",
                "link": "https://www.youtube.com/watch?v=jSqgGdSvQ4E"
              },
              {
                "type": "article",
                "name": "WHAT DOES SPONSORSHIP LOOK LIKE?",
                "link": "https://larahogan.me/blog/what-sponsorship-looks-like/"
              }
            ]
          }
        }
      ]
    }
  }
}
