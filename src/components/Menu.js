import React from 'react';
import PropTypes from 'prop-types';
import  './Menu.css';

import { useEffect, useState } from 'react';




export default function Menu({ pages, width, cornerRadius, align, backgroundBasic, colorBasic, backgroundHover, colorHover}) {


    const [activePage,setActivePage ] = useState('home');


    console.clear();

    console.log('active page::>>>>', activePage)


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


    // colors:
    if(!backgroundBasic) {
        backgroundBasic='rgb(1, 5, 68)';
    }
    if(!colorBasic) {
        colorBasic='rgb(156, 210, 248)';
    }


// on hover:
    if(!backgroundHover) {
        backgroundHover = 'rgb(156, 210, 248)';
    }

    if(!colorHover) {
        colorHover = `rgb(1, 5, 68)`;
    }

// end of colours






    function onMouseOver(event) {
        console.clear();
        console.log(event.target);
        event.target.style.padding = '30px 5px';
        event.target.style.fontSize = '2rem';

        event.target.style.backgroundColor = `${backgroundHover}`;
        event.target.style.color = `${colorHover}`;
    }


    function onMouseOut(event) {
        console.clear();
        console.log(event.target);
        event.target.style.padding = '10px 5px';

        event.target.style.backgroundColor = `${backgroundBasic}`;
        event.target.style.color= `${colorBasic}`;
        event.target.style.fontSize = '1.5rem';

    }




    function handleClick(event) {


        console.log(event.target);

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


                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    onClick={handleClick}






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