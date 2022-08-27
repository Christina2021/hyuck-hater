const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

//schema
//db

const PORT = process.env.PORT || 3001;
const app = express();

//Apollo server start

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    //console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
})

//later create apollo server connection
