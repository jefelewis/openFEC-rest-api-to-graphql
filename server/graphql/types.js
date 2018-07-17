// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getCandidateByID(candidate_id: String): Candidate
    getAllCandidates: AllCandidates
    getCommitteeByID(committee_id: String): Committee
    getAllCommittees: [Committee]
  }

  type Pagination {
    pages: Int
    per_page: Int
    page: Int
    count: Int
  }

  type AllCandidates {
    api_version: String
    results: [Candidate]
    pagination: Pagination
  }
  
  type AllCommittees {
    api_version: String
    results: [Committee]
    pagination: Pagination
  }

  type Candidate {
    active_through: [String]
    address_city: String
    address_state: String
    address_street_1: String
    address_street_2: String
    address_zip: String
    candidate_id: String
    candidate_inactive: Boolean
    candidate_status: String
    cycles: Int
    district: String
    district_number: Int
    election_districts: String
    election_years: Int
    federal_funds_flag: Boolean
    first_file_date: String
    flags: String
    has_raised_funds: Boolean
    incumbent_challenge: String
    incumbent_challenge_full: String
    last_f2_date: String
    last_file_date: String
    load_date: String
    name: String
    office: String
    office_full: String
    party: String
    party_full: String
    state: String
  }

  type Committee {
    committee_type_full: String
    committee_id: String
    committee_type: String
    designation: String
    organization_type: String
    party_full: String
    treasurer_name: String
    last_f1_date: String
    last_file_date: String
    name: String
    cycles: String
    party: String
    organization_type_full: String
    state: String
    candidate_ids: String
    filing_frequency: String
    designation_full: String
    first_file_date: String
  }

  

`;


// Exports
export default TYPEDEFS;