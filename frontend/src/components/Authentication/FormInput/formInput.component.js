import React from 'react';
import './formInput.style.scss';

// tạo một form cho input, 
//sử dụng component này cho form của sign in and sign up

const FormInput = ({handleChange, label,...otherProps}) =>(
    <div className ='group'>
{ /* kí hiệu ...othersProps đại diện cho các thuộc tính còn lại có trong input có trong props nhập vào   */}
        <input className= 'form-input' onChange = {handleChange} {...otherProps} />
        {
/**Câu lệnh này có nghĩa là nếu có label thif thẻ label sẽ nhận className  
    có tên là từng thuộc tính trong props và hiển thị label của cái input đó
    ngược lại nếu ko có thì null                     */
            label ?
            (<label className = {`${otherProps.value.length ? 'shrink': '' } 
            form-input-label`}>
            {label}
            </label>)
            : null
        }
    </div>
)
export default FormInput;