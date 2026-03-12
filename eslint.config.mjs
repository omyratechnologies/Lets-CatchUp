import next from "eslint-config-next";

const config = [
  ...next,
  {
    rules: {
      "react-hooks/purity": "off",
      "react/no-unescaped-entities": "off"
    }
  }
];

export default config;