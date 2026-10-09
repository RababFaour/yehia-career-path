This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Yehia Career Path

## Project Description

This project is a career dashboard built with Next.js and React. It helps organize career-related information and practice web development.

## How to Run Locally

1. Install Node.js.
2. Open a terminal in the project folder.
3. Run "npm install".
4. Run "npm run dev".
5. Open http://localhost:3000 in your browser.

## Explain Choices

-I used "await" when reading "params" because "params" is asynchronous in newer versions of Next.js. It allows me to get the route parameters before using them.

-The route ID is a string because URL parameters are received as text. I use the ID as a string when working with the route.

-The dashboard layout contains shared elements, such as navigation and the sidebar. Each dashboard page contains its own specific content.

Open [http://localhost:3000/](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
