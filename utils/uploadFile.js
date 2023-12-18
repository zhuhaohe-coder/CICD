/**
 * 使用SSH将文件上传到远程服务器。
 *
 * @param {Object} ssh - SSH客户端实例
 * @param {Object} config - 配置对象
 * @param {string} target - 要上传的文件的路径
 * @return {Promise} 一个在文件成功上传时解析的Promise，或在出现错误时拒绝的Promise
 */
const uploadFile = (ssh, config, target) => {
  return new Promise((res, rej) => {
    ssh
      .putFile(target, config.deployDir + config.releaseDir)
      .then(() => {
        console.log("上传成功");
        res();
      })
      .catch((err) => {
        console.log("上传失败");
        rej(err);
      });
  });
};

export default uploadFile;
