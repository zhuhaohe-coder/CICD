/**
 * 在提供的SSH连接上执行命令。
 *
 * @param {Object} ssh - SSH连接对象。
 * @param {string} command - 要执行的命令。
 * @param {string} path - 命令的当前工作目录。
 * @return {Promise<Object>} 返回一个Promise，解析为命令执行的结果。
 */
const runCommander = (ssh, command, path) => {
  return new Promise((resolve) => {
    ssh
      .execCommand(command, {
        cwd: path,
      })
      .then((res) => {
        resolve(res);
      });
  });
};

export default runCommander;
