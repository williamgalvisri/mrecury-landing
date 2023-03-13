/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

interface triggerOnScreenRefProps {
    ref: any;
}
function triggerOnScreenRef ({ref}: triggerOnScreenRefProps) {
    const [active, setActive] = useState<boolean>(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setActive(entry.isIntersecting)
        });
        observer.observe(ref.current);
    });
    return {active}
}

export default triggerOnScreenRef;