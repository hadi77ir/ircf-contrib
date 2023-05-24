Downtest worker
===============

This is a very simple worker that may be used in conjunction with your Cloudflare setup to:
1. Check clean and working Cloudflare IPs
2. Check which IPs work together with your domain.

As I have observed in these days, not all IPs works with all domains. There are segmentations on Cloudflare side and SNI-based blocking on 
the Great Firewall side.

Combining this with customizable scanners like [Android scanner](https://github.com/xianshenglu/cloudflare-ip-tester-app) has proved to be effective.


Cloudflare Settings
--------------------
After creating the worker and setting entry point, save it and add a worker route to your domain like this: `mydomain.com/downtest-123234365`.

Creating worker routes are explained [here](https://developers.cloudflare.com/workers/platform/triggers/routes/#set-up-a-route-in-the-dashboard).

Scanner Settings
------------------
In the scanner, use `https://{DOMAIN}/{WORKER_PATH}` as "Test URL". Happy testing!
