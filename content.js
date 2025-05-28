(function() {
  const appendModifier = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let q = urlParams.get('q');

    if (!q || q.trim().endsWith('-ai')) return;

    q += ' -ai';
    urlParams.set('q', q);

    const newUrl = `${location.origin}${location.pathname}?${urlParams.toString()}`;
    if (location.href !== newUrl) {
      location.replace(newUrl);
    }
  };

  if (location.hostname.includes('google.') && location.pathname === '/search') {
    appendModifier();
  }
})();
