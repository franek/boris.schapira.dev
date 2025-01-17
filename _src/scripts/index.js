/*! easy-toggle-state v1.12.2 | (c) 2019 Matthieu Bué <https://twikito.com> | MIT License | https://twikito.github.io/easy-toggle-state/ */
!function(){"use strict";const t=document.documentElement.getAttribute("data-easy-toggle-state-custom-prefix")||"toggle",e=(e,r=(()=>t)())=>["data",r,e].filter(Boolean).join("-"),r=e("arrows"),i=e("class"),n=e("escape"),o=e("event"),s=e("group"),a=e("is-active"),c=e("modal"),u=e("outside"),g=e("outside-event"),l=e("radio-group"),d=e("target"),A=e("target-all"),h=e("target-next"),b=e("target-only"),f=e("target-parent"),v=e("target-previous"),E=e("target-self"),m=e("state"),T=e("trigger-off"),p=new Event("toggleAfter"),w=new Event("toggleBefore"),y=(t,e)=>{const r=t?`[${t}]`:"";return e?[...e.querySelectorAll(r)]:[...document.querySelectorAll(`[${i}]${r}`.trim())]},S=(t,e)=>t.dispatchEvent(e),k=(t,e={"aria-checked":t.isToggleActive,"aria-expanded":t.isToggleActive,"aria-hidden":!t.isToggleActive,"aria-pressed":t.isToggleActive,"aria-selected":t.isToggleActive})=>Object.keys(e).forEach(r=>t.hasAttribute(r)&&t.setAttribute(r,e[r])),L=t=>{const e=t.hasAttribute(s)?s:l;return y(`${e}="${t.getAttribute(e)}"`).filter(t=>t.isToggleActive)},$=(t,e)=>{if(0===e.length)return console.warn(`There's no match for the selector '${t}' for this trigger`),[];const r=t.match(/#\w+/gi);return r&&r.forEach(t=>{const r=[...e].filter(e=>e.id===t.slice(1));r.length>1&&console.warn(`There's ${r.length} matches for the selector '${t}' for this trigger`)}),[...e]},x=t=>document.addEventListener(t.getAttribute(g)||t.getAttribute(o)||"click",D,!1),D=t=>{const e=t.target,r=t.type;let i=!1;y(u).filter(t=>t.getAttribute(g)===r||t.getAttribute(o)===r&&!t.hasAttribute(g)||"click"===r&&!t.hasAttribute(o)&&!t.hasAttribute(g)).forEach(t=>{const r=e.closest("["+m+'="true"]');r&&r.easyToggleStateTrigger===t&&(i=!0),!i&&t!==e&&t.isToggleActive&&(t.hasAttribute(s)||t.hasAttribute(l)?F:B)(t)}),i||document.removeEventListener(r,D,!1),e.hasAttribute(u)&&e.isToggleActive&&x(e)},O=t=>B(t.currentTarget.targetElement),I=t=>{if(t.hasAttribute(u))return t.hasAttribute(l)?console.warn(`You can't use '${u}' on a radio grouped trigger`):t.isToggleActive?x(t):void 0},q=t=>{const e=[...document.ETSFocusTrapContainer.querySelectorAll("a[href], area[href], input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]")];if(!e.length||"Tab"!==t.key)return;const r=t.target,i=e[0],n=e[e.length-1];return-1===e.indexOf(r)?(t.preventDefault(),i.focus()):t.shiftKey&&r===i?(t.preventDefault(),n.focus()):t.shiftKey||r!==n?void 0:(t.preventDefault(),i.focus())},C=(t,e,r)=>(t=>{if(t.hasAttribute(d)||t.hasAttribute(A)){const e=t.getAttribute(d)||t.getAttribute(A);return $(e,document.querySelectorAll(e))}if(t.hasAttribute(f)){const e=t.getAttribute(f);return $(e,t.parentElement.querySelectorAll(e))}if(t.hasAttribute(E)){const e=t.getAttribute(E);return $(e,t.querySelectorAll(e))}return t.hasAttribute(v)?$("previous",[t.previousElementSibling].filter(Boolean)):t.hasAttribute(h)?$("next",[t.nextElementSibling].filter(Boolean)):[]})(t).forEach(i=>{S(i,w),i.isToggleActive=!i.isToggleActive,k(i),r&&!i.classList.contains(e)&&i.classList.add(e),r||i.classList.toggle(e),t.hasAttribute(u)&&(i.setAttribute(m,t.isToggleActive),i.easyToggleStateTrigger=t),t.hasAttribute(c)&&(i.isToggleActive?(document.ETSFocusTrapContainer=i,document.addEventListener("keydown",q,!1)):(document.ETSFocusTrapContainer=null,document.removeEventListener("keydown",q,!1))),S(i,p),((t,e)=>{const r=y(T,t);if(0!==r.length)e.isToggleActive?r.forEach(t=>{t.targetElement=e,t.addEventListener("click",O,!1)}):(r.forEach(t=>{t.removeEventListener("click",O,!1)}),e.focus())})(i,t)}),B=t=>{S(t,w);const e=t.getAttribute(i)||"is-active";return t.isToggleActive=!t.isToggleActive,k(t),t.hasAttribute(b)||t.classList.toggle(e),S(t,p),C(t,e,!1),I(t)},j=t=>{S(t,w);const e=t.getAttribute(i)||"is-active";return t.isToggleActive=!0,k(t,{"aria-checked":!0,"aria-expanded":!0,"aria-hidden":!1,"aria-pressed":!0,"aria-selected":!0}),t.hasAttribute(b)||t.classList.contains(e)||t.classList.add(e),S(t,p),C(t,e,!0),I(t)},F=t=>{const e=L(t);return 0===e.length?B(t):-1===e.indexOf(t)?(e.forEach(B),B(t)):-1===e.indexOf(t)||t.hasAttribute(l)?void 0:B(t)},Y=()=>{y(a).filter(t=>!t.isETSDefInit).forEach(t=>t.hasAttribute(s)||t.hasAttribute(l)?L(t).length>0?console.warn(`Toggle group '${t.getAttribute(s)||t.getAttribute(l)}' must not have more than one trigger with '${a}'`):(j(t),void(t.isETSDefInit=!0)):j(t));const t=y().filter(t=>!t.isETSInit);return t.forEach(t=>{t.addEventListener(t.getAttribute(o)||"click",e=>{e.preventDefault(),(t.hasAttribute(s)||t.hasAttribute(l)?F:B)(t)},!1),t.isETSInit=!0}),y(n).length>0&&!document.isETSEscInit&&(document.addEventListener("keydown",t=>{"Escape"!==t.key&&"Esc"!==t.key||y(n).forEach(t=>{if(t.isToggleActive)return t.hasAttribute(l)?console.warn(`You can't use '${n}' on a radio grouped trigger`):(t.hasAttribute(s)?F:B)(t)})},!1),document.isETSEscInit=!0),y(r).length>0&&!document.isETSArrInit&&(document.addEventListener("keydown",t=>{const e=document.activeElement;if(-1===["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].indexOf(t.key)||!e.hasAttribute(i)||!e.hasAttribute(r))return;if(!e.hasAttribute(s)&&!e.hasAttribute(l))return console.warn(`You can't use '${r}' on a trigger without '${s}' or '${l}'`);t.preventDefault();const n=e.hasAttribute(s)?y(`${s}='${e.getAttribute(s)}'`):y(`${l}='${e.getAttribute(l)}'`);let a=e;switch(t.key){case"ArrowUp":case"ArrowLeft":a=n.indexOf(e)>0?n[n.indexOf(e)-1]:n[n.length-1];break;case"ArrowDown":case"ArrowRight":a=n.indexOf(e)<n.length-1?n[n.indexOf(e)+1]:n[0];break;case"Home":a=n[0];break;case"End":a=n[n.length-1]}return a.focus(),a.dispatchEvent(new Event(a.getAttribute(o)||"click"))},!1),document.isETSArrInit=!0),t},H=()=>{Y(),document.removeEventListener("DOMContentLoaded",H)};document.addEventListener("DOMContentLoaded",H),window.initEasyToggleState=Y}();

/**
 * @license
 * touchtap-event <http://github.com/Tyriar/touchtap-event>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/touchtap-event/blob/master/LICENSE>
 */
(function () {
  'use strict';

  var touchTapEvent;
  var isTapLength;
  var tapLengthTimeout;
  var startPosition = { x: -1, y: -1 };
  var currentPosition = { x: -1, y: -1 };

  /**
   * Gets the touch object from a touch* event.
   * @param {Event} e The event.
   * @returns {Touch} The (first) touch object from the event.
   */
  function getTouchObject(e) {
    if (e.originalEvent && e.originalEvent.targetTouches) {
      return e.originalEvent.targetTouches[0];
    }
    if (e.targetTouches) {
      return e.targetTouches[0];
    }
    return e;
  }

  /**
   * Gets whether two numbers are approximately equal to each other.
   * @param {number} a The first number.
   * @param {number} b The second number.
   * @returns {Boolean}
   */
  function approximatelyEqual(a, b) {
    return Math.abs(a - b) < 2;
  }

  /**
   * Handler for the touchstart event.
   * @param {Event} e The touchstart event.
   */
  function touchstart(e) {
    var touchObject = getTouchObject(e);
    startPosition.x = touchObject.pageX;
    startPosition.y = touchObject.pageY;
    currentPosition.x = touchObject.pageX;
    currentPosition.y = touchObject.pageY;
    isTapLength = true;
    if (tapLengthTimeout) {
      clearTimeout(tapLengthTimeout);
    }
    tapLengthTimeout = setTimeout(function () {
      isTapLength = false;
    }, 200);
  }

  /**
   * Handler for the touchend event.
   * @param {Event} e The touchend event.
   */
  function touchend(e) {
    if (isTapLength &&
        approximatelyEqual(startPosition.x, currentPosition.x) &&
        approximatelyEqual(startPosition.y, currentPosition.y)) {
      touchTapEvent.customData = {
        touchX: currentPosition.x,
        touchY: currentPosition.y
      };
      e.target.dispatchEvent(touchTapEvent);
    }
  }

  /**
   * Handler for the touchmove event.
   * @param {Event} e The touchmove event.
   */
  function touchmove(e) {
    var touchObject = getTouchObject(e);
    currentPosition.x = touchObject.pageX;
    currentPosition.y = touchObject.pageY;
  }

  /**
   * Initialises the library.
   */
  function init() {
    try {
      // The basic events module is supported by most browsers, including IE9 and newer.
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent#Example
      touchTapEvent = document.createEvent('Event');
      touchTapEvent.initEvent('touchtap', true, true);

      // EventTarget.addEventListener() is supported by most browsers, including IE9 and newer.
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Browser_compatibility
      document.addEventListener('touchstart', touchstart, false);
      document.addEventListener('touchend', touchend, false);
      document.addEventListener('touchcancel', touchend, false);
      document.addEventListener('touchmove', touchmove, false);
    }
    catch (err) {
      // Ignore "Object doesn't support this property or method" in IE8 and earlier.
    }
  }

  init();
})();

/**
 * @license
 * abbr-touch <http://github.com/Tyriar/abbr-touch>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/abbr-touch/blob/master/LICENSE>
 */
var abbrTouch = (function () { // eslint-disable-line no-unused-vars
  'use strict';

  /**
   * Generates a touchtap event handler that calls the tap handler provided.
   * @param {function} handler The tap handler to call.
   * @returns {function}
   */
  function generateTouchtapHandler(handler) {
    return function (e) {
      handler(e.currentTarget, e.currentTarget.title, e.customData.touchX, e.customData.touchY);
    };
  }

  /**
   * The default lightweight tap handler.
   */
  function defaultOnTapHandler(target, title, touchX, touchY) { // eslint-disable-line no-unused-vars
    alert(title); // eslint-disable-line no-alert
  }

  /**
   * Attaches abbrTouch events on all abbr[title] elements within an element
   * @param {HTMLElement} elementScope The element containing abbr[title]
   * elements.
   * @param {function} customTapHandler (Optional) A custom touchtap handler to
   * be used when abbr[title] elements are touched.
   */
  function init(elementScope, customTapHandler) {
    if (!elementScope) {
      elementScope = document;
    }

    var tapHandler = customTapHandler || defaultOnTapHandler;

    var elements = elementScope.querySelectorAll('abbr[title]');
    var touchtapHandler = generateTouchtapHandler(tapHandler);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchtap', touchtapHandler);
    }
  }

  return init;
})();

/* global abbrTouch */

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function perfmark(callback, key) {
  performance.mark('mark_' + key + '_start');
  callback();
  requestAnimationFrame(function() {
    requestAnimationFrame(() => {
      performance.mark('mark_' + key + '_end');
      performance.measure(
        'mark_' + key,
        'mark_' + key + '_start',
        'mark_' + key + '_end'
      );
    });
  });
}

(function saveData() {
  if ('connection' in navigator) {
    if (navigator.connection.saveData == true) {
      // Add class to document
      document.documentElement.classList.add('save-data');
      // use default img src
      [...document.querySelectorAll('[srcset]')].forEach(img => {
        // eslint-disable-next-line require-unicode-regexp
        img.srcset = img.srcset
          .replace(/q_auto/g, 'q_0')
          .replace(/\/fetch\//g, '/fetch/e_grayscale/');
      });
    }
  }
})();

(function darkModeSwitcher() {
  var labels = document.querySelectorAll('.color-mode-labels label');
  labels.forEach(function(label) {
    label.addEventListener('click', function() {
      localStorage.setItem('dark_mode', this.dataset.value);
    });
  });
})();

(function switchlang() {
  perfmark(function() {
    // Detect user language and redirect, if first time, to the right page ----------------
    try {
      var lang_user;
      lang_user = localStorage.getItem('lang_user');
      if (!lang_user) {
        lang_user = (
          window.navigator.userLanguage ||
          (window.navigator.languages.length > 0 &&
            window.navigator.languages[0]) ||
          window.navigator.language
        ).slice(0, 2);
        localStorage.setItem('lang_user', lang_user);
        var lang_site = document.getElementsByTagName('html')[0].lang;
        if (lang_user != lang_site) {
          window.location = document.querySelector(
            '[hreflang][rel="alternate"]'
          ).href;
        }
      }
    } catch (e) {}

    document.addEventListener(
      'click',
      function(event) {
        if (event.target.matches('[lang][href*="/"]')) {
          localStorage.setItem('lang_user', event.target.getAttribute('lang'));
        }
      },
      false
    );
  }, 'switchlang');
})();

ready(function() {
  perfmark(function() {
    window.initEasyToggleState();
  }, 'easy_toggle');

  (function(abbrTouch) {
    var tooltipTimeout;

    function getTooltipElement() {
      var tooltip = document.querySelector('#abbr-tooltip');
      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'abbr-tooltip';
        // Technically this is duplicate content, just exposing it on mobile
        tooltip.setAttribute('aria-hidden', 'true');
        document.body.appendChild(tooltip);
      }
      return tooltip;
    }

    function updateTooltip(tooltip, term, expandedTerm) {
      var text = term + ': ' + expandedTerm;
      tooltip.innerHTML = text;
      tooltip.classList.add('visible');

      if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
      }

      var timeoutLength = text.length * 120;
      tooltipTimeout = setTimeout(function() {
        tooltip.classList.remove('visible');
      }, timeoutLength);
    }

    perfmark(function() {
      abbrTouch(document.querySelector('article'), function(target, title) {
        var tooltip = getTooltipElement();
        // Ensure the tooltip is ready so that the initial transition works
        setTimeout(function() {
          updateTooltip(tooltip, target.innerHTML, title);
        }, 0);
      });
    }, 'abbrTouch');
  })(abbrTouch);

  function decorate_footnotes() {
    var lang = document.getElementsByTagName('html')[0].getAttribute('lang'),
      alternatives = {
        to: {
          en: 'footnote',
          fr: 'note de bas de page'
        },
        back: {
          en: 'return to the text',
          fr: 'retour au texte'
        }
      };

    var i,
      textnotes = [...document.querySelectorAll('.footnote-ref a')],
      footnotes = [...document.getElementsByClassName('footnote-backref')];
    for (i = 0; i < textnotes.length; i++) {
      textnotes[i].setAttribute('title', alternatives.to[lang]);
    }
    for (i = 0; i < footnotes.length; i++) {
      footnotes[i].setAttribute('title', alternatives.back[lang]);
    }
  }
  decorate_footnotes();

  const tagcountElement = document.getElementById('tagcount');
  if (tagcountElement) {
    tagcountElement.style.display = 'block';

    [...document.querySelectorAll('.tagcount button')].forEach(b => {
      b.addEventListener('click', e => {
        e.target.classList.toggle('active');

        // Get active tags
        const activeTags = [
          ...document.querySelectorAll('.tagcount .active')
        ].reduce((acc, x) => [...acc, 'tag-' + x.dataset['tagSlug']], []);

        // Display articles
        [...document.querySelectorAll('article')].forEach(article => {
          if (
            activeTags.length == 0 ||
            activeTags.reduce(
              (accumulator, currentValue) =>
                accumulator || article.classList.contains(currentValue),
              false
            )
          ) {
            article.style.display = 'block';
          } else {
            article.style.display = 'none';
          }
        });
      });
    });
  }
});
