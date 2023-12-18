import * as ssh from "node-ssh";

const sshClient = new ssh.NodeSSH();

/**
 * 使用SSH连接服务器。
 *
 * @param {Object} sshInfo - SSH信息。
 * @param {string} sshInfo.host - 服务器的主机名或IP地址。
 * @param {number} sshInfo.port - 连接的端口号。
 * @param {string} sshInfo.username - 用于身份验证的用户名。
 * @param {string} sshInfo.password - 用于身份验证的密码。
 * @return {Promise<void>} 当连接成功时，返回一个解析的Promise，当连接失败时，返回一个带有错误的Promise。
 */
const connectServer = (sshInfo) => {
  return new Promise((resolve, reject) => {
    sshClient
      .connect(sshInfo)
      .then(() => {
        console.log(sshInfo.port + "连接成功");
        resolve();
      })
      .catch((err) => {
        console.log(sshInfo.port + "连接失败");
        reject(err);
      });
  });
};

export default {
  connectServer,
  ssh: sshClient,
};
