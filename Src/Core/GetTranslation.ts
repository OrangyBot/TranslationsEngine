import { Initialized, DefaultLanguage } from "../Loader";
import i18next from "i18next";

export default async function GetTranslation(
  String: string,
  Category: string,
  Language: string
): Promise<string> {
  if (!Initialized)
    return "[TE] The module has not been initialized! Check https://github.com/OrangyBot/TranslationsEngine#how-to-use for a guide on how to use this!";
  const FallbackString = await i18next.getResource(
    DefaultLanguage,
    Category,
    String
  );
  await i18next.changeLanguage(Language);
  const Translation = i18next.t(String, FallbackString, {
    ns: Category,
  });
  return Translation;
}
