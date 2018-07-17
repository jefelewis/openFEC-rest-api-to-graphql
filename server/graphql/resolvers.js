// Imports: Node Fetch
const fetch = require('node-fetch');

// Imports: API Key
// import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/open311-rest-api-to-graphql/config/config.js'


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getCandidateByID: async (parent, args) => {
      const response = await
      fetch(`https://api.open.fec.gov/v1/candidate/${args.candidate_id}/?per_page=100&api_key=DEMO_KEY&page=1&sort=name`);
      return response.json();
    },
    getAllCandidates: async (parent, args) => {
      const response = await
      fetch(`https://api.open.fec.gov/v1/candidates/?per_page=100&api_key=DEMO_KEY&page=1&sort=name`);
      return response.json();
    },
    getCommitteeByID: async (parent, args) => {
      const response = await
      fetch(`https://api.open.fec.gov/v1/candidate/${args.committee_id}/?per_page=100&api_key=DEMO_KEY&page=1&sort=name`);
      return response.json();
    },
    getAllCommittees: async (parent, args) => {
      const response = await
      fetch(`https://api.open.fec.gov/v1/committees/?per_page=100&api_key=DEMO_KEY&page=1&sort=name`);
      return response.json();
    }
  }
};

// Exports
export default RESOLVERS;