# Search engine change notifications

IndexNow supports notifying participating search engines of added, changed, or deleted URLs. A successful receipt does not prove crawling or indexing. See the [protocol documentation](https://www.indexnow.org/documentation) and [Bing integration guidance](https://www.bing.com/indexnow/getstarted).

## Production configuration

Store one randomly generated 32 character lowercase hexadecimal verification value as the sensitive production environment variable `INDEXNOW_KEY`. Keep its value and the exact file location out of Git, client code, screenshots, and application logs. No value is included in this repository.

Middleware serves the UTF8 verification response at the root filename formed by that value followed by `.txt`, only when the requested filename matches the configured value. The response is plain text, excluded from indexing, and accepts GET and HEAD. An absent configuration or unmatched filename returns 404. This endpoint belongs to host verification; it is not a customer form or a public submission API.

## After a verified production release

1. Check the actual production commit, hosting completion, and changed custom domain content.
2. Save the changed canonical page URLs as a JSON array in a private operator file. Submit recent changes once; do not replay the whole sitemap after every build. Keep retired URLs out of this live page workflow.
3. Run `node scripts/submit-indexnow.mjs --urls-file /absolute/path/changed-urls.json --output /absolute/path/preflight.json`. This default dry run reads the live sitemap and checks HTML, canonicals, and indexing directives without posting.
4. Load the private verification value into `INDEXNOW_KEY` through the operator's secure environment. Add `--submit` to send the checked batch. The script validates the live verification response again and sends only clean canonical page URLs to the fixed protocol endpoint.
5. Save the receipt separately from search results. HTTP 200 confirms submission; HTTP 202 means receipt with key validation pending. Other statuses fail the command. Inspect the cause before considering a retry; no automatic retries are performed.

The script never reads customer briefs or sends email. The receipt contains public page URLs and status, without the verification value. This is an operator release step, not a scheduled task or a notification on every visitor request. Bing report access and its separate citation measurements still need the correct account.
