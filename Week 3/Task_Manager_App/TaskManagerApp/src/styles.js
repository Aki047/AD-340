import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#36013f',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
        color: 'white',
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderColor: 'gold',
        borderWidth: 1,
        padding: 10,
        width: '100%',
    },
    taskText: {
        color: 'white',
        flex: 1,
        textAlign: 'left',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    statusButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    statusButtonText: {
        color: 'white',
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 10,
        marginLeft: 10,
    },
    deleteButtonText: {
        color: 'white',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 60,
        color: 'white',
        paddingLeft: 10,
        borderColor: 'gold',
        borderWidth: 1,
        width: '100%',
    },
    addButton: {
        backgroundColor: 'gold',
        padding: 10,
        position: 'absolute',
        bottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#36013f',
        fontWeight: 'bold',
    },
});

export default styles;
