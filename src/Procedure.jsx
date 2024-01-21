export const followProcedure = () => {
    return (
        <div>
            <ul> 
                <h4>Charge battery, test battery & charging system</h4>
                <li>Scan & document codes</li>
                <li>Visual inspection for lights, devices, or obvious draws </li>      
                <h4>Prepare vehicle for sleep</h4>
                <li>Pop hood for access to battery junction box, bypass/disable hood ajar switch</li>
                <li>Open and latch doors for access to interior fuse panel</li>
                <li>Wait for modules to fall asleep, every vehicle is different look it up</li>
            </ul>
            <ul>
                <h4>Test Methods</h4>
                <li>Amp clamp</li>
                <a href="https://www.youtube.com/watch?v=jnQ3qCYO684">Measuring Parasitic Drain with an AMP Clamp</a>
                <p>Good for baseline draw</p>
                <li>Thermal camera</li>
                <a href="https://www.youtube.com/watch?v=S1gAzu4Br3k">Measuring Parasitic Drain with a Thermal Camera</a>
                <li>Voltage drop</li>
                <a href="https://www.youtube.com/watch?v=lRcj1fQcWwU">Measuring Parasitic Drain with Voltage Drop Across a Fuse</a>
                <li>Pulling fuses</li>
            </ul>
        </div>
    )
}