import gql from 'graphql-tag';

export const shopApiExtensions = gql`

    input AddressInput {
        street: String!
        city: String!
        postalCode: String!
        country: String!
    }

    input CreateSellerInput {
        firstName: String!
        lastName: String!
        emailAddress: String!
        password: String!
        phoneNumber: String!
        address: AddressInput!
        businessid: String!
    }

    input RegisterSellerInput {
        shopName: String!
        seller: CreateSellerInput!
    }

    extend type Mutation {
        registerNewSeller(input: RegisterSellerInput!): Channel
    }
`;
