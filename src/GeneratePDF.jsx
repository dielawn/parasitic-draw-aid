import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export const GeneratePDF = ({batTestResults, codeArray, drawResults, ampsLog, noteObj}) => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4',
            flexWrap: 'wrap'
        },
        section: {
            flexGrow: 1,
            flexDirection: 'row', 
            padding: 10,
            margin: 2,
            fontSize: 12,
            flexWrap: 'wrap',
            width: '50vw'
        },
        text: {
            padding: 5,
            paddingLeft: 50
        },
        text2: {
            padding: 5
        },
        header: {
            margin: 10,
            padding: 10,
            backgroundColor: 'blue',
            color: 'white',
            textAlign: 'center',
            width: '96vw',
            alignContent: 'center',
            fontSize: 20
        },
        vDrop: {
            flexDirection: 'row', 
            border: '1 solid black',
            width: '30vw', 
            padding: 10,
            margin: 2,
            fontSize: 12,
            flexWrap: 'wrap'
        },
        vDropContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap', 
            width: '100vw', 
            alignContent: 'center'
        },
    })
    return (
        <Document>
            <Page size="A4" style={styles.page}>    

            <View  style={styles.section}>
                <Text style={styles.header}>Battery Test Results:</Text>
                {batTestResults.map((resultObj, index) => (
                    <View key={index}>
                        <Text style={styles.text}>Battery Test: {resultObj.volts} volts, {resultObj.amps} cca </Text>
                    </View>
                ))}
            </View>

            <View  style={styles.section}>
                <Text style={styles.header}>Codes:</Text>
                {codeArray.map((item, index) => (
                    <View key={index}>
                        <Text style={styles.text}>Code: {item}</Text>
                    </View>
                ))}
            </View>

            <View  style={styles.section}>
                <Text style={styles.header}>System Current:</Text>
                {ampsLog.map((resultObj, index) => (
                    <View  key={index}>
                        <Text style={styles.text}>{resultObj.systemAmps} mA current at battery</Text>
                    </View>
                    
                ))}
            </View>

            <View  style={styles.section}>
                <View style={styles.vDropContainer}>
                    <Text style={styles.header}>Voltage Drop Test:</Text>
                    {drawResults.map((resultObj, index) => (
                        <View style={styles.vDrop}  key={index}>
                            <Text style={styles.text2}>Fuse# {resultObj.fuseLocation}</Text>
                            <Text style={styles.text2}>Type: {resultObj.fuseType}</Text>
                            <Text style={styles.text2}> {resultObj.mV} mV</Text>
                            <Text style={styles.text2}>{resultObj.mADraw} mA </Text> 
                        </View>
                    ))}
                </View>
            </View>

            <View  style={styles.section}>
                <Text style={styles.header}>Notes:</Text>
                {noteObj.map((resultObj, index) => (
                   <View key={index}>
                     <Text style={styles.text}>{resultObj.note}</Text>
                   </View>
                ))}
            </View>
          
            </Page>
        </Document>
    )
}