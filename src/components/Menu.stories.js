import React from "react";
import Menu from "./Menu";

export default {
    title: 'Menu items',
    component: Menu,

    argTypes: {
        pages: {control: 'array'},
        width: {control: 'text'},
        cornerRadius: {control: 'text'}
    },
};


const Template = (args)=>{
    return <Menu {...args} />;
}


export const Default = Template.bind({});



Default.args = {
    pages: ['home','about','contact'],
    width: '80%',
    cornerRadius: '20px'

}





