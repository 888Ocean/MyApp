/** Illustrative copy only. Not a client, catalog, or live service. */

export const stations = [
  { id: "surface", en: "Surface", zh: "海面", meters: "0", marker: "none" },
  { id: "work", en: "Work", zh: "作品", meters: "−6", marker: "project" },
  { id: "photos", en: "Photos", zh: "照片", meters: "−12", marker: "photo" },
  { id: "about", en: "About", zh: "关于", meters: "−24", marker: "none" },
] as const;

export type StationId = (typeof stations)[number]["id"];
export type DepthMarker = (typeof stations)[number]["marker"];

export const identity = {
  name: "Ocean",
  line: "风格化人像 · AI 应用",
};

/**
 * Placeholder character files. Real art replaces the file at the same path.
 *   /public/character/main.svg    — surface figure, used now
 *   /public/character/coding.svg  — later slot, not shown in this cut
 *   /public/character/camera.svg  — later slot, not shown in this cut
 */
export const characterSlots = {
  main: "/character/main.svg",
  coding: "/character/coding.svg",
  camera: "/character/camera.svg",
} as const;

export type CharacterSlotName = keyof typeof characterSlots;

export const products = [
  {
    index: "01",
    name: "Lumen Index",
    kind: "AI 应用",
    summary: "把一组风格化人像整理成可检索的光线索引。没有真实用户。",
  },
  {
    index: "02",
    name: "Foam Set",
    kind: "工具",
    summary: "为肖像系列起草字幕与系列说明。数据为占位。",
  },
  {
    index: "03",
    name: "Drift",
    kind: "发布节律",
    summary: "用一张小小的潮汐表安排草稿发布。并非在线服务。",
  },
] as const;

export const workLede = "三则示意项目。没有账号，也没有数据。";

export const photos = [
  { id: "01", title: "远潮", note: "示意旁注。不是实地记录。" },
  { id: "02", title: "岸线", note: "示意旁注。没有拍摄日期。" },
  { id: "03", title: "侧影", note: "示意旁注。不是底片。" },
  { id: "04", title: "静水", note: "示意旁注。格子里还不是照片。" },
] as const;

export const photoLede = "示意照片格。真实照片尚未放入。";

export const about = [
  "Ocean 把风格化人像和小型 AI 应用收在同一卷轴里。",
  "这一卷是示意骨架：海面、作品、照片，最后是关于。",
] as const;

export const resumeStub = "示意简历。经历、年份与机构都还没有放入。";

export const contactEmail = "hello@tidal-archive.example";

export const colophon = "原型页面。人物、项目、照片与简历均为示意。";
