#! /usr/local/bin/node
const http = require('http')
const fs = require('fs')

try {
    if (process.argv[2]) {
        const dir = []
        let Readme = ""
        let originalUrl = process.argv[2]
        function get(url) {
            let data = ""
            return new Promise(r => {
                const req = http.get(url, res => {
                    res.on('data', (chunk) => {
                        data += chunk
                    })
                    res.on('end', () => {
                        if (url.indexOf('README') !== -1) {
                            let flag = true
                            for (d of ["Tu veux de l'aide ? Moi aussi !", "Non ce n'est toujours pas bon ...", "Toujours pas tu vas craquer non ?", "Demande à ton voisin du dessus", "Demande à ton voisin du dessous", "Demande à ton voisin de droite", "Demande à ton voisin de gauche"])
                                if (data.indexOf(d) !== -1) flag = false
                            if (flag === true)
                                Readme += `>>>>>>>${url}\n>>>>>>>${data}\n\n`
                        }
                        r(getPath(data))
                    })
                })
            })
        }

        function getPath(body) {
            const data = body.split(/<a\ href=\"/)
            for (let i = 0; i < data.length; i++)
                if (data[i].indexOf('/">') !== -1 || data[i].indexOf('README') !== -1)
                    data[i] = data[i].split('">')[0]
                else {
                    data.splice(i, 1)
                    i--;
                }
            return data
        }
        async function autoRequest(url, dir = [], index = 0) {
            const newDir = await get(url)
            while (newDir[index]) {
                const found = newDir[index].indexOf('../')
                if (found === -1)
                    await autoRequest(`${url.trim()}${newDir[index].trim()} `, newDir)
                index++
            }
            return
        }

        autoRequest(originalUrl).then(() => fs.writeFileSync('./newFile.txt', Readme))
    }
} catch (err) {
    console.log("ERROR", err)
}