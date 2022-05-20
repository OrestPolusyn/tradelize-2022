const notItems = [...document.querySelectorAll('.table-more')];

if (notItems.length > 0) {
  notItems.forEach(element => {
    const popcorn = element.querySelector('.popcorn')
    const tooltip = element.querySelector('.poptip')

    if (popcorn && tooltip)
      createPopper(popcorn, tooltip, {
        placement: 'left-start',
        modifiers: [{
          name: 'offset',
          options: {
            offset: [10, 0],
          },
        }, ],
      });
  })
}
