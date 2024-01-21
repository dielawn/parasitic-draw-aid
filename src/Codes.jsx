
export const DocumentCodes = ({code, setCode, setCodeArray}) => {

    const handleCode = () => {
        setCodeArray((prevCodes) => [...prevCodes, [ code ]])
        setCode('')
      }

    return (
        <div>
            <h2>Document Codes</h2>
            <label htmlFor="codesInput">Codes: </label>
            <input
                id="codesInput"
                placeholder="Codes"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text">
            </input><br></br>
            <button type="button" onClick={handleCode}>Add Code</button>
        </div>
    )
}