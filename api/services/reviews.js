const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const fetch = require("node-fetch");

const port = 4002;
const apiUrl = "http://localhost:3000";

const typeDefs = gql`
  type Review {
    id: ID!
    for_courses: [Course]
    rating: Int
    comment: String
  }
  extend type Course @key(fields: "id") {
    id: ID! @external
    reviews: [Review]
  }
  extend type Query {
    review(id: ID!): Review
    reviews: [Review]
  }
`;

const resolvers = {
  Course: {
    async reviews(course) {
      const res = await fetch(`${apiUrl}/reviews`);
      const reviews = await res.json();

      return reviews.filter(({ for_courses }) =>
        for_courses.includes(parseInt(course.id))
      );
    },
  },
  Review: {
    for_courses(review) {
      return review.for_courses.map((id) => ({ __typename: "Course", id }));
    },
  },
  Query: {
    review(_, { id }) {
      return fetch(`${apiUrl}/reviews/${id}`).then((res) => res.json());
    },
    reviews() {
      return fetch(`${apiUrl}/reviews`).then((res) => res.json());
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port }).then(({ url }) => {
  console.log(`reviews service ready at ${url}`);
});
