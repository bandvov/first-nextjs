module.exports = {
  basePath: "",
  generateBuildId: async () => "001",
  webpack: (config, {
    buildId, dev, isServer, defaultLoaders, webpack,
  }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    return config;
  },
};
