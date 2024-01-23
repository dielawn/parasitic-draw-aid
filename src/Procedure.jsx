export const FollowProcedure = () => {
    return (
        <div>
            <ol className="alignLeft"> 
                <li>Charge battery, test battery & charging system</li>
                <li>Scan & document codes</li>
                <li>Visual inspection for lights, devices, or obvious draws </li>      
                <li>Prepare vehicle for sleep</li>
                <ul>
                    <li>Pop hood for access to battery junction box, bypass/disable hood ajar switch</li>
                    <li>Open and latch doors for access to interior fuse panel</li>
                </ul>
               
                <li>Wait for modules to fall asleep, overnight is best</li>
                <li>Test</li>
                <ul>
                    <li>Amp clamp at battery <em>LOG RESULT</em></li>
                    <li>Thermal camera scan fuse boxes & vehicle electronics <em>Note results</em></li>
                    <li>Measure voltage drop across fuses convert to mA and compare to amp clamp result</li>
                    <li>Last pull remaining fuses 1 at a time while monitoring amperage</li>
                </ul>
                <li>Isolate: </li>
                <ul>
                    <li>Refrence a wiring diagram and unplug each circuit load one at a time while monitoring amperage</li>
                </ul>
            </ol>
            
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

        </div>
    )
}