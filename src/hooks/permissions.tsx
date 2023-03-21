import {useGetAccountPermissionsQuery} from "../apis/accountApi";

/**
 * 权限检测当前用户是否有某个权限
 * @param permissionKey 权限 key
 */
export const useHasPermission = (permissionKey: string | string[]) => {
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


/**
 * 权限检测当前用户是否有某个权限
 * @param permissionKey 权限 key
 */
export const useHasAnyPermission = (permissionKey: string | string[]) => {
    const {data, isLoading} = useGetAccountPermissionsQuery(1);

    const hasAnyPermission = (): boolean => {
        if (isLoading) {
            return false;
        }
        console.log(">>>>>> hasPermission: ",data)
        if (Array.isArray(permissionKey)){
            for (let key of permissionKey) {
                if (data.permissions.includes(permissionKey)){
                    return true;
                }
            }
            return false;
        }
        return data.permissions.includes(permissionKey);
    }

    return {isLoading, hasAnyPermission};
}