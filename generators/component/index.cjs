const path = require("path");
const fs = require("fs");

/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: "Component Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name",
    },
  ],
  actions: (answers) => {
    const componentGeneratePath = "src/components/{{folder}}";
    return [
      {
        type: "add",
        path: componentGeneratePath + "/{{kebabCase name}}/index.ts",
        templateFile: "generators/component/index.ts.hbs",
      },
      {
        type: "add",
        path:
          componentGeneratePath + "/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: "generators/component/component.tsx.hbs",
      },
      {
        type: "add",
        path:
          componentGeneratePath +
          "/{{kebabCase name}}/{{kebabCase name}}.stories.tsx",
        templateFile: "generators/component/component.stories.tsx.hbs",
      },
    ];
  },
};
