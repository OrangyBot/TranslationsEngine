# Orangy's TranslationsEngine package.

This is Orangy's official package to load message translations from your translations files.

:white_check_mark: Easy to use
:white_check_mark: Fast
:white_check_mark: Open source

## How to use

```javascript
//ES6:
import TranslationsEngine from "@orangybot/translationsengine";
import Fs from "fs";

const Engine = new TranslationsEngine(
  "./translations", //Translations folder
  true, //Logs?
  "id", //Your translations ID key
  "content", //Your translations content key
  "en" //Default language
);

const Translation = Engine.GetTranslation(
  "mycooltitle" /* Id */,
  "Titles" /* Category */,
  "it" /* Language */
);

//CommonJS:
const TranslationsEngine = require("@orangybot/translationsengine");
const Fs = require("fs");

const Engine = new TranslationsEngine(
  "./translations", //Translations folder
  true, //Logs?
  "id", //Your translations ID key
  "content", //Your translations content key
  "en" //Default language
);

const Translation = Engine.GetTranslation(
  "mycooltitle" /* Id */,
  "Titles" /* Category */,
  "it" /* Language */
);
```
