import storage from './storage.js';

function main(r) {
    const invitees_id = r.uri.split("/")[1];
    const invitees = storage.invitees.find(invitees => invitees.id == invitees_id);

    if (!invitees) {
        return "/non-existing-path"
    }

    return encodeURI(`/${process.env.COUPLE_PAGE}/?to=${invitees.name}`);
}

export default { main }