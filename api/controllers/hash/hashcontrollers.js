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

    async compareHash(string, hashString) {
        console.log(`this is the string ${string}`)
        console.log(`this is the hashstring ${hashString}`)
        try {
            const booleanResult = await bcrypt.compare(string, hashString) 
            console.log({
                is_comparison_correct: booleanResult
            })
            return booleanResult // it's a booleanResult
        } catch (err) {
            console.log({
                error: err
            })
        }
    }

}

const HashClass = new Hash()

module.exports = {
    HashClass
}
