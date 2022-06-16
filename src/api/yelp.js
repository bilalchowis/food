import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 6UleyQlc-mFH32ch6hLXp-zdGuMnW8ovYOti01jPGI-ZdqQCjyYUjl45j4BL_SDrALmqmCsj7KFKwzVZwXZyfNJyuyY5ej8V4_yoLsbUsQvqWVKPsTOlwu4Kupx-YnYx'
    }
})