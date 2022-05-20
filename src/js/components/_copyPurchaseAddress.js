import vars from "../_vars";

const purchasesCopy = [...vars.copyPurchases]

if (purchasesCopy.length > 0) {
  purchasesCopy.forEach(element => {
    element.addEventListener('click', () => {
      const textElement = element.dataset.address;

      console.log(textElement);
      navigator.clipboard.writeText(textElement);
    })
  });
}
