=== Simply Static Pro ===
Contributors: patrickposner
Tags: html, static website generator, static site, secure, fast
Requires at least: 5.4
Tested up to: 6.0
Requires PHP: 7.4
Stable tag: 1.2.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Simply Static Pro enhances Simply Static with awesome features like Forms, GitHub integration and comments.

== Description ==

Simply Static Pro is an addon for the quite popular Simply Static Plugin and enhances it with various features.

= Forms =

Currently supported are Contact Form 7 and Gravity Forms. You can use the integrated webhook or use external services to receive the form submits and send you an e-mail.

= Comments =

Simply Static Pro can handle comment submission on your static site with webhooks.

= GitHub Integration =

Simply Static Pro integrates with GitHub. It creates and maintains a repository for you that you can use to deploy your website to one of the various
static site hosters like Vercel, Netlify, GitHub Pages or Cloudflare Pages.

= Builds =

Builds allow you to only export single pages or a subset of pages instead of doing a full static export every time.

= Search =

Simply Static Pro uses Fuse.js and creates a fully static index of your website. It provides a shortcode called [ssp-search] that renders a search bar with auto-suggest.
It's completely independed from any third-party services.

== Changelog ==

= 1.2.1 =

* brought back assignable builds

= 1.2 =

 * dependencies updated
 * improved Windows support
 * bugfixes for search crawler (Algolia)
 * no result feedback for Fuse.js
 * filter to load fuse.js from the local environment
 * "use strict" for JS files
 * menu fix for builds and forms
 * save config files in uploads instead of the plugins directory
 * reworked the BunnyCDN integration with WP HTTP API
 * new settings for BunnyCDN to set storage URL and access key
 * combined menus for Forms, Comments, and CORS
 * automatically update forms config on save ssp *form
 * only show CPT if forms are activated in the settings
 * filter to disable e-mail form webhook
 * improved builds to include additional files
 * delete posts/pages from the static website
 * WPML, Polylang and Translatepress support

= 1.1.3 =

 * added support for multisite activation
 * UI improvements for single exports
 * auto-clear table on static exports
 * use post ID as reference for Algolia
 * fixed CDN clear cache and added delete method
 * added webhook args filter
 * Freemius SDK security update

= 1.1.2 =

* allow JS in CF7 forms
* allow mail in CF7 forms
* fixed PHP notice in search view
* removed debuggin code
* improved translation
* copy config files if delivery method local directory

= 1.1.1 =

* improved CORS handling for forms
* new comments solution based on JavaScript
* load fuse.js via CDN to prevent map errors
* remove emojis from wp_head()
* better directory handling with CDN integration
* better conditional checks for search scripts
* custom 404 pages in BunnyCDN
* dev mode warning
* new filters for CDN data and directories
* new filter to deploy to sub direcories in GitHub
* generate static button in Block Editor top bar
* updated vendor scripts

= 1.1 =

* Algolia Search Integration
* Fuse.js Search Integration improvement
* improved search indexing for larger sites
* improved admin settings for search
* added options to select indexable content (title, content, excerpt)
* improved german translation
* added Webhook support for GitHub integration
* improved path handling for subdirectories
* automatically copy config files
* better single exports with taxonomies, images and archive pages
* added helper class for utility functions
* updated dependencies
* integrated BunnyCDN
* added dynamic filter based on meta tags for config URLs
* Basic Auth support for search crawling
* removed jQuery as dependencies from static sites

= 1.0.4 =

* option to deactivate forms integration
* admin menu fix for Simply Static settings
* builds and single exports now exporting images as well
* introduced filter to handle assets via single exports / builds

= 1.0.3 =

* better Freemius SDK integration
* better check for the free version
* check for wp_filesystem in Forms
* added message (HTML) and custom header for e-mail
* dynamic headers for form integration
* cron-job exection for search index via filter
* added option to deactivate/activate form integration

= 1.0.2 =

* dependency update for Arachnid/Crawler
* better error handling for form generation
* better error handling for search index generation
* new filter to run search index with cron
* automatically create configs directory if not exists
* bumbed version number for CSS (cache busting)

= 1.0.1 =

* fixed PHP notice for static-url
* CPT support for single exports
* form and search config via ajax
* removed form and search config tasks
* better config_url solution with JavaScript
* updated dependencies (Search and GitHub integration)
* added trial support

= 1.0 =

* initial release

