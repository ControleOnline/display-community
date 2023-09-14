module.exports = (api) => {
  api.cache(true);

  const isProduction = process.env.NODE_ENV === "production";

  const aliasPaths = {
    // Alias de caminho padrão
    "@controleonline": isProduction
      ? "./node_modules/@controleonline"
      : "./modules/controleonline",
  };

  return {
    presets: [
      "@quasar/babel-preset-app",
      api.caller((caller) => caller && caller.target === "node")
        ? { targets: { node: "current" } }
        : {},
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: aliasPaths,
        },
      ],
    ],
  };
};
