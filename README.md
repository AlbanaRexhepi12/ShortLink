## Getting Started

### Environment Setup
If you're not developing locally, you'll need to set up a few environment variables for the application to work properly.

1. Set the `HOST` Environment Variable
If you're deploying the app to a server or cloud environment, ensure that the HOST environment variable is set correctly to point to the correct host or IP address. This can be done by adding the following line to your .env file:

```bash
HOST=<your_host_address>
```

2. MongoDB Connection String
The application requires a connection to MongoDB. You can either:

Use a local MongoDB instance: If you're running MongoDB locally, ensure that it's up and running. You can start it and use the default connection string:

```bash
MONGODB_URI=mongodb://localhost:27017/your-database-name
```

Use MongoDB Cloud (Atlas): If you prefer to use a cloud-hosted MongoDB instance, sign up for MongoDB Atlas and create a cluster. After that, you'll be provided with a connection string that looks like this:

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-database-name?retryWrites=true&w=majority
```

Make sure to replace `<username>`, `<password>`, and `<your-database-name>` with your actual MongoDB credentials and database name.

Once the `HOST` and `MONGODB_URI` are set, the application should be able to connect to MongoDB and run smoothly.


### Starting the server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
