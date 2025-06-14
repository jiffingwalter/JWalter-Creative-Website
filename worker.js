import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event)
  } catch (e) {
    // fallback to index.html for Angular routing
    return await getAssetFromKV(event, { mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req) })
  }
}