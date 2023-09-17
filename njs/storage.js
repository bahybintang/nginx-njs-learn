import fs from "fs";

const jsonStorage = function (path) {
    const invitees = JSON.parse(fs.readFileSync(path))
    const findById = function (id) {
        return invitees.find((invitee) => invitee.id === id)
    }
    return {
        findById
    }
}

const webdisStorage = function (url) {
    const findById = function (id) {
        return ngx.fetch(`${url}/GET/${id}`)
            .then((response) => {
                if (response.status !== 200) {
                    return null
                }
                return response.json()
            })
            .then((json) => {
                return {
                    id: id,
                    name: json["GET"]
                }
            }).catch((error) => {
                ngx.log(1, error)
                return null
            })
    }
    return {
        findById
    }
}

export default { jsonStorage, webdisStorage };