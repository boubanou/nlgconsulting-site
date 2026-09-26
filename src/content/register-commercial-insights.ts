import { insightArticles, insightByPath } from "./insights";
import { commercialInsights } from "./commercial-insights";

for (const article of commercialInsights) {
  if (!insightByPath[article.path]) {
    insightArticles.push(article);
    insightByPath[article.path] = article;
  }
}
