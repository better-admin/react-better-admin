import React, {useState} from 'react';
import {
    ColumnHeightOutlined, DeleteOutlined, DownloadOutlined,
    DownOutlined, EditOutlined, EyeOutlined, FormatPainterOutlined, LineChartOutlined,
    MenuOutlined, MoreOutlined,
    ReloadOutlined,
    SearchOutlined, SwapOutlined,
    UploadOutlined,
    UpOutlined
} from '@ant-design/icons';
import {
    Alert,
    Button,
    Col,
    Form,
    Input,
    Modal,
    Pagination,
    Popconfirm,
    Row,
    Select,
    Space,
    Table,
    theme,
    Upload
} from 'antd';
import {ColumnsType} from "antd/es/table";
import {TableRowSelection} from "antd/es/table/interface";

const {Option} = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const UserEdit:React.FC = () => {

    const [form] = Form.useForm();

    const onGenderChange = (value: string) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({ note: 'Hi, man!' });
                break;
            case 'female':
                form.setFieldsValue({ note: 'Hi, lady!' });
                break;
            case 'other':
                form.setFieldsValue({ note: 'Hi there!' });
                break;
            default:
        }
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
    };


    return (
        <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
        >
            <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={onGenderChange}
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            >
                {({ getFieldValue }) =>
                    getFieldValue('gender') === 'other' ? (
                        <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
            {/*<Form.Item {...tailLayout}>*/}
            {/*    <Button type="primary" htmlType="submit">*/}
            {/*        Submit*/}
            {/*    </Button>*/}
            {/*    <Button htmlType="button" onClick={onReset}>*/}
            {/*        Reset*/}
            {/*    </Button>*/}
            {/*    <Button type="link" htmlType="button" onClick={onFill}>*/}
            {/*        Fill form*/}
            {/*    </Button>*/}
            {/*</Form.Item>*/}
        </Form>
    );
};

export default UserEdit