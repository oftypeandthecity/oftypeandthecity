/* =========================================================
   PRINT CANDIDATES — a working file. Delete it when done.

   Every photograph in the gallery, parsed into the shape the
   shop expects. This is scaffolding for choosing what to sell:
   pick from here, put the survivors in prints.js, then delete
   this file.

   The fastest way to choose visually:
     1. Copy the whole list below into the PRINTS array in
        prints.js, replacing what's there.
     2. Serve the site locally and open prints.html — the shop
        page becomes your contact sheet, every candidate laid
        out at a decent size.
     3. Delete the ones you don't want, straight out of
        prints.js as you go.
     4. Delete this file.

   About the notes above each line — `src` is only the on-screen
   preview, never the print file. The file that gets printed is
   uploaded to Printful separately and never lives in this repo.
   So a small preview does not rule a photograph out; it only
   tells you where the printable version has to come from:

     · "camera original — likely fine" — a photo you shot and
       still hold the full-size file for. Export at ~300 DPI for
       the largest size you sell (A3, the shop cap, wants 3508 × 4961).

     · "original needed" — imported from Instagram, which serves
       a square crop at 1080–1440 px. Not printable as-is at any
       size worth selling. Sellable only if you can dig out the
       original frame, and it will be the uncropped composition,
       not the square you posted.

   Titles are parsed from the gallery captions, with Instagram
   hashtag residue stripped. "Untitled" means the caption was
   only a place and a year — worth renaming before it goes in
   the shop. `place` is set only where the caption actually said
   one; the page omits it cleanly when absent.
   ========================================================= */

