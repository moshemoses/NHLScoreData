import DataChecker from "../DataChecker";
const responseData = require("./testingRes");
const lodash = require("lodash");

test("mapScores should perform correctly", () => {
  let checkData = new DataChecker();
  let input = responseData.dates[0].games;
  let res = checkData.mapScores(input);
  expect(Object.keys(res).length).toBe(4);
});

test("didTeamScore should perform correctly", () => {
  let checkData = new DataChecker();
  let input = responseData.dates[0].games;
  let res = checkData.mapScores(input);
  checkData.currentScores = res;

  const newInput = lodash.cloneDeep(input);
  newInput[0].teams.away.score = 3;
  let newMappedScores = checkData.mapScores(newInput);

  const teamsWhichScoreUpdated = checkData.didTeamsScoreCheck(newMappedScores);
  expect(Object.keys(teamsWhichScoreUpdated).length).toBe(1);
});
