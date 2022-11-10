import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Photo Club`;
    }, [title]);
};

export default useTitle;
