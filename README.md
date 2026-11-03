# 潮汐档案 / Tidal Archive

Ocean 的单页个人站原型。向下滚动即下潜：海面、人像、应用、档案。

## 运行

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。生产构建：`npm run build && npm start`。

## 路径

1. 首页海面 0 m：远浪，人物冲入中景，落成半身静帧，标题「潮汐档案 / Tidal Archive」，提示 SCROLL。
2. 下滚到人像 −12 m：风格化人像习作与身份卡（Ocean / 风格化人像 · AI 应用）。
3. 继续到应用 −28 m：三张示意产品卡。
4. 档案 −40 m：关于、联系、索引。
5. 页边深度尺可点，并随滚动高亮。章节之间有细潮汐线。

## 示意，不是真实数据

姓名、习作、产品文案和 `hello@tidal-archive.example` 都是占位。人像是 SVG 渐变习作，不是照片，也没有客户资料。产品卡不能打开真实应用。−40 m 的水印是一小枚 CSS 动画，不是三维场景。
