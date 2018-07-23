# Federal Election Commission (FEC) GraphQL Server
Operation Refactor America's wrapped Federal Election Commission's REST API (openFEC) to GraphQL API. The REST endpoints have been mapped as GraphQL types and resolvers. **Note: Using this API requires a free API Key,** which can be acquired here: https://api.data.gov/signup/. Once your API Key is received, go to ./config/config.js and enter the API key into APIKEY.

If you'd like to contribute to this project, please fork this repository and submit a pull request.

## On This Page
*  [About the Data](#about-the-data)
*  [About Operation Refactor America](#about-operation-refactor-america)
*  [GraphQL Server: Apollo Server](#graphql-server-apollo-server)
*  [GraphQL Server: Start](#graphql-server-start)
*  [GraphQL Server: Query](#graphql-server-query)
*  [GraphQL Server: Testing API Endpoints](#graphql-server-testing-api-endpoints)
*  [API Data: Candidate Data](#api-data-candidate-data)
*  [API Data: Committee Data](#api-data-committte-data)
*  [Example Query: ](#example-query-)

## About Operation Refactor America
Operation Refactor America is a not associated with any governement agency, but our goal is to empower citizens with transparent data. Only a fraction of government agencies provide public APIs, which are usually poorly documented, build on archaic REST architecture, and contain scattered data. Our mission is to retreive that valuable data and convert them into an intuitive and modern API using GraphQL Server.

## About the Data
The data comes directly from the Federal Election Commission's REST API (opeFEC). A summary of endpoints and documentation can be found here: https://api.open.fec.gov/developers/

## GraphQL Server: Apollo Server
This GraphQL server uses apollo-server-express and not Facebook's graphql-express.

## GraphQL Server: Start
    npm run server

## GraphQL Server: Query
    http://localhost:4000/graphiql

## GraphQL Server: Testing API Endpoints
    npm jest

## API Data: Candiate Data
Note: Search by Candidate ID **requires a Candidate ID**:

## API Data: Committee Data
Note: Search by Committee ID **requires a Committee ID**:


## Example Query: 
**Query:**



**GraphQL Result:**

