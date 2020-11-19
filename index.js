let tab = [1,0,1,1];
const k = 2;
// check if element in table is equal to 0 or 1
const checkNumbers = (element) => {
  return element === 1 || element === 0;
};

if (tab.length > 2 && tab.every(checkNumbers)) {
  for (let i=0; i<k; i++) {
    tab = tab.map((element,index) => {
      let lastIndex = tab.length-1;
      let nextItem = (index === lastIndex) ? tab[0] : tab[index+1];
      let previousItem = (index  === 0) ? tab[lastIndex] : tab[index-1];
      //console.log(lastIndex);
      //console.log (previousItem, nextItem)
      if (previousItem === nextItem ) {
        return 0
      }
      else {
        return element
      }
    });
    console.log(tab)
  }
} else window.alert("Le tableau doit contenir au moins 3 cellules égales à 0 ou 1 seulement");
