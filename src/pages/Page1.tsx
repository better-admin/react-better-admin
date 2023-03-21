import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount, selectCount} from "../store/slices/counterSlice";
import {useAppDispatch} from "../store/hooks";
import {App, Button} from "antd";
import {ArgsProps} from "antd/lib/notification/interface";

const Page1: React.FC = () => {
    
    const {message, notification, modal } = App.useApp();

    const count = useSelector(selectCount)
    const dispatch = useDispatch();

    const appDispatch = useAppDispatch();
    // appDispatch()

    return (
        <div>
            <button onClick={()=>appDispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(incrementByAmount(10))}>+</button>

            <Button type={"primary"} onClick={()=>message.success('hehe')}>message</Button>
            <Button type={"primary"} onClick={()=>notification.success({message:'这是一个 notification'} as ArgsProps)}>notification</Button> <br />
            <Button type={"primary"} onClick={()=>modal.success({title:'不错',content:'很不错哟'})}>modal</Button>
        </div>
    )
}
export default Page1