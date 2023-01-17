import React from 'react';
import PropTypes from 'prop-types';
import  './Menu.css';
import anime from 'animejs';

import { useEffect, useState } from 'react';








export default function Menu({ pages, width, cornerRadius, align, backgroundBasic, colorBasic, backgroundHover, colorHover, backgroundSelected, colorSelected}) {





    const [activePage,setActivePage ] = useState('home');







    useEffect(()=>{
        console.clear();

        let pathname = window.location.pathname;
        pathname = pathname.replace(/\//,'');
        if(pathname == '') {
            pathname='home'
        }
        setActivePage(pathname);


// highlight ative page link:

        let target = document.querySelector(`.${pathname}`);
        console.log('target:>>>>', target);


        target.style.padding = '30px 5px';
        target.style.fontSize = '2rem';

        target.style.backgroundColor = `${backgroundSelected}`;
        target.style.color = `${colorSelected}`;







    },[]);










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


    // basic colors:
    if(!backgroundBasic) {
        backgroundBasic='#b8e1ffff';
    }
    if(!colorBasic) {
        colorBasic='#363457ff';
    }


// on hover:
    if(!backgroundHover) {
        backgroundHover = '#465c69ff';
    }

    if(!colorHover) {
        colorHover = `WHITE`;
    }



// on selected:
    if(!backgroundSelected) {
        backgroundSelected = '#e8aeb7ff';
    }
    if(!colorSelected) {
        colorSelected='white';
    }

// end of colours





    function onMouseOver(event) {
        // event.preventDefault();
        // console.clear();
        // console.log(event.target);
        event.target.style.padding = '30px 5px';
        event.target.style.fontSize = '2rem';

        event.target.style.backgroundColor = `${backgroundHover}`;
        event.target.style.color = `${colorHover}`;
    }







    function onMouseOut(event) {

// go back to normal:
        event.target.style.padding = '10px 5px';

        event.target.style.backgroundColor = `${backgroundBasic}`;
        event.target.style.color= `${colorBasic}`;
        event.target.style.fontSize = '1.5rem';





// keep active page link highlighted:
        let target = document.querySelector(`.${activePage}`);

        target.style.padding = '30px 5px';
        target.style.backgroundColor = `${backgroundSelected}`;
        target.style.color = `${colorSelected}`;
        target.style.fontSize = '2rem';





    }




    function handleClick(event) {

        let target = event.target.style;
        // event.preventDefault();




        // console.log('on click:>>>>', event.target.className);
        target.transition = 'padding 0.7s, color 0.7s, background-color 0.7s, font-size 0.7s';

        target.padding = '10px 5px';


    }

























  return (
    <div>







<div className='menuWrapper' style={{
    // width: width,
    alignItems: `${align}`,
}}>




{
    pages.map((item, index)=>{

        let itemName = item[0].toUpperCase() + item.slice(1);

        let href=`/${item}`;


        let classNameLong = `link ${item}`;
        let classNameShort = `${item}`;


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
                    className={classNameLong}


                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    onClick={handleClick}






                    >  {/* end of a link */}


                        {itemName}</a>;


    })
}

    </div>



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