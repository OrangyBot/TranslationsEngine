import Translate from "./Src/Core/GetTranslation";
import Loader from "./Src/Loader";

export class OrangyTranslationsEngine {
  public constructor(
    Dir: string,
    Logs: boolean,
    TranslationIdKey: string,
    TranslationIdContent: string,
    DefaultLanguage?: string
  ) {
    if (!Dir || Logs == null || !TranslationIdKey || !TranslationIdContent) {
      console.log("[TE] One or more arguments are missing!");
      process.exit(1);
    }

    if (!DefaultLanguage) DefaultLanguage = "en";
    Loader.Start(
      Dir,
      Logs,
      TranslationIdKey,
      TranslationIdContent,
      DefaultLanguage
    );
  }

  public GetTranslation(
    String: string,
    Category: string,
    Language: string
  ): Promise<string> {
    return Translate(String, Category, Language);
  }
}
