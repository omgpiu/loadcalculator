

const data = [
    {id: 1, responseText: 'Response received, status 200'}
]


const fakeRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.9) {
                return reject(new Error('Oo Something bad happened'))
            } else {
                resolve(data)
            }
        }, 1000)
    })
}


export const authAPI = {
    authMe() {
        return fakeRequest()
    },
    login() {
        return fakeRequest()
    },
    logout() {
        return fakeRequest()
    },
}

export const calcApi = {
    typeOfTransport() {
        return fakeRequest()
    },
    typeOfPackaging() {
        return fakeRequest()
    },
}