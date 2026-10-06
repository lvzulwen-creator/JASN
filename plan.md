# Implementační plán — Help Jason Fight His Brain Tumor

## Cíl
Vytvořit anglický, responzivní jednostránkový fundraisingový web pro Jasona s jasným příběhem, aktuálním stavem kampaně, důvěryhodnou informační strukturou a jednoduchou cestou k bitcoinovému daru. Výstup bude čistě statický, takže jej půjde bez úprav připojit k GitHubu a nasadit na Vercel.

## Implementace
- **Frontend:** statický HTML, CSS a JavaScript bez frameworkových nebo serverových závislostí.
- **Interakce:** tlačítka pro zkopírování bitcoinové adresy, plynulé posouvání mezi sekcemi, přístupné rozbalovací FAQ a nenápadné oznámení po zkopírování.
- **Obsah:** veškerý text pro návštěvníka bude anglicky a bude vycházet z dodaného příběhu, rodinné aktualizace, cílů kampaně a FAQ.
- **Média:** dodaná fotografie Jasona bude uložena v repozitáři jako komprimovaný webový asset bez úprav původního souboru.
- **Nasazení:** `vercel.json`, přehledný `README.md` a minimální `package.json` s lokálním vývojovým serverem; Vercel bude moci servírovat složku `public` jako statický výstup.

## Design
- **Směr:** redakční humanitární kampaň ve stylu moderní charity — důstojný, neokázalý a lidský.
- **Zásady:** důstojnost před dramatizací; okamžitá srozumitelnost cíle; výrazná, ale nezavádějící výzva k daru; přístupnost na mobilu.
- **Barvy:** hluboká inkoustová modř jako stabilní základ, teplá slonová kost pro klidné čtení, terakotová jako lidský akcent a tmavě švestková pro jistotu u dárcovského panelu. Tato kombinace působí solidněji než obvyklé zářivě-zelené fundraisingové palety.
- **Rozvržení:** vyprávěcí vertikální cesta. Hero kombinuje titul, fotografii a stav kampaně; další bloky střídají široký text, zvýrazněné citace a tematické panely. Na desktopu zůstává dárcovský panel viditelný vedle úvodu, na mobilu se přesune pod klíčová čísla.
- **Signaturní prvky:** ručně působící malá linka pod nadpisy, číslicový „progress rail“ a oválné štítky pro fakta kampaně.
- **Interakce:** klidné a jednoznačné. Primární tlačítko vede k bitcoinovému panelu; kopírování adresy potvrzuje stav přímo v tlačítku; FAQ má standardní klávesnicově ovladatelné prvky.
- **Animace:** pouze jemný nástup obsahu při posunutí a respektování `prefers-reduced-motion`; žádné efektové nebo naléhavé animace.
- **Typografie:** výrazný serifový titulkový řez Georgia pro lidské, redakční nadpisy a Inter/system sans-serif pro dobře čitelný obsah. Velké částky budou v kontrastním bezpatkovém řezu s přehlednou tabulkovou šířkou číslic.
- **Podstata značky:** osobní výzva k podpoře Jasonovy kontinuální zdravotní péče, která působí citlivě a přímo. Osobnost: důstojná, otevřená, nadějná.
- **Hlas značky:** mluví v první osobě rodiny, stručně popisuje potřeby a nevyvíjí nátlak. Příklady: „Help Jason receive the care and comfort he still needs.“ a „Every contribution helps protect Jason’s dignity during a long recovery.“
- **Wordmark:** typografická značka „FOR JASON“ s drobnou tečkou v barvě terakoty a sekundárním „A family fundraising campaign“.
- **Signaturní barva:** `#C86D52` (teplá terakota) pro humanizující akcent a hlavní výzvy.

## Struktura projektu

| Cesta | Účel |
| --- | --- |
| `public/index.html` | Semantická struktura a anglický obsah jednostránkového webu |
| `public/styles.css` | Responzivní design, typografie, přístupnost a pohyb |
| `public/app.js` | Kopírování adresy, FAQ a drobné chování rozhraní |
| `public/assets/` | Dodaná fotografie a lokální grafické assety kompatibilní s Vercel |
| `public/manus-routes.json` | Manifest deklarující jedinou route `/` |
| `server.mjs` | Lokální statický vývojový server na portu 3000 |
| `package.json` | Vývojové a ověřovací skripty bez závislostí |
| `vercel.json` | Deklarace statického Vercel deploymentu |
| `README.md` | GitHub a Vercel instrukce pro předání |

## Omezení
- Web nezpracovává platby, neshromažďuje osobní údaje ani nekomunikuje s bitcoinovou sítí. Pouze usnadňuje zkopírování adresy dodané organizátorkou.
- U bitcoinového daru bude návštěvník výslovně upozorněn, že blockchainové převody jsou nevratné a že má adresu ověřit před odesláním.
