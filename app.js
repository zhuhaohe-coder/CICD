import build from "./utils/build.js";
import compressFile from "./utils/compressFile.js";
import commanderLine from "./utils/helper.js";
import path from "node:path";
import server from "./utils/ssh.js";
import runCommander from "./utils/handleCommand.js";
import uploadFile from "./utils/uploadFile.js";

const main = async () => {
  const CONFIG = await commanderLine(process.argv);
  const localFile = path.resolve(process.cwd(), CONFIG.targetFile);
  //打包
  await build(CONFIG.targetDir);
  //压缩文件
  await compressFile(CONFIG.targetDir, localFile);
  //连接服务器
  await server.connectServer(CONFIG.ssh);
  //删除同名文件
  await runCommander(
    server.ssh,
    "rm -rf " + CONFIG.releaseDir,
    CONFIG.deployDir
  );
  //上传文件
  await uploadFile(server.ssh, CONFIG, localFile);
  //解压
  await runCommander(
    server.ssh,
    "unzip " + CONFIG.releaseDir,
    CONFIG.deployDir
  );
  //删除压缩包
  await runCommander(
    server.ssh,
    "rm -rf " + CONFIG.releaseDir,
    CONFIG.deployDir
  );
  //更名
  await runCommander(
    server.ssh,
    "mv dist " + CONFIG.releaseDir,
    CONFIG.deployDir
  );
  console.log("over");
  process.exit(0);
};

main();
