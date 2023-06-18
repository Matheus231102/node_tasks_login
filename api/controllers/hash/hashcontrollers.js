const bcrypt = require('bcryptjs')

class Hash {
    async hashInfo(stringToHash) {
        try {
            const defaultSalts = 10
            const hashedInfo = await bcrypt.hash(stringToHash, defaultSalts)
            console.log({
                is_info_hashed: true
            })
            return hashedInfo
        } catch (err) {
            console.log({
                is_info_hashed: false,
                error: err
            })
        }
    }
}

const HashClass = new Hash()

module.exports = {
    HashClass
}
