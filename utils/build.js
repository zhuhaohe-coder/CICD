//打包
import { execSync } from "child_process";

/**
 * Builds the project by executing an external command synchronously.
 *
 * @param {string} path - The path of the project.
 * @return {Promise<void>} A promise that resolves when the build is complete.
 */

const build = (path) => {
  return new Promise((resolve) => {
    console.log(path);
    //同步执行外部命令
    execSync("pnpm run build", {
      cwd: path,
      stdio: "inherit",
    });
    resolve();
  });
};

export default build;
