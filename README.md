# 潮汐档案 / Tidal Archive

Ocean 的单页个人站原型。向下滚动即下潜：海面、作品、照片、关于。

## 运行

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。生产构建：`npm run build && npm start`。

## 路径

1. 海面 0 m：人物槽、名字 Ocean、一行定位、可点的简历链接。进场只播放一次。
2. 作品 −6 m：三张示意项目卡。节点为海沫绿。
3. 照片 −12 m：示意照片格，旁边是圆形 FIELD NOTE。节点为珊瑚。
4. 关于 −24 m：关于、示意简历、联系、索引。
5. 页边深度尺为 0 / −6 / −12 / −24，可点并随滚动高亮。

## 人物槽

占位图在 `public/character/`。现在页面只用 `main.svg`。`coding.svg` 与 `camera.svg` 留着，等真实人物画换上同名文件。

## 示意，不是真实数据

姓名、项目、照片、简历和 `hello@tidal-archive.example` 都是占位，页面上标着「示意」。没有三维场景。
