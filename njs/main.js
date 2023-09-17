import storageTypes from './storage.js';

var storage
if (!process.env.ENABLE_WEBDIS || !process.env.WEBDIS_URL) {
    storage = storageTypes.jsonStorage(process.env.JSON_STORAGE_PATH || "/etc/nginx/storage/invitees.json");
}
else {
    storage = storageTypes.webdisStorage(process.env.WEBDIS_URL);
}

async function main(r) {
    const invitees_id = r.uri.split("/")[1];
    const invitees = await storage.findById(invitees_id);
    if (!invitees) {
        r.headersOut['X-new-uri'] = "/non-existing-path";
        r.return(200);
        return;
    }

    r.headersOut['X-new-uri'] = encodeURI(`/${process.env.COUPLE_PAGE}/?to=${invitees.name}`);
    r.return(200);
    return;
}

export default { main }