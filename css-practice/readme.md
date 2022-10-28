**❑ Stylesheet**

    <link rel="stylesheet" href="css/style.css">
        a. rel = relation
        b. href = hyper reference
        c. css/style.css = css file location

**❑ Selector**

    ➣ Universal:                        *{...}
    ➣ Id:                               #id-name{...}
    ➣ Class:                            .class-name{...}
    ➣ Element:                          a{...}, p{...}, div{...}, ul li{...}, div ul li a{...}, etc.
    ➣ Inside Eliment:                   div>p{...}
    ➣ Next Sibling:                     div+p{...}
    ➣ Attribute type='text':            input[type='text']{...}
    ➣ Attribute target="_blank":        a[target="_blank"]{...}
    ➣ N'th Child:                       li:nth-child(n){...}
    
    ❑ Note, 
    1. div+p will select the next sibling of p after div
    2. Attribute type='text' will select the element which attribute type="text"
    3. Attribute target="_blank" will select the element which attribute target="_blank"
    4. li:nth-child(n){...} will select the nth children inside li
           
**❑ Importancy**
        
    text-align: center !important;

**❑ Text Color**
    
    color: green;
    
**❑ Background**
    
    background: yellow;
    background-color: yellow;
    
    
    background-image: url('...');
    
    ❑ Background image shorthand,
       background-image: url('...') no-repeat center center/cover;
    
    background-repeat: no-repeat;
    background-repeat: repeat-x;
    background-repeat: repeat-y;
    
    background-size: 200px;
    
    background-position:  250px 130px;
    
    background-position:  top;
    background-position:  left;
    background-position:  bottom;
    background-position:  center;
    
    background-position:  top center;
    background-position:  bottom left;
    
    
**❑ Filter the image color**

    filter: invert(0-100)%;
    
**❑ Opacity**

    opacity: (.1-1); 
       
**❑ Height, Width**

    height: (0-100)%;
    width: (0-100)%;
    
    height: 100px;
    width: 600px
    
    height: 100vh;(Viewport height)
    width: 100vw;(Viewport width)
    

**❑ Border**
    
    border: none;
    border-width: 10px;
    border-style: solid;
    border-color: red;
    
    border: 2px solid black;
    border-top: 2px solid black;
    border-left: 2px solid black;
    border-right: 2px solid black;
    
    border-radius: 11px;
    border-top-left-radius: 11px;
    border-top-right-radius: 21px;
    border-bottom-left-radius: 21px;
    border-bottom-right-radius: 11px;
    
**❑ Outline**

    outline: none;
    outline: dotted;
    outline: dashed;
    outline: double;
    
**❑ Margin**

    margin: 2px;
    margin: auto;
    margin-top: 2px;
    margin-left: 2px;
    margin-bottom: 2px;
    margin-right: 2px;
    
    ❑ Margin Shorthand
       margin: top left bottom right
        
       Example:
       margin: 2px 5px 2px 5px
    
 **❑ Padding**

    padding: 2px;
    padding: auto;
    padding-top: 2px;
    padding-left: 2px;
    padding-bottom: 2px;
    padding-right: 2px;
    
    ❑ Padding Shorthand
       padding: top left bottom right
            
       Example:
       padding: 2px 5px 2px 5px
       
**❑ Web Safe Fonts**

    font-family: 'Ubuntu', sans-serif;
    
**❑ Web Fonts**
    
    1. Add font link inside <head>
       <link href="https://fonts.googleapis.com..." rel="stylesheet">
    
    2. Use font-family in the stylesheet
       font-family: 'Ubuntu', sans-serif;
       
**❑ Important Font Property**

    font-size: 30px;
    font-size: 3rem;
    font-size: 30em;
    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;
    text-transform: lowercase;
    
**❑ Line Height**

    line-height: 2em;
    
**❑ Pixel-Inch relation**
    
    1 px(pixel)= 1/96 inch
    
**❑ Hiding anchor tag underline**
    
    text-decoration: none;
    
**❑ Hiding list bullets**

    list-style: none;
    
**❑ Box Model**

    box-sizing: border-box;

**❑ Text Alignment**

    text-align: right;
    text-align: left;
    text-align: center;
    text-align: justify;

**❑ Alignment (Float)**

    float: left;
    float: right;
    
    clear: left;
    clear: right;
    
    ❑ To make free from both sides,
       clear: both;
    
    overflow: auto;
    overflow: hidden;
    
    Adjust Width,
    width: (0-100)%
    
**❑ Hover**

    a:hover{...}
    
**❑ Active**

    a:active{...}
    
**❑ visited**

    a:visited{...}
    
**❑ Display Property**
    
    display: inline;
    display: block;
    display: inline-block;
    display: grid;
    display: flex;
    
    display: none;
    ❑ Note: "display: none;" will hide element and it's empty space.
    
**❑ Flexbox**
    
    ❑ To make an element flexbox
       display: flex;
    
    flex-direction: row;(default)
    flex-direction: column;
    flex-direction: column-reverse;
    flex-direction: row-reverse;
    
    flex-wrap: nowrap;(default)
    flex-wrap: wrap;
    flex-wrap: wrap-reverse;
    
    ❑ Flexbox Shorthand
    
       Example:
       flex-flow: flex-direction flex-wrap
       flex-flow: row wrap;
    
    ❑ Flexbox Alignment
    
       justify-content: center;
       justify-content: space-between;
       justify-content: space-evenly;
       justify-content: space-around;
    
       align-items: flex-start;(default)
       align-items: center;
       align-items: flex-end; 
       align-items: stretch; 
       
       align-self:flex-start;
       align-self:flex-end;
       align-self:flex-center;     
     
     ❑ Higher the order, its shows last in the container.
        order: 1;
        
     ❑ Resizing width according to window size when flex-direction is row.
        flex-grow: 2;
        
     ❑ Resizing width according to window size when flex-direction is column.
        flex-shrink: 10;
        
     ❑ If flex-direction is row then, it will control width and if flex-direction
        is column then, it will control height.
        flex-basis: 10px;
        
     ❑ Flexbox Shorthand
         
       Example:
       flex-flow: flex-grow flex-shrink flex-basis
       flex-flow: row wrap;
     
 
**❑ Visibility**

    visibility: hidden;
    
    ❑ Note: "visibility: hidden;" will hide element but show its empty space. 
        
**❑ Position Property**

     position: static;(default)
     position: relative;
     position: absolute;
     position: fixed;
     position: sticky;
     
     top: 40px;
     left: 34px;
     bottom: 34px;
     right: 40px;
        
**❑ Cursor**

     cursor: pointer;
     
     ❑ Note: "cursor: pointer;" will make the pointer into hand.
        
**❑ Scroll**

     scroll-behavior: smooth;
        
**❑ z-index**

     z-index: 55;
     
     ❑ Note,
        1. Works with position: relative, sticky, absolute,fixed
        2. Will not works with position: static
        3. The higher value of z-index will make the elements top of other elements.
        
**❑ Media-query**

     @media only Screen and (max-width: 300px) {
         #box-1 {
            display: block;
         }
     }
             
     @media only Screen and (min-width: 300px) and (max-width: 500px) {
          #box-2 {
              display: block;
              background-color: yellowgreen;
          }
     }
             
     @media only Screen and (min-width: 500px) and (max-width: 800px) {
           #box-3 {
               display: block;
               background-color: purple;
           }
     }
     
     @media only Screen and (min-width: 800px) {
        #box-4 {
            display: block;
            background-color: green;
        }
     }        
             
             
    
    
    

    