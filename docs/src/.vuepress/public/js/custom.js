const gh = {
  version: '2.0.0',

  add_script(src, cb) {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    script.onload = cb || (() => { });
    document.head.appendChild(script);
  },

  favicon() {
    const date = (new Date()).getDate();
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute('href', '/easepick2/favicon/' + date + '.png');
    }
  },

  initialize() {
    gh.favicon();
    gh.add_script('/easepick2/lib/easepick2.js');
  },
}

const wait = () => {
  if (document.documentElement.dataset.mounted === 'true') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', gh.initialize);
    } else {
      gh.initialize();
    }
    return;
  }

  setTimeout(wait, 300);
}

wait();
