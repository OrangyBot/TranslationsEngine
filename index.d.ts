declare module "@orangybot/translationsengine" {
  interface OrangyTranslationsEngine {
    constructor(
      Dir: string,
      Logs: boolean,
      TranslationIdKey: string,
      TranslationIdContent: string,
      DefaultLanguage?: string
    ): void;
  }
}
