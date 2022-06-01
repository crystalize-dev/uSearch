import {useMemo} from "react";

export const usePagination = (totalPages) => {
    const result = useMemo(() => {
        const tempResult = []
        for (let i = 0; i < totalPages; i++) {
            tempResult.push(i + 1);
        }
        return tempResult;
    }, [totalPages])

    return result;
}