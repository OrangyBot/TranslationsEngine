import i18next from "i18next";
import Fs from "fs";

export let Initialized = false;
export let DefaultLanguage = "en";

export default class OranygTranslationsEngine {
  static async Start(
    Dir: string,
    Logs: boolean,
    TranslationIdKey: string,
    TranslationIdContent: string,
    DefaultLanguage: string
  ): Promise<void> {
    await i18next.init({
      lng: DefaultLanguage,
      debug: false,
      resources: {},
    });

    DefaultLanguage = DefaultLanguage;

    Fs.readdirSync(Dir).forEach((Category: string) => {
      if (Fs.statSync(Dir + "/" + Category).isFile()) return;
      Fs.readdirSync(Dir + "/" + Category).forEach((Language: string) => {
        if (Fs.statSync(Dir + "/" + Category + "/" + Language).isDirectory())
          return;

        const Translations = JSON.parse(
          Fs.readFileSync(Dir + "/" + Category + "/" + Language, "utf-8")
        );
        for (const Translation of Translations.keys) {
          if (Logs)
            console.log(
              "[TranslationsEngine] Registering translation " +
                Translation[TranslationIdKey] +
                " for category " +
                Category +
                " (" +
                Language.replace(".json", "") +
                ")"
            );
          i18next.addResource(
            Language.replace(".json", ""),
            Category,
            Translation[TranslationIdKey],
            Translation[TranslationIdContent]
          );
        }
      });
    });
    Initialized = true;
  }
}
