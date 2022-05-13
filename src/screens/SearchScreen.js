import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [text, setText] = useState("")
    
    function searchRestaurants() {

    }

    return (
        <View style={style.content}>
            <View style={style.searchBar} >
                <SearchBar                 
                    didChangeText={setText}
                    onSearchTap={searchRestaurants}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    content: {
        backgroundColor: 'white', 
        flex: 1
    }, 
    searchBar: {
        marginVertical: 12
    }
})

export default SearchScreen