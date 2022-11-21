import React , {useState} from 'react';
import { Button, Modal } from 'antd';

const Component = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const mapping = [
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ];

    const handleAnswerChange=(event)=>{
        console.log(event)
        console.log("you pressed",event.key)
		if(event.key === 'y'){
			alert('The sky is your starting point!')
	}
		else if (event.key === 'n') {
			alert('The sky is your limit👀')
	}
}
    
  return (
    <>
    <div> Functional Component </div>
    <p>{props.name}</p>
        map func.
        {
            mapping.map((item,index)=>{
                return <h5 key={index}>{item.color} and value - {item.value}</h5>
            })
        }
    <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <p> Key event !</p>
		<input type="text" onKeyUp={handleAnswerChange}/>
	    <small> Press Y for Yes or N for No</small>
        <div style={{height:100,width:100,border:"1px solid red"}} onKeyUp={handleAnswerChange}>
        dv
        </div>
    </>
  )
}

export default Component