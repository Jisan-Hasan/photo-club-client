import { useEffect } from "react";

// creates hooks for dynamic title
const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Photo Club`;
    }, [title]);
};

export default useTitle;
