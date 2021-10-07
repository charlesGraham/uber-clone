import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, San Diego, CA"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "San Diego Downtown, San Diego, CA"
    },
];

const NavFavorites = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <Text>wsup</Text>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
