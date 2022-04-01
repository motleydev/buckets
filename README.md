# Hasura + Vercel Integration Preview

The Hasura beta integration on Vercel allows for creating a new Hasura project and porting the environment variables over to an existing Vercel project. Utilizing the Github integration for both of these platforms, it's possible to achieve an elegant DX where one can migrate local development to cloud entirely through Github.

## Opinionated Stack

This project makes a couple of opinionated choices for integrating GraphQL with a Vercel project, but attempts to keep the overall surfafce are of additional code quite lean.

1. URQL is chosen for the front-end client, which additionally means:
   a. The URQL Provider pattern is implemented in `_app.jsx`
   b. A special client utility is utilized in the `lib` directory for handling SSR/Client contexts.
2. GraphQL Codgen is used to scaffold types and uses the URQL plugin for getting React Hooks.

## Getting started with CI/CD:

1. Fork this Repo
2. Create Vercel project from repo.
3. Tell Vercel where the nextjs code exists (www)
4. [Use this integration to add a Hasura project](https://vercel.com/integrations/hasura-v1)
5. On the Hasura side:
   a. Create a free Heroku DB.
   b. Create an `anonymous` role in the Hasura env vars.
   c. Apply CI/CD from hasura metadata.
6. Inspect vercel deploy.

## Iterating on this project

1. Clone this repository locally
2. Start Docker Compose `docker-compose up -d` from the root directory.
3. Navigate one instance of terminal to the `hasura directory` and start the metadata tracking Hasura console instance.
   a. `hasura console --admin-scret "myadminsecretkey"`
   b. Navigate to http:localhost:9695 (should occur automatically)
4. Navigate one instance of terminal to the `www` folder
   a. Run `yarn dev`
5. Make changes to Hasura in the console or changes to the front-end and push them to Github.
