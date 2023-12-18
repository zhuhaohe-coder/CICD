import inquirer from "inquirer";
import config from "../config.js";

const commanderLine = async (args) => {
  // 通过命令行指定项目
  if (args.length >= 3) {
    return config.find((v) => v.value === args[2]);
  }
  //选择config中的项目
  else {
    const res = await inquirer.prompt([
      {
        type: "list",
        name: "project",
        message: "请选择发布的项目",
        choices: config,
      },
    ]);
    return config.find((v) => v.value === res.project);
  }
};

export default commanderLine;
