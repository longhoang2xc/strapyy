module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('mongodb+srv://jonhon:Long123456.@cluster1.8r81q.mongodb.net/next-database?retryWrites=true&w=majority'),
        host: env('DATABASE_HOST', '127.0.0.1'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'blog'),
        username: env('DATABASE_USERNAME', null),
        password: env('DATABASE_PASSWORD', null),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
