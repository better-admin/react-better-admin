import React, {useEffect, useState} from "react";
import {useGetDictDataQuery} from "../../apis/commonsApi";
import {Select} from "antd";
import {SelectProps} from "antd/es/select";
import {useTranslation} from "react-i18next";

const {Option} = Select;
const DictSelect: React.FC<{ dictUrl: string } & SelectProps> = (props) => {

    const [t] = useTranslation();
    const {isLoading, isSuccess, data} = useGetDictDataQuery(props.dictUrl);
    const [value, setValue] = useState(isSuccess && data.list ? data.list[0].value : null);

    useEffect(() => {
        if (!isLoading && !value && data && data.list) {
            setValue(data.list[0].value);
        }
    }, [isLoading])

    return (
        <Select {...props} placeholder={isLoading && t('loading...')}
                loading={isLoading}
                value={value}
                onSelect={(value, option) => {
                    setValue(value)
                }}
        >
            {
                isSuccess && data.list!.map((item) => {
                    return <Option value={item.value}>{item.text}</Option>
                })
            }
        </Select>
    )
}

export default DictSelect