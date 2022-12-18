'use strict';

// Check if we are on the static site.
var current_url = window.location.origin;
var static_url = document.querySelector("meta[name='ssp-url']").getAttribute("content");
var origin_url = atob(document.querySelector("meta[name='ssp-origin-url']").getAttribute("content"));
var redirect_url = document.querySelector("meta[name='ssp-comment-redirect-url']").getAttribute("content");

if (static_url.includes(current_url)) {
  function success(el, redirect_url) {
    el.target.submit.disabled = false;

    if (el.target.querySelector('input[type="submit"]')) {
      el.target.querySelector('input[type="submit"]').blur();
    }

    el.target.reset();

    // Redirect if set
    if (redirect_url.length > 0) {
      window.location.replace(redirect_url);
    }
  }

  function submitForm(method, url, redirect_url, data, el) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;

      if (xhr.status === 200) {
        success(el, redirect_url);
      }
    };

    xhr.send(data);
  }

  function modifyFormAttributes(form) {
    form.removeAttribute("action");
    form.removeAttribute("method");
    form.removeAttribute("enctype");
    form.removeAttribute("novalidate");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const allForms = document.querySelectorAll(
      "#commentform"
    );

    allForms.forEach((form) => {
      modifyFormAttributes(form);

      // Inputs
      const inputs = form.querySelectorAll("input");

      // Add HTML required attribute
      inputs.forEach((input) => {
        if (input.getAttribute("aria-required") === "true") {
          input.required = true;
        }
      });

      form.addEventListener("submit", function (el) {
        el.preventDefault();

        var data = new FormData(form);
        submitForm("POST", origin_url + '/wp-comments-post.php', redirect_url, data, el);
      });
    });
  });
}
