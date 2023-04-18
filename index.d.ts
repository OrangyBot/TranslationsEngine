declare module "@orangybot/translationsengine" {
  interface TranslationsEngine {
    constructor(
      Dir: string,
      Logs: boolean,
      TranslationIdKey: string,
      TranslationIdContent: string,
      DefaultLanguage?: string
    ): void;

    public GetTranslation(
      String: string,
      Category: string,
      Language: string
    ): string;
  }

  class OrangyTranslationsEngine {
    constructor(
      Dir: string,
      Logs: boolean,
      TranslationIdKey: string,
      TranslationIdContent: string,
      DefaultLanguage?: string
    ): void;

    public GetTranslation(
      String: string,
      Category: string,
      Language: string
    ): string;
  }
}
