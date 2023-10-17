// all reusable custom hooks for all components not just limited to any Feature specific but Globally throughput this app to use when needed

import { useState } from "react"

export const useForTruthToggle = () => {
    const [isTrue, setIsTrue] = useState();

    const handleTruthy = () => setIsTrue(true);

    const handleFalsy = () => setIsTrue(false);

    return {isTrue, handleFalsy, handleTruthy}
}
