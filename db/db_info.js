module.exports = (function() {
    return {
        local: {
            host:'localhost',
            user:'jay',
            database:'nodedb',
            password:'password@'
        },
        real: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        },
        staging: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        },
        dev: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        }
    }
})();
