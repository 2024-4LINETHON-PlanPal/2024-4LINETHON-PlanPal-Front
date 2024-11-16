import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

const LodingModal = () => {
    const [loading, setLoading] = useState(true);
    return (
        <>    
        <BeatLoader
            color="#17171b"
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        </>

    )
}

export default LodingModal
