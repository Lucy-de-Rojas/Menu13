import React from 'react';
import PropTypes from 'prop-types';
import  './Menu.css';

import { useEffect, useState } from 'react';




export default function Menu({ pages, width, cornerRadius, align, backgroundBasic, colorBasic}) {


    console.clear();


// resets:
    if(!pages) {
        pages = ['home','about','contact'];
    }

    if(!width) {
        width='80%';
    }

    if(!cornerRadius) {
        cornerRadius='20px';
    }

    if(!align) {
        align='center';
    }
    if(align=='left') {
        align='flex-start';
    }
    if(align=='right') {
        align='flex-end';
    }
    if(!backgroundBasic) {
        backgroundBasic='rgb(25,15,87)';
    }
    if(!colorBasic) {
        colorBasic='white';
    }










  return (
    <div>


        <h1>Pages:</h1>




<div className='menuWrapper' style={{
    // width: width,
    alignItems: `${align}`,
}}>




{
    pages.map((item, index)=>{

        let itemName = item[0].toUpperCase() + item.slice(1);

        let href=`/${item}`;

        let className = `link ${item}`;


        if(item == 'home') {
            href = '/';

        }


        return <a
                    href={href}
                    style={{
                        borderRadius: cornerRadius,
                        width: `${width}`,
                        backgroundColor: `${backgroundBasic}`,
                        color: `${colorBasic}`,
                    }}
                    className={className}






                    >  {/* end of a link */}


                        {itemName}</a>;


    })
}

    </div>


    <a href='/'>hello</a>

    </div>
  );
}









Menu.propTypes = {
    pages: PropTypes.array,
    width: PropTypes.string,
};

Menu.defaultProps = {
  pages:['home','about','contact'],
  width: '80%',
};