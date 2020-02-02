const answers = {
  plus: [
    {
      text: 'Very Inaccurate',
      value: 1
    },
    {
      text: 'Moderately Inaccurate',
      value: 2
    },
    {
      text: 'Neither Accurate Nor Inaccurate',
      value: 3
    },
    {
      text: 'Moderately Accurate',
      value: 4
    },
    {
      text: 'Very Accurate',
      value: 5
    }
  ],
  minus: [
    {
      text: 'Very Inaccurate',
      value: 5
    },
    {
      text: 'Moderately Inaccurate',
      value: 4
    },
    {
      text: 'Neither Accurate Nor Inaccurate',
      value: 3
    },
    {
      text: 'Moderately Accurate',
      value: 2
    },
    {
      text: 'Very Accurate',
      value: 1
    }
  ]
}

const questions = {
  title: "Mini-IPIP Max Patch Survey",
  showProgressBar: "top",
  pages: [
    {
      questions: [
        {
          type: "radiogroup",
          name: "lifeOfParty",
          title: "I am the life of the party",
          choices: answers.plus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "talkAtParties",
          title: "I talk to a lot of different people at parties",
          choices: answers.plus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "dontTalk",
          title: "I don't talk a lot",
          choices: answers.minus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "keepInBackground",
          title: "I keep in the background",
          choices: answers.minus,
          isRequired: true
        }
      ]
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "sympathize",
          title: "I sympathize with other's feelings",
          choices: answers.plus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "othersEmos",
          title: "I feel other's emotions",
          choices: answers.plus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "interestInOthers",
          title: "I'm not really interested in others",
          choices: answers.minus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "othersProblems",
          title: "I'm not interested in other people's problems.",
          choices: answers.minus,
          isRequired: true
        }
      ]
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "chores",
          title: "I get chores done right away",
          choices: answers.plus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "order",
          title: "I like order",
          choices: answers.plus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "forgetThings",
          title: "I often forget to put things back in their proper place",
          choices: answers.minus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "mess",
          title: "I make a mess of things",
          choices: answers.minus,
          isRequired: true
        }
      ]
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "moodSwings",
          title: "I have frequent mood swings",
          choices: answers.plus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "upset",
          title: "I get upset easily",
          choices: answers.plus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "relaxed",
          title: "I am relaxed most of the time",
          choices: answers.minus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "blue",
          title: "I seldom feel blue",
          choices: answers.minus,
          isRequired: true
        }
      ]
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "vividImagination",
          title: "I have have a vivid imagination",
          choices: answers.plus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "abstractUnderstanding",
          title: "I have difficulty understanding abstract ideas",
          choices: answers.minus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "abstractInterest",
          title: "I'm not interested in abstract ideas",
          choices: answers.minus,
          isRequired: true
        },
        {
          type: "radiogroup",
          name: "noImagination",
          title: "I do not have a good imagination",
          choices: answers.minus,
          isRequired: true
        }
      ]
    }
  ]
};

module.exports = questions;


