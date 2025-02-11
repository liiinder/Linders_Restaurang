# Labb 1 - Webbutveckling med .NET
<a style="color : gray">Uppdraget: Ett lokalt företag har kontaktat dig och erbjudit dig möjligheten att skapa deras nya hemsida.

De vill ha en hemsida med tre delar. Navigation ska ske genom en navbar eller liknande menysystem.

Den första delen är en landningssida där man ska kunna se företagets namn en passande bild och en passande välkomsttext.
</a>

Den andra delen är en "Om Oss"-sida där man ska kunna läsa om företaget, kontaktuppgifter och address.

Den tredje delen ska lista företagets tjänster/produkter. Dessa ska listas på ett snyggt sätt med hjälp av en JavaScript-array. Varje tjänst/produkt ska ha en passande bild. Här ska också finnas någon enkel form av kundvagn.

Uppdraget innebär ett ta fram en prototyp åt företaget och måste inte innehålla någon specifik text eller exakta kontaktuppgifter.

## Förslag på företag

- <a style="color : gray">Frisörsalong - Tjänster som Herrklippning, Hårfärgning etc.
- Konditori/Bageri - som olika bakverk eller beställningar</a>
- <a style="color : green">Pizzeria - Produkter som olika typer av pizza/kebab/falafel osv
</a>
- <a style="color : gray">Florist - Produkter som olika arrangemang, buketter eller liknande.
- Städfirma - Tjänster för tex hemstäd, fönstertvätt, garagerensning osv.
- Hunddagis - Tjänster som tex kloklipp, pälsvård osv.<a/>

# Bedömning

### Krav för G

- Alla delar beskrivna ovan finns med.
- Sidan är uppdelad på ett strukturerat sätt med minst tre HTML- och CSS-filer.
- Sidorna uppnår minst 80% i Lighthouse på Best Practices i både Mobile och Desktop.
- Hemsidan nyttjar minst två typsnitt.
- Hemsidan har ett färsgschema med minst 3 färger (utöver vitt och svart).
- <a style="color : green">Sidorna nyttjar Bootstrap (eller liknande css-bibliotek).</a>
- <a style="color : green">På sidan "Om Oss" Ska adressen visas i en inbakad Google Maps-modul.</a>

### Krav för VG
- Alla krav för G är uppfyllda.
- Det ska finnas anrop till minst ett öppet API för att hämta intressant information. (tex väder, valuta-kurser eller annat som är relevant för sidan) Här finns publika apier
- Alla produkter/tjänster i listan (ej kundvagnen) ska kunna expanderas för att visa mer detaljerad information. Detta ska göras med hjälp av Modaler (Tips: Modal finns som komponent i Bootstrap)
- Utöver detta så ska Performance, Accessability och Best Practices alla vara över 90% i Lighthouse på Desktop och Mobile.