import fs from "fs";

const inviteesPath = "/etc/nginx/storage/invitees.json";
const invitees = JSON.parse(fs.readFileSync(inviteesPath));

export default { invitees };