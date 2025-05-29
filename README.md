# Next 15 Setup

This repo is the frontend application for Next 15 Setup.

## Prerequisites

You should be able to run the following command after the installation of [Node](http://nodejs.org/) version above 20.11.0.

## Steps to run the code locally

1. Clone the repository from Github onto your local machine and Goto Project

   ```
   git clone https://github.com/abii19/next-15-setup

   ```

2. Move to Cloned Repo

   ```
   cd next-15-setup

   ```

3. Use the node version above 20.11.0

   ```
   nvm use 20.11.0

   ```

4. Install dependencies in all packages

   ```
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

5. Set env vars

   Copy the existing .env.example file present.

   ```
   cp .env.example .env

   ```

6. Now can run the application locally with the command

   ```
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