const PRINTS_CANDIDATES = [
  /* 2000×1333 site preview · camera original — likely fine */
  { id: "untitled", src: "photos/DSCF0334-web.jpg", title: "Untitled", place: "Funchal, Madeira", year: 2026, buy: {} },
  /* 1333×2000 site preview · camera original — likely fine */
  { id: "the-outernet", src: "photos/DSCF2537-web.jpg", title: "The Outernet", place: "London", year: 2026, buy: {} },
  /* 1800×1800 site preview · camera original — likely fine */
  { id: "untitled-2", src: "photos/DSC0507912-web.jpg", title: "Untitled", place: "London", year: 2026, buy: {} },
  /* 1800×1800 site preview · camera original — likely fine */
  { id: "untitled-3", src: "photos/DSCF968012-web.jpg", title: "Untitled", place: "Rome", year: 2025, buy: {} },
  /* 1800×1800 site preview · camera original — likely fine */
  { id: "untitled-4", src: "photos/DSCF123412-web.jpg", title: "Untitled", place: "London", year: 2025, buy: {} },
  /* 1800×1350 site preview · camera original — likely fine */
  { id: "untitled-5", src: "photos/DSCF514612-web.jpg", title: "Untitled", place: "London", year: 2025, buy: {} },
  /* 1800×1800 site preview · camera original — likely fine */
  { id: "untitled-6", src: "photos/DSCF521412-web.jpg", title: "Untitled", place: "London", year: 2025, buy: {} },
  /* 1800×1800 site preview · camera original — likely fine */
  { id: "untitled-7", src: "photos/DSCF972312-web.jpg", title: "Untitled", place: "Rome", year: 2025, buy: {} },
  /* 1800×1800 site preview · camera original — likely fine */
  { id: "untitled-8", src: "photos/DSC0508112-web.jpg", title: "Untitled", place: "London", year: 2024, buy: {} },
  /* 1800×1800 site preview · camera original — likely fine */
  { id: "untitled-9", src: "photos/R000046412-web.jpg", title: "Untitled", place: "London", year: 2024, buy: {} },
  /* 1800×1800 site preview · camera original — likely fine */
  { id: "untitled-10", src: "photos/DSCF120112-web.jpg", title: "Untitled", place: "London", year: 2024, buy: {} },
  /* 1800×1750 site preview · camera original — likely fine */
  { id: "untitled-11", src: "photos/DSCF966912-web.jpg", title: "Untitled", place: "Rome", year: 2025, buy: {} },
  /* 1800×1633 site preview · camera original — likely fine */
  { id: "untitled-12", src: "photos/DSCF251812-web.jpg", title: "Untitled", place: "London", year: 2026, buy: {} },
  /* 1800×1187 site preview · camera original — likely fine */
  { id: "untitled-13", src: "photos/DSCF252312-web.jpg", title: "Untitled", place: "London", year: 2026, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "us-and-them", src: "photos/instagram/18060990611022072.jpg", title: "US and them", year: 2025, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "look-north", src: "photos/instagram/17850694566340104.jpg", title: "Look North", year: 2024, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "look-north-2", src: "photos/instagram/18062982745700865.jpg", title: "Look North", year: 2024, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "look-north-3", src: "photos/instagram/17922865886891821.jpg", title: "Look North", year: 2024, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "bus", src: "photos/instagram/18058617583677379.jpg", title: "Bus", year: 2024, buy: {} },
  /* 1079×1079 Instagram copy · original needed */
  { id: "dosh-rude", src: "photos/instagram/17877047546979402.jpg", title: "Dosh Rude", year: 2024, buy: {} },
  /* 2048×2048 Instagram copy · original needed */
  { id: "peas-in-a-pod", src: "photos/instagram/17905966334843084.jpg", title: "Peas in a pod", year: 2024, buy: {} },
  /* 1440×1438 Instagram copy · original needed */
  { id: "michelin-tyre-co", src: "photos/instagram/18048633391524991.jpg", title: "Michelin Tyre Co", year: 2024, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "smithfield-cafe", src: "photos/instagram/18065408875466391.jpg", title: "Smithfield Cafe", year: 2023, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "just-need-a-dryer", src: "photos/instagram/18078611575351219.jpg", title: "Just need a dryer", year: 2023, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "gold", src: "photos/instagram/17942721500216091.jpg", title: "Gold", year: 2022, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "special-services", src: "photos/instagram/17950338473204633.jpg", title: "Special Services", year: 2022, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "tree", src: "photos/instagram/18053249542360508.jpg", title: "Tree", year: 2022, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "bridge", src: "photos/instagram/18321259879032210.jpg", title: "Bridge", year: 2022, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "wilko", src: "photos/instagram/18226520968152142.jpg", title: "wilko", year: 2022, buy: {} },
  /* 997×997 Instagram copy · original needed */
  { id: "art-gallery", src: "photos/instagram/17925539762370772.jpg", title: "Art Gallery", year: 2022, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "windows", src: "photos/instagram/18052014037308740.jpg", title: "Windows", year: 2022, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "pawnbrokers", src: "photos/instagram/18160249858211469.jpg", title: "Pawnbrokers", year: 2022, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "barbican", src: "photos/instagram/17919439898137825.jpg", title: "Barbican", year: 2022, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "dias-rada", src: "photos/instagram/17908224449230863.jpg", title: "Dias Rada", year: 2021, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "alice-belts", src: "photos/instagram/17924646175910087.jpg", title: "Alice belts", year: 2021, buy: {} },
  /* 960×960 Instagram copy · original needed */
  { id: "the-very-pleasant-crew", src: "photos/instagram/18144163654160542.jpg", title: "The Very Pleasant Crew", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "quinns", src: "photos/instagram/18207590062051301.jpg", title: "Quinn’s", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "willcox", src: "photos/instagram/17921035834562371.jpg", title: "Willcox", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "cures", src: "photos/instagram/17907547990683588.jpg", title: "Cures", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "take-courage", src: "photos/instagram/17877461579203487.jpg", title: "Take Courage", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "hovis", src: "photos/instagram/17860440227500080.jpg", title: "Hovis", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "garage", src: "photos/instagram/18129784624161793.jpg", title: "Garage", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "garage-2", src: "photos/instagram/17889048499961651.jpg", title: "Garage", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "financial-times", src: "photos/instagram/17878318766147709.jpg", title: "Financial Times", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "beany", src: "photos/instagram/17983851895332707.jpg", title: "Beany", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "chinatown", src: "photos/instagram/18068870170253803.jpg", title: "Chinatown", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "tower", src: "photos/instagram/17963105275375152.jpg", title: "Tower", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "pickywops", src: "photos/instagram/18083026492246875.jpg", title: "PickyWops", year: 2021, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "toastie", src: "photos/instagram/17866886996219350.jpg", title: "Toastie", year: 2020, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "shell", src: "photos/instagram/17862666980234422.jpg", title: "Shell", year: 2020, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "10", src: "photos/instagram/17907470311551914.jpg", title: "10", year: 2020, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "cranes", src: "photos/instagram/17873255756057395.jpg", title: "Cranes", year: 2020, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "castle", src: "photos/instagram/17860447880279328.jpg", title: "Castle", year: 2020, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "tunnel", src: "photos/instagram/18143751898107861.jpg", title: "Tunnel", year: 2020, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "fast-food", src: "photos/instagram/18128053309095025.jpg", title: "Fast food", year: 2020, buy: {} },
  /* 959×959 Instagram copy · original needed */
  { id: "tunnel-2", src: "photos/instagram/17886003877596883.jpg", title: "Tunnel", year: 2020, buy: {} },
  /* 959×959 Instagram copy · original needed */
  { id: "waste", src: "photos/instagram/17886229843581952.jpg", title: "Waste", year: 2020, buy: {} },
  /* 959×959 Instagram copy · original needed */
  { id: "works", src: "photos/instagram/17860313128918857.jpg", title: "Works", year: 2020, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "stop", src: "photos/instagram/17842699421091361.jpg", title: "Stop", year: 2020, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "tek", src: "photos/instagram/17870382232658650.jpg", title: "Tek", year: 2020, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "dresy", src: "photos/instagram/18092837512151855.jpg", title: "Dresy", year: 2020, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "ichibuns", src: "photos/instagram/18087084076158057.jpg", title: "Ichibuns", year: 2020, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "open", src: "photos/instagram/18107715340101888.jpg", title: "Open", year: 2020, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "tobacco-drinks-and-wine", src: "photos/instagram/17877228904553116.jpg", title: "Tobacco, drinks and wine", year: 2020, buy: {} },
  /* 1440×1440 Instagram copy · original needed */
  { id: "fabulous", src: "photos/instagram/17866513210638508.jpg", title: "Fabulous", year: 2020, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "proto", src: "photos/instagram/17857382455699074.jpg", title: "Proto", year: 2020, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "norbert", src: "photos/instagram/17922979870364488.jpg", title: "Norbert", year: 2020, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "untitled-14", src: "photos/instagram/17854031170536094.jpg", title: "Untitled", year: 2019, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "innovation", src: "photos/instagram/17888094379394973.jpg", title: "Innovation", year: 2019, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "untitled-15", src: "photos/instagram/17861777050460508.jpg", title: "Untitled", year: 2019, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "untitled-16", src: "photos/instagram/17846880100548317.jpg", title: "Untitled", year: 2019, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "southbank-train", src: "photos/instagram/17863992487455534.jpg", title: "Southbank train", year: 2019, buy: {} },
  /* 960×960 Instagram copy · original needed */
  { id: "the-tate-lunch-by-the-river", src: "photos/instagram/18087792562025943.jpg", title: "The Tate. Lunch by the river", year: 2019, buy: {} },
  /* 960×960 Instagram copy · original needed */
  { id: "dont-look-luxury-apartments-in-the-shadow-of-the-tate", src: "photos/instagram/18087487858054168.jpg", title: "Don’t look. Luxury apartments in the shadow of The Tate", year: 2019, buy: {} },
  /* 960×960 Instagram copy · original needed */
  { id: "the-city-of-london-from-the-tate", src: "photos/instagram/17909224207335228.jpg", title: "The City of London from the Tate", year: 2019, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "modern-display-fittings", src: "photos/instagram/17880026071401984.jpg", title: "Modern Display Fittings", year: 2019, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "post-office", src: "photos/instagram/18009235978231880.jpg", title: "Post Office", year: 2019, buy: {} },
  /* 960×960 Instagram copy · original needed */
  { id: "lord-napier", src: "photos/instagram/18085383586024660.jpg", title: "Lord Napier", year: 2019, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "ship-building", src: "photos/instagram/18065796214128560.jpg", title: "Ship Building", year: 2019, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "festa", src: "photos/instagram/17873255749409901.jpg", title: "Festa", year: 2019, buy: {} },
  /* 960×960 Instagram copy · original needed */
  { id: "salvation-army", src: "photos/instagram/18065308396098071.jpg", title: "Salvation Army", year: 2019, buy: {} },
  /* 924×924 Instagram copy · original needed */
  { id: "karpol", src: "photos/instagram/18039647755176352.jpg", title: "Karpol", year: 2019, buy: {} },
  /* 896×843 Instagram copy · original needed */
  { id: "escovaria", src: "photos/instagram/18041270146104905.jpg", title: "Escovaria", year: 2019, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "the-earth-is-pancake-no-3", src: "photos/instagram/18028408861046335.jpg", title: "The earth is pancake no.3", year: 2019, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "blank-bit-no-2", src: "photos/instagram/17845741696356308.jpg", title: "Blank bit no.2", year: 2019, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "feed-your-head-no-1", src: "photos/instagram/18009165124127112.jpg", title: "Feed your head no.1", year: 2019, buy: {} },
  /* 960×960 Instagram copy · original needed */
  { id: "plain-fancy", src: "photos/instagram/17996111491038443.jpg", title: "Plain & Fancy", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "untitled-17", src: "photos/instagram/17908690741226412.jpg", title: "Untitled", year: 2018, buy: {} },
  /* 875×875 Instagram copy · original needed */
  { id: "get-rich", src: "photos/instagram/17905961878242466.jpg", title: "Get rich", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "discount", src: "photos/instagram/17918814970215750.jpg", title: "Discount", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "zomm", src: "photos/instagram/17946847480099732.jpg", title: "ZOMM", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "o-s", src: "photos/instagram/17960569141034972.jpg", title: "O/S", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "parking-system", src: "photos/instagram/17931043141154858.jpg", title: "Parking System", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "three-little-words", src: "photos/instagram/17932339660181259.jpg", title: "Three Little Words", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "zemok", src: "photos/instagram/17915395207174303.jpg", title: "ZEMOK", year: 2018, buy: {} },
  /* 480×480 Instagram copy · original needed */
  { id: "theoldvic", src: "photos/instagram/17937738430060812.jpg", title: "TheOldVic", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "lsd", src: "photos/instagram/17931604120000826.jpg", title: "LSD", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "jelly-please", src: "photos/instagram/17907262318122501.jpg", title: "Jelly Please", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "love-soup", src: "photos/instagram/17908210129112255.jpg", title: "Love Soup", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "zinc", src: "photos/instagram/17892940513191246.jpg", title: "Zinc", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "b", src: "photos/instagram/17857897843213716.jpg", title: "B", year: 2018, buy: {} },
  /* 960×960 Instagram copy · original needed */
  { id: "non-ferrous", src: "photos/instagram/17899667167091155.jpg", title: "Non-ferrous", year: 2018, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "open-2", src: "photos/instagram/17888512339151255.jpg", title: "Open", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "sun-kil-moon", src: "photos/instagram/17895504322126233.jpg", title: "Sun Kil Moon", year: 2017, buy: {} },
  /* 640×640 Instagram copy · original needed */
  { id: "warning", src: "photos/instagram/17884439758124656.jpg", title: "Warning", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "german-furniture", src: "photos/instagram/17869925794161178.jpg", title: "German Furniture", year: 2017, buy: {} },
  /* 720×720 Instagram copy · original needed */
  { id: "gas", src: "photos/instagram/17884165945057701.jpg", title: "Gas", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "veneers", src: "photos/instagram/17862147232141744.jpg", title: "Veneers", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "domus", src: "photos/instagram/17884478551030763.jpg", title: "Domus", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "hudson", src: "photos/instagram/17881992253001642.jpg", title: "Hudson", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "thomas", src: "photos/instagram/17856299788166314.jpg", title: "Thomas", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "type", src: "photos/instagram/17857277710148284.jpg", title: "Type", year: 2017, buy: {} },
  /* 612×612 Instagram copy · original needed */
  { id: "ride", src: "photos/instagram/17855923696179592.jpg", title: "Ride", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "criterion", src: "photos/instagram/17876403376044037.jpg", title: "Criterion", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "ideal", src: "photos/instagram/17868066607072367.jpg", title: "Ideal", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "walker-bros", src: "photos/instagram/17855014516134824.jpg", title: "Walker Bros", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "brown-bread", src: "photos/instagram/17852759005160001.jpg", title: "Brown bread", place: "London", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "central-arcade", src: "photos/instagram/17853288682154906.jpg", title: "Central Arcade", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "boot-maker", src: "photos/instagram/17852591455161644.jpg", title: "Boot Maker", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "london-record", src: "photos/instagram/17867544673079064.jpg", title: "London Record", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "wells", src: "photos/instagram/17855076610135135.jpg", title: "Wells", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "medallion", src: "photos/instagram/17865086512098006.jpg", title: "Medallion", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "perfection", src: "photos/instagram/17870709838070376.jpg", title: "Perfection", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "pizza", src: "photos/instagram/17852278468178292.jpg", title: "Pizza", year: 2017, buy: {} },
  /* 606×454 Instagram copy · original needed */
  { id: "fech", src: "photos/instagram/17874776245045628.jpg", title: "Fech", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "do-not-vandalize", src: "photos/instagram/17875066522036014.jpg", title: "Do not vandalize", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "high-class", src: "photos/instagram/17874196870020597.jpg", title: "High Class", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "sons", src: "photos/instagram/17861757160082776.jpg", title: "& Sons", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "rvp", src: "photos/instagram/17853339055142786.jpg", title: "RVP", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "or-not", src: "photos/instagram/17874741340039592.jpg", title: "Or not", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "chic", src: "photos/instagram/17863488994103306.jpg", title: "Chic", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "boulting", src: "photos/instagram/17851060084172290.jpg", title: "Boulting", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "dress-coats", src: "photos/instagram/17851548967155471.jpg", title: "Dress Coats", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "joie", src: "photos/instagram/17850971575161593.jpg", title: "Joie", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "established", src: "photos/instagram/17862808222125231.jpg", title: "Established", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "little-crown", src: "photos/instagram/17851465159154323.jpg", title: "Little Crown", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "pring-and-rose", src: "photos/instagram/17861603014085731.jpg", title: "Pring and Rose", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "cheers", src: "photos/instagram/17869010164056547.jpg", title: "Cheers", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "bombers", src: "photos/instagram/17858267221108729.jpg", title: "Bombers", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "drink", src: "photos/instagram/17858593462100153.jpg", title: "Drink", year: 2017, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "and-die", src: "photos/instagram/17845586812158077.jpg", title: "and die", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "raymond", src: "photos/instagram/17867827369004701.jpg", title: "Raymond", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "salvation", src: "photos/instagram/17845401160153818.jpg", title: "Salvation", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "any-occasion", src: "photos/instagram/17864398486014712.jpg", title: "Any occasion", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "fofs", src: "photos/instagram/17857260418071989.jpg", title: "Fofs", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "forrester", src: "photos/instagram/17842976416169837.jpg", title: "Forrester", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "lfb", src: "photos/instagram/17862369391014712.jpg", title: "LFB", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "play", src: "photos/instagram/17842617271188302.jpg", title: "Play", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "night-cure", src: "photos/instagram/17853607543119185.jpg", title: "Night cure", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "sounds", src: "photos/instagram/17852624500126756.jpg", title: "Sounds", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "rats", src: "photos/instagram/17863012999007808.jpg", title: "Rats", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "tron", src: "photos/instagram/17860265785011860.jpg", title: "Tron", year: 2016, buy: {} },
  /* 1080×1096 Instagram copy · original needed */
  { id: "untitled-18", src: "photos/instagram/17860107685033506.jpg", title: "Untitled", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "untitled-19", src: "photos/instagram/17860386427028338.jpg", title: "Untitled", year: 2016, buy: {} },
  /* 1080×1080 Instagram copy · original needed */
  { id: "untitled-20", src: "photos/instagram/17850280258092905.jpg", title: "Untitled", year: 2016, buy: {} },
];
