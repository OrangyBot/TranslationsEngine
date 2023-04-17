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

//Initialization
const Files = [];
Fs.readDirSync("./translations").forEach((File) => {
    Files.push(File);
});

new TranslationsEngine(
    Files
);

const Translation = TranslationsEngine.GetTranslation("key", "language");

//CommonJS:
const TranslationsEngine = require("@orangybot/translationsengine");
const Fs = require("fs");

//Initialization
const Files = [];
Fs.readDirSync("./translations").forEach((File) => {
    Files.push(File);
});

new TranslationsEngine(
    Files
);

const Translation = TranslationsEngine.GetTranslation("key", "language");
```
