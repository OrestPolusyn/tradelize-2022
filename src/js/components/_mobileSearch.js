import vars from "../_vars";

if (vars.mobileSearch) {
  vars.mobileSearch.addEventListener('click', () => {
    vars?.mobileSearchForm.classList.toggle('nav-search-show')
  })

  window.addEventListener('resize', searchBar)
  searchBar;

  function searchBar() {
    if (window.innerWidth >= 769) {
      vars?.mobileSearchForm.classList.remove('nav-search-show')
    }
  }

  vars.bodyEl.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn-search')) {
      vars.mobileSearchForm.classList.remove('nav-search-show')
    }
  })
}
