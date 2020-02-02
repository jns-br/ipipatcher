const Result = require('./ResultModel');

class ResultRepo {
  async saveResult (result) {
    try {
      const extraversion = this.getExtraversion(result);
      const agreeableness = this.getAgreeableness(result);
      const conscientiousness = this.getConscientiousness(result);
      const neuroticism = this.getNeuroticism(result);
      const imagination = this.getImagination(result);

      const entry = Result({extraversion, agreeableness, conscientiousness, neuroticism, imagination});
      await entry.save();
      return {extraversion, agreeableness, conscientiousness, neuroticism, imagination};
    } catch (err) {
      console.error('DB Error:', err.message);
      throw err
    }
  }

  getExtraversion (result) {
    const {lifeOfParty, talkAtParties, dontTalk, keepInBackground} = result;
    return {
      lifeOfParty,
      talkAtParties,
      dontTalk,
      keepInBackground
    }
  }

  getAgreeableness (result) {
    const {sympathize, othersEmos, interestInOthers, othersProblems} = result;
    return {
      sympathize,
      othersEmos,
      interestInOthers,
      othersProblems
    }
  }

  getConscientiousness (result) {
    const {chores, order, forgetThings, mess} = result;
    return {
      chores,
      order,
      forgetThings,
      mess
    }
  }

  getNeuroticism (result) {
    const {moodSwings, upset, relaxed, blue} = result;
    return {
      moodSwings,
      upset,
      relaxed,
      blue
    }
  }

  getImagination (result) {
    const {vividImagination, abstractUnderstanding, abstractInterest, noImagination} = result;
    return {
      vividImagination,
      abstractUnderstanding,
      abstractInterest,
      noImagination
    }
  }
}

module.exports = new ResultRepo();
