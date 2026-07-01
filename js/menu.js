// Speisekarte Pizza Express Da Mario – zentral pflegbar.
// Preise/Beschreibungen hier ändern, die Seite rendert automatisch.
window.MENU = {
  categories: [
    {
      id: "pizza",
      name: "Pizza",
      note: "Alle Pizzen mit Tomaten und Käse. Ø 29 cm.",
      items: [
        { n: "01", name: "Margherita", desc: "", price: "7,50" },
        { n: "02", name: "Funghi", desc: "Champignons", price: "7,80" },
        { n: "03", name: "Prosciutto", desc: "Vorderschinken", price: "7,80" },
        { n: "04", name: "Salami", desc: "", price: "7,80" },
        { n: "05", name: "Montanara", desc: "Spinat, Gorgonzola", price: "9,20" },
        { n: "06", name: "Rustica", desc: "Salami, Champignons", price: "8,50" },
        { n: "07", name: "Contadina", desc: "Vorderschinken, Champignons", price: "8,50" },
        { n: "08", name: "Chicken", desc: "Paprika, Hähnchenstreifen", price: "9,30" },
        { n: "09", name: "Hawaii", desc: "Vorderschinken, Ananas", price: "8,80" },
        { n: "10", name: "Calzone", desc: "Salami, Schinken, Champignons, Hackfleischsauce", price: "9,10" },
        { n: "11", name: "Caprese", desc: "Frische Tomaten, Mozzarella", price: "9,60" },
        { n: "12", name: "Lombarda", desc: "Salami, Gorgonzola", price: "9,20" },
        { n: "13", name: "Quattro Stagioni", desc: "Salami, Schinken, Champignons, Paprika", price: "8,90" },
        { n: "14", name: "Capricciosa", desc: "Salami, Schinken, Champignons, Artischocken, Oliven", price: "9,20" },
        { n: "15", name: "Tonno", desc: "Thunfisch, Zwiebeln", price: "9,60" },
        { n: "16", name: "Calabrese", desc: "Salami, Zwiebeln, Peperoni, Knoblauch", price: "9,60", hot: true },
        { n: "17", name: "Mario", desc: "Salami, Schinken, Champignons, Ei, Hackfleischsauce", price: "9,60" },
        { n: "18", name: "Vegetaria", desc: "Broccoli, Spinat", price: "8,80" },
        { n: "19", name: "Norma", desc: "Gegrillte Auberginen, Knoblauch", price: "8,80" },
        { n: "20", name: "Seli", desc: "Auberginen, Oliven, Paprika, Zwiebeln", price: "10,30" },
        { n: "21", name: "Parma", desc: "Parmaschinken, Rucola, Parmesan", price: "10,90" },
        { n: "22", name: "Quattro Formaggi", desc: "Vier Käsesorten", price: "10,30" },
        { n: "23", name: "Diavolo", desc: "Peperonisalami", price: "8,60" },
        { n: "24", name: "Light", desc: "Hähnchenstreifen, Spinat, Parmesan", price: "9,40" },
        { n: "25", name: "Hot Mexican", desc: "Kidneybohnen, Mais, Zwiebel, Jalapeños", price: "9,60", hot: true },
        { n: "26", name: "Pazza", desc: "Speck, Zwiebeln, Champignons", price: "9,20" },
        { n: "27", name: "Tunci", desc: "Sucuk, Zwiebeln", price: "9,10" },
        { n: "28", name: "Mysterium", desc: "Speck, Zwiebeln, Schafskäse", price: "9,80" },
        { n: "29", name: "Ungherese", desc: "Peperoniwurst, Zwiebeln, Jalapeños", price: "9,40", hot: true },
        { n: "30", name: "Döner", desc: "Hähnchenfleisch, Zwiebel, Peperoni, Soße", price: "10,30" },
        { n: "30A", name: "Potatoes", desc: "Kartoffel-Wedges, Speck, Zwiebeln", price: "9,90" },
        { n: "", name: "Mediterranean", desc: "Zucchini, Auberginen, Paprika, Zwiebel, Schafskäse", price: "9,90", neu: true },
        { n: "", name: "Salmone", desc: "Lachs, Spinat, Parmesan", price: "10,90", neu: true },
        { n: "", name: "Pizzabrot Rot", desc: "Mit Tomatensoße", price: "5,30" },
        { n: "", name: "Pizzabrot Weiß", desc: "Mit Knoblauch", price: "5,30" }
      ]
    },
    {
      id: "angebote",
      name: "Angebote",
      note: "5 % Rabatt auf alles – wird automatisch im Warenkorb abgezogen.",
      items: [
        { n: "", name: "Spar-Menü 1", desc: "Pizza 29 cm, gemischter Salat, Softdrink 0,33 l", price: "16,00" },
        { n: "", name: "Spar-Menü 2", desc: "Pasta nach Wahl, gemischter Salat, Softdrink 0,33 l", price: "16,00" },
        { n: "", name: "Spar-Menü 3", desc: "Schnitzel, Pommes, kleiner Salat, Softdrink 0,33 l", price: "18,00" },
        { n: "", name: "3 Pizzen", desc: "3 Pizzen nach Wahl, 1 l Softdrink", price: "25,00" },
        { n: "", name: "5 Pizzen", desc: "5 Pizzen nach Wahl, 1 l Softdrink", price: "43,50" },
        { n: "", name: "3 Pizzen (36 cm)", desc: "3 Party-Pizzen 36 cm, 1 l Softdrink", price: "36,00" },
        { n: "", name: "2 Partypizzen Classic", desc: "Nr. 01–07, 1 l Softdrink", price: "45,00" },
        { n: "", name: "3 Partypizzen Classic", desc: "Nr. 01–07, 1 l Softdrink", price: "69,00" },
        { n: "", name: "2 Partypizzen Special", desc: "Nr. 08–19 & 23–29, 1 l Softdrink", price: "52,00" },
        { n: "", name: "3 Partypizzen Special", desc: "Nr. 08–19 & 23–29, 1 l Softdrink", price: "75,00" }
      ]
    },
    {
      id: "pasta",
      name: "Pasta",
      note: "Wo angegeben, Soße nach Wahl.",
      items: [
        { n: "31", name: "Pomodoro", desc: "Tomatensauce", price: "8,00" },
        { n: "32", name: "Bolognese", desc: "Hackfleischsauce", price: "8,50" },
        { n: "33", name: "Saltati", desc: "Hackfleisch, Sahne, Schinken, Champignons", price: "9,90" },
        { n: "34", name: "al Gorgonzola", desc: "Sahnesauce, Gorgonzola", price: "9,90" },
        { n: "35", name: "Norma", desc: "Tomatensauce, Auberginen, Knoblauch", price: "9,00" },
        { n: "36", name: "Chicken", desc: "Hähnchenfleisch, Soße nach Wahl", price: "8,00" },
        { n: "37", name: "Funghi", desc: "Champignons, Soße nach Wahl", price: "8,00" },
        { n: "38", name: "Carbonara", desc: "Speck, Ei, Sahnesauce", price: "9,90" },
        { n: "39", name: "Vegie", desc: "Brokkoli, Mais", price: "8,00" },
        { n: "40", name: "La Verdura", desc: "Karotten, Erbsen, Bohnen, Paprika, Mais", price: "9,90" },
        { n: "41", name: "Caprese", desc: "Tomatensauce, Mozzarella, Basilikum", price: "9,50" },
        { n: "42", name: "à la Chef", desc: "Schinken, Champignons, hausgemachte Sauce", price: "9,90" },
        { n: "43", name: "à la Panna", desc: "Sahne-Cremesauce, Schinken", price: "9,50" },
        { n: "47", name: "Rahmsoße", desc: "Champignons in Rahmsoße", price: "9,50" },
        { n: "48", name: "Rahm Chicken", desc: "Hähnchen, Champignons, Rahmsoße", price: "9,90" },
        { n: "49", name: "Mediterranean", desc: "Zucchini, Auberginen, Paprika, Zwiebel, Schafskäse", price: "9,90" }
      ]
    },
    {
      id: "forno",
      name: "Al Forno",
      note: "Überbacken mit Hackfleischsauce, Sahne und Käse.",
      items: [
        { n: "51", name: "Rigatoni al Forno", desc: "", price: "9,90" },
        { n: "52", name: "Tortellini al Forno", desc: "", price: "9,90" },
        { n: "53", name: "Hausgemachte Lasagne", desc: "", price: "9,90" },
        { n: "54", name: "Combinazione", desc: "", price: "9,90" }
      ]
    },
    {
      id: "schnitzel",
      name: "Schnitzel",
      note: "Mit Beilage nach Wahl und Salat.",
      items: [
        { n: "70", name: "Schnitzel", desc: "Pommes, kleiner gemischter Salat", price: "13,50" },
        { n: "71", name: "Jägerschnitzel", desc: "Champignon-Sauce, kleiner Salat", price: "14,00" },
        { n: "72", name: "Ungarische Art", desc: "Champignons, Zwiebeln, Paprika, Sauce", price: "14,50", hot: true },
        { n: "73", name: "Rahmschnitzel", desc: "Champignons, Rahmsauce", price: "14,00" },
        { n: "74", name: "Quattro Formaggi", desc: "4-Käse-Crème-Sauce, Pommes", price: "14,00" },
        { n: "75", name: "Kräutercrème", desc: "Champignons, Kräutercreme-Sauce", price: "14,00" },
        { n: "76", name: "Käse-Crème", desc: "Champignons, Käsecrème-Sauce", price: "14,00" }
      ]
    },
    {
      id: "salate",
      name: "Salate",
      note: "Mit einem Dressing nach Wahl.",
      items: [
        { n: "60", name: "Tomatensalat", desc: "Tomaten, Zwiebeln", price: "7,00" },
        { n: "61", name: "Gemischter Salat", desc: "Salat, Gurken, Tomaten, Paprika", price: "7,00" },
        { n: "62", name: "Italienischer Salat", desc: "Vorderschinken, Käse, Ei", price: "8,50" },
        { n: "63", name: "Thunfischsalat", desc: "Thunfisch, Zwiebeln, Kapern", price: "8,50" },
        { n: "64", name: "Hähnchensalat", desc: "Mais, Zwiebeln, Tomaten, Hähnchen", price: "8,50" },
        { n: "65", name: "Bauernsalat", desc: "Mais, Schafskäse, Kidneybohnen, Zwiebel", price: "8,50" }
      ]
    },
    {
      id: "fingerfood",
      name: "Fingerfood",
      note: "Alles mit Pommes.",
      items: [
        { n: "80", name: "Chicken Nuggets", desc: "6 Stück, Pommes", price: "8,00" },
        { n: "81", name: "Hot Wings", desc: "6 Stück, Pommes", price: "8,50", hot: true },
        { n: "82", name: "Mozzarella Sticks", desc: "7 Stück, Pommes", price: "8,50" },
        { n: "83", name: "Chili Cheese Nuggets", desc: "7 Stück, Pommes", price: "8,50", hot: true }
      ]
    },
    {
      id: "getraenke",
      name: "Getränke",
      note: "Alkoholfrei.",
      items: [
        { n: "", name: "Coca-Cola", desc: "1,0 l Mehrweg", price: "4,00" },
        { n: "", name: "Fanta Orange", desc: "1,0 l Mehrweg", price: "4,00" },
        { n: "", name: "Mezzo Mix", desc: "1,0 l", price: "4,00" },
        { n: "", name: "Sprite", desc: "1,0 l", price: "4,00" },
        { n: "", name: "Coca-Cola Light", desc: "1,0 l", price: "4,00" },
        { n: "", name: "Softdrinks 0,33 l", desc: "Cola, Cola Zero, Mezzo Mix, Sprite, Fanta", price: "2,50" },
        { n: "", name: "Lipton Ice Tea", desc: "Lemon oder Pfirsich, 0,5 l", price: "2,50" },
        { n: "", name: "Arizona Tea", desc: "Green, Peach oder Blueberry, 0,5 l", price: "2,50" },
        { n: "", name: "Arizona Pomegranate", desc: "Green Tea, 0,5 l", price: "2,75" }
      ]
    }
  ]
};
