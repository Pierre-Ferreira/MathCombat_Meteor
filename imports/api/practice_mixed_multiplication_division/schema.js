import SimpleSchema from 'simpl-schema';

const PracticeMixedMultiplicationDivisionSchema = new SimpleSchema({
  playerID: {
    type: String,
    optional: false,
  },
  gameType: {
    type: String,
    optional: false,
  },
  gameTable: {
    type: SimpleSchema.Integer,
    optional: false,
  },
  gameNoOfQuestions: {
    type: SimpleSchema.Integer,
    optional: false,
  },
  gameQuestionTime: {
    type: SimpleSchema.Integer,
    optional: false,
  },
  numberOfCorrect: {
    type: SimpleSchema.Integer,
    optional: false,
  },
  percentageCorrect: {
    type: String,
    optional: false,
  },
  gameAnswers: {
    type: Array,
    optional: false,
  },
  'gameAnswers.$': Object,
  'gameAnswers.$.questionId': {
    type: SimpleSchema.Integer,
    optional: false,
  },
  'gameAnswers.$.questionOperand1': {
    type: SimpleSchema.Integer,
    optional: false,
  },
  'gameAnswers.$.questionOperand2': {
    type: SimpleSchema.Integer,
    optional: false,
  },
  'gameAnswers.$.questionOperator': {
    type: String,
    optional: false,
  },
  'gameAnswers.$.correctAnswer': {
    type: SimpleSchema.Integer,
    optional: false,
  },
  'gameAnswers.$.answerGiven': {
    type: String,
    optional: false,
  },
  'gameAnswers.$.answeredCorrectly': {
    type: Boolean,
    optional: false,
  },
  createdAt: {
    type: Date,
    optional: true,
  },
});

export default PracticeMixedMultiplicationDivisionSchema;
