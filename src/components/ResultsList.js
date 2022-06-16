import React from 'react'
import { Text, View, Image, StyleSheet, FlatList } from 'react-native'
import ResultDetail from './ResultDetail'

const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.content}>
            <Text style={styles.title}> {title} </Text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({item}) => 
                <ResultDetail item={item}/>
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        // marginLeft: 16
    },
    title: {
        marginLeft: 12,
        fontSize: 24, 
        fontWeight: 'bold'
    }
})

export default ResultsList