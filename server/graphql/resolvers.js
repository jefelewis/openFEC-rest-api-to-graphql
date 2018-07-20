// Imports: Node Fetch
import axios from 'axios';

// Imports: API Key
import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/openFEC-rest-api-to-graphql/config/config.js'


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    // Get Candidate by ID
    getCandidateByID: (parent, args) => {
      return axios.get(`https://api.open.fec.gov/v1/candidate/${args.candidate_id}/?per_page=100&api_key=${APIKEY}&page=1&sort=name`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get all Candidates
    getAllCandidates: (parent, args) => {
      return axios.get(`https://api.open.fec.gov/v1/candidates/?per_page=100&api_key=${APIKEY}&page=1&sort=name`)
        .then((response) => response.data)
        .catch((error) => console.log(error))
    },
    // Get Committee by ID
    getCommitteeByID: (parent, args) => {
      return axios.get(`https://api.open.fec.gov/v1/candidate/${args.committee_id}/?per_page=100&api_key=${APIKEY}&page=1&sort=name`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get all Committees
    getAllCommittees: async (parent, args) => {
      return axios.get(`https://api.open.fec.gov/v1/committees/?per_page=100&api_key=${APIKEY}&page=1&sort=name`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    }
  }
};

// Exports
export default RESOLVERS;