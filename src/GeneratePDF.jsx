import { useEffect } from 'react';
import { TestResults } from './Results';
import { Document, Page, Text, View } from '@react-pdf/renderer';

export const GeneratePDF = ({batTestResults, codeArray, drawResults, timeLog, ampsLog, noteObj}) => {
   useEffect(() => {

   })
    return (
        <Document>
            <Page>               
            <View className="resultsDiv">
                <Text>Battery Test Results:</Text>
                {batTestResults.map((resultObj, index) => (
                    <View key={index}>
                        <Text>Battery Test: {resultObj.volts} volts, {resultObj.amps} cca </Text>
                        <Text>{resultObj.timestamp} </Text>
                    </View>
                ))}
                <Text>Codes:</Text>
                {codeArray.map((item, index) => (
                    <View key={index}>
                        <Text>Code: {item}</Text>
                    </View>
                ))}
                <Text>Voltage Drop Test:</Text>
                {drawResults.map((resultObj, index) => (
                     <View  key={index}>
                        <Text key={index}>Fuse# {resultObj.fuseLocation}</Text>
                        <Text>Type: {resultObj.fuseType}</Text>
                        <Text> {resultObj.mV} mV</Text>{resultObj.mADraw} mA 
                        <Text>{resultObj.timestamp}</Text>
                    </View>
                ))}
                <Text>Sleep log:</Text>
                {timeLog.map((resultObj, index) => (
                     <View  key={index}>
                        <Text key={index}>{resultObj.sleepTime} hours until sleep.</Text>
                        <Text>Started: {resultObj.timestamp}</Text>
                    </View>
                ))}
                <Text>System Current:</Text>
                {ampsLog.map((resultObj, index) => (
                    <View  key={index}>
                        <Text>{resultObj.systemAmps} mA current at battery</Text>
                        <Text> {resultObj.timestamp}</Text>
                    </View>
                    
                ))}
                <Text>Notes:</Text>
                {noteObj.map((resultObj, index) => (
                   <View key={index}>
                     <Text>{resultObj.note}</Text>
                     <Text> {resultObj.timestamp}</Text>
                   </View>
                ))}
            </View>

            </Page>
        </Document>
    )
}