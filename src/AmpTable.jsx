import React from 'react'
export const AmpTable = () => {
    return (
        <table  className="alignLeft">
        <thead>
            <tr>
                <th>Milliamps to Amps Conversion Chart</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Milliamps (mA)</td>
                <td>Amps (A)</td>
            </tr>
            <tr>
                <td>1 mA</td>
                <td>0.001 A</td>
            </tr>
            <tr>
                <td>20 mA</td>
                <td>0.02 A</td>
            </tr>
            <tr>
                <td>300 mA</td>
                <td>0.3 A</td>
            </tr>
        </tbody>
    </table>
    )
}