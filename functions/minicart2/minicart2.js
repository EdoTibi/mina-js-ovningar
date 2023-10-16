// INSTRUKTIONER

// 1. Rendera prodElement i <main> med id="main-container" innerHTML för varje produkt i allProds arrayn
//    (Använd en en loop och conditions)

// 2. Skriv en funktion som triggas när man klickar på knapparna + och - i varje produkt

// 3. Ändra quantity (qty) för den klickade produkten i arrayn allProds (+1 eller -1)
//    och visa den produkt qty i konsolen

// 4. Sätt en ny element i HTML:n och visa det totala priset för carten i den.
// Den ska även fungera när man plussar / minskar antalet på en produkt

let allProds = [
  { id: 1, name: "Butter", price: 200, qty: 1 },
  { id: 2, name: "Milk", price: 230, qty: 1 },
  { id: 3, name: "Bread", price: 220, qty: 1 },
]

function showProds() { 
  
  let prodElement = `<div class="product-container">
                    <p>Namn <span id="price-prod1">Pris</span></p>
                    <div style="display:flex;" id="prod1">
                        <button>
                             -
                        </button>
                        <p id="Produktid">Qty</p>
                         <button class="rightbutton">
                             +
                        </button>
                    </div>
                  </div>`    
}

showProds()
