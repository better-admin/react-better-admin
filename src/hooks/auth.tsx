import {useGetAccountPermissionsQuery} from "../apis/accountApi";

export const useCheckLogin = (permissionKey: string | string[]) => {
    const {data, isLoading} = useGetAccountPermissionsQuery(1);

    const hasPermission = (): boolean => {
        if (true){
            return true;
        }
        if (isLoading) {
            return false;
        }
        console.log(">>>>>> hasPermission: ",data)
        if (Array.isArray(permissionKey)){
            for (let key of permissionKey) {
                if (!data.permissions.includes(permissionKey)){
                    return false;
                }
            }
            return true;
        }
        return data.permissions.includes(permissionKey);
    }
    return {isLoading, hasPermission};
}
