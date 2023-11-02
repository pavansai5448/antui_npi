import {Collapse} from 'antd';
import Tinting from './Forms/TintingBanco';
import ColourantBanco from './Forms/ColourantBanco';
import { useEffect,useState } from 'react';
import './FillPage.css';

const FillPage = () =>{
    const [isDummyButtonPressed, setIsDummyButtonPressed] = useState(false);
    const items = [
        {
          key: '1',
          label: <h2 style={{margin:"0"}}>TINTING</h2>,
          children: <Tinting setIsDummyButtonPressed={setIsDummyButtonPressed}  />,
          expandIconPosition: "end",
        },
        
        // {
        //   key: '3',
        //   label: 'Asset',
        //   children: <p>{text}</p>,
        // },
      ];

    useEffect(()=>{

       if(isDummyButtonPressed===true) 
        items.push({
            key: '2',
            label: <h2 style={{margin:"0"}}>COLOURANT</h2>,
            children:  <ColourantBanco />,

        })

        console.log(items.key);

    },[isDummyButtonPressed])

    return (
        <>
            <Collapse defaultActiveKey={["1","2"]} items={items} />
        
        </>
    )


} 

export default FillPage;