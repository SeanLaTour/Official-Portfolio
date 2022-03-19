module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`RockSalt`],
        display: "swap",
      },
    },
  ],
};
