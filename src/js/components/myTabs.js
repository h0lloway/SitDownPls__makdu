document.querySelectorAll('.catalog__btn-switch').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.catalog__btn-switch').forEach(function (btn) {
      btn.classList.remove('tab-btn-active')
    });
    e.currentTarget.classList.add('tab-btn-active');
    document.querySelectorAll('.catalog__tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tab-active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tab-active');
  });
});


