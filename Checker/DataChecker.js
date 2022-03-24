import axios from "axios";
import config from "./config.js";

export default class DataChecker {
  constructor() {
    this.url = config.nhlApi;
    this.collection = {};
    this.TeamsMapping = {};
    this.currentScores = {};

    this.populateTeamsMapping();
  }

  async populateTeamsMapping() {
    const teamsObj = await this.getTeamIdsObject();
    this.mapTeamsIds(teamsObj);
  }

  async getTeamIdsObject() {
    try {
      let { data } = await axios.get(`${this.url}teams`);
      return data.teams;
    } catch (err) {
      console.log(err);
    }
  }

  mapTeamsIds(teamsArray) {
    let newTeamsMapping = {};
    teamsArray.forEach((team) => {
      newTeamsMapping[team.abbreviation] = team;
    });
    this.TeamsMapping = newTeamsMapping;
  }

  async getCurrentScores() {
    try {
      const currentScoreRawObject = await axios.get(
        "https://statsapi.web.nhl.com/api/v1/schedule"
      );
      return currentScoreRawObject.data.dates[0].games;
    } catch (err) {
      console.log("err", err);
    }
  }

  mapScores(rawScores) {
    let cleanedScores = {};
    rawScores.forEach((game) => {
      cleanedScores[game.gamePk] = game.teams;
    });

    return cleanedScores;
  }

  //Determine if any team scored since last check
  didTeamsScoreCheck(newScores) {
    if (!Object.keys(this.currentScores).length > 0) {
      return;
    }
    let teamThatScored = {};

    Object.keys(newScores).forEach((game) => {
      if (newScores[game].home.score !== this.currentScores[game].home.score) {
        const homeTeamId = newScores[game].home.team.id;
        teamThatScored[homeTeamId] = newScores[game];
      }

      if (newScores[game].away.score !== this.currentScores[game].away.score) {
        const awayTeamId = newScores[game].away.team.id;
        teamThatScored[awayTeamId] = newScores[game];
      }
    });

    return teamThatScored;
  }

  messageOnTeamScore(teamsWhichScored) {
    console.log(teamsWhichScored);
  }

  async checkAndUpdateOnInterval() {
    const rawCurrentScores = await this.getCurrentScores();
    const mappedScores = this.mapScores(rawCurrentScores);
    const teamsWhichScoreUpdated = this.didTeamsScoreCheck(mappedScores);

    if (Object.keys(this.currentScores).length) {
      this.messageOnTeamScore(teamsWhichScoreUpdated);
    }

    // only replace with new scores AFTER checking
    this.currentScores = Object.keys(mappedScores).length > 0 && mappedScores;
  }
}
