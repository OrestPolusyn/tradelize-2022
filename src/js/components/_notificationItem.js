import vars from "../_vars";

const items = [...vars.notificationItems]

if (items.length > 0) {
  items.forEach(element => {
    element.addEventListener('click', (e) => {
      const itemCheckbox = e.target
      itemCheckbox.closest('.notification-item').classList.remove('checked')

      if (itemCheckbox.checked)
        itemCheckbox.closest('.notification-item').classList.add('checked')
    })

    element.addEventListener('mouseenter', () => {
      element.classList.add('notification-item-read')
    })
  });
}
