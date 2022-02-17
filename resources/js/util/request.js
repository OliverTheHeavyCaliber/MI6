import axios from 'axios';

/**
 * define our own wrappers around axios (or fetch) that
 * would contain all the necessary and common headers and
 * configuration options
 *
 * so that we don't have to repeat them everytime we want
 * to make a HTTP request from one of our scripts
 */

/**
 * wrapper around axios.get
 */
const get = async (url, config = {}) => {

    config.headers = {
        ...(config.headers || {}),
        'Accept' : 'application/json',
        'Content-type': 'application/json'
    }

    return await axios.get(url, config);

}

/**
 * wrapper around axios.post
 */
const post = async (url, data, config = {}) => {

    config.headers = {
        ...(config.headers || {}),
        'Accept' : 'application/json',
        'Content-type': 'application/json'
    }

    return await axios.post(url, data, config);

}

export {
    get,
    post
}