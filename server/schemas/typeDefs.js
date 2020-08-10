const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Category {
        _id: ID
        name: String
    }

    type Product {
        _id: ID
        name: String
        description: String
        image: String
        quantity: Int
        price: Float
        category: Category
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [Order]
    }

    type Auth {
        token: ID
        user: User
    }
`;

module.exports = typeDefs;