const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const fetch = require("node-fetch");

const port = 4001;
const apiUrl = "http://localhost:3000";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// The @key directive defines the entity's primary key, which consists of one or more of the type's fields.
const typeDefs = gql`
  # This "Course" type defines the queryable fields for every course in our data source.
  type Course @key(fields: "id") {
    id: ID!
    name: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  extend type Query {
    course(id: ID!): Course
    courses: [Course]
    fetchCourse(id: ID!): Course
  }
`;

// Resolvers tell Apollo Server how to fetch the data associated with a particular type.
const resolvers = {
  Course: {
    //  A reference resolver tells the gateway how to fetch an entity by its @key fields:
    __resolveReference(ref) {
      return fetch(`${apiUrl}/courses/${ref.id}`).then((res) => res.json());
    },
  },
  Query: {
    course(_, { id }) {
      return fetch(`${apiUrl}/courses/${id}`).then((res) => res.json());
    },
    courses() {
      return fetch(`${apiUrl}/courses`).then((res) => res.json());
    },
    fetchCourse(_, { id }) {
      return fetch(`${apiUrl}/courses/${id}`).then((res) => res.json());
    },
  },
};

const server = new ApolloServer({
  // A function that takes an array of GraphQL schema modules and returns a federation-ready schema based on those modules:
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port }).then(({ url }) => {
  console.log(`Course service running at ${url}`);
});
