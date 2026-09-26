import { insightArticles } from "./insights";
import { commercialInsights } from "./commercial-insights";
import { acquisitionInsights } from "./acquisition-insights";

export const allInsightArticles = [
  ...insightArticles,
  ...commercialInsights,
  ...acquisitionInsights,
];

export const allInsightByPath = Object.fromEntries(
  allInsightArticles.map((article) => [article.path, article]),
);

export const getAllInsightsByLang = (lang: "en" | "fr") =>
  allInsightArticles.filter((article) => article.lang === lang);
