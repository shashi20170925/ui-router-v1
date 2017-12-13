import React, {Component, PropTypes} from 'react';
import {UISref} from 'ui-router-react';



export class Hello extends Component{
    actualRender=()=>{
    let {languages}=this.props.resolves;
return (
    
    <div>
      <h3>In the Hello component</h3>
<ul> {languages.data.map((lang)=>{return (<li>{lang.Key}</li>) })} </ul>
    </div>
  );
}
    render(){
        let {languages}=this.props.resolves;
        {console.log('in the hello component', languages);}

return (languages!==null ? this.actualRender():"" );

    }

}