import { Input } from 'antd';
const { TextArea } = Input;

const InputArea=(item)=>{
    return(
    <TextArea rows={4} placeholder={item.area} disabled={item.disable} style={{ "border-radius":"20px", "background-color":item.bg}}/>
    );
}

export default InputArea;