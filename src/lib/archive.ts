/** Illustrative copy only. Not a client, catalog, or live service. */

export const stations = [
  { id: "surface", en: "Surface", zh: "海面", meters: "0" },
  { id: "portrait", en: "Portrait", zh: "人像", meters: "−12" },
  { id: "build", en: "Build", zh: "应用", meters: "−28" },
  { id: "archive", en: "Archive", zh: "档案", meters: "−40" },
] as const;

export type StationId = (typeof stations)[number]["id"];

export const identity = {
  name: "Ocean",
  line: "风格化人像 · AI 应用",
  note: "示意身份。这一层是一组习作，不是客户档案。",
};

export const plates = [
  { id: "01", title: "远潮", caption: "渐变占位" },
  { id: "02", title: "肩线", caption: "渐变占位" },
  { id: "03", title: "侧影", caption: "渐变占位" },
  { id: "04", title: "静水", caption: "渐变占位" },
] as const;

export type PlateId = (typeof plates)[number]["id"];

export const portraitLede =
  "四帧风格化人像习作。灰与海沫的渐变占位，不是照片库。";

export const products = [
  {
    index: "01",
    name: "Lumen Index",
    kind: "AI 应用",
    summary: "把一组风格化人像整理成可检索的光线索引。示意产品，没有真实用户。",
    status: "示意",
  },
  {
    index: "02",
    name: "Foam Set",
    kind: "工作室工具",
    summary: "为肖像系列起草字幕与系列说明。数据为占位。",
    status: "示意",
  },
  {
    index: "03",
    name: "Drift",
    kind: "发布节律",
    summary: "用一张小小的潮汐表安排草稿发布。并非在线服务。",
    status: "示意",
  },
] as const;

export const buildLede = "三则示意中的应用。没有账号，也没有数据。";

export const about = [
  "Ocean 把风格化人像和小型 AI 应用收在同一卷轴里。",
  "滚动即下潜：海面、人像、应用，最后是档案本身。",
  "姓名、作品、产品与邮箱都是示意，不含真实客户或订单。",
] as const;

export const contactEmail = "hello@tidal-archive.example";

export const colophon = "原型页面。人物、产品与邮箱均为示意。";
