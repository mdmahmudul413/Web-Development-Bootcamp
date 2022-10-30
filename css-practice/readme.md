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
    ➣ Before:                           section::before{...}
    ➣ After:                            section::after {...}
    
    ❑ Note, 
        1. div+p will select the next sibling of p after div
        2. Attribute type='text' will select the element which attribute type="text"
        3. Attribute target="_blank" will select the element which attribute target="_blank"
        4. li:nth-child(n){...} will select the n'th children inside li
           
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
        
**❑ Box shadow**

    box-shadow: 10px 10px gray
    box-shadow: -10px -10px gray;(Oposite direction shadow) 
    box-shadow: 10px 10px 5px gray;(Blur value = 5px) 
    box-shadow: 10px 10px 5px 5px gray;(Spread value = 5px) 
    box-shadow: inset -10px -10px gray;(Inside box-shadow) 
    box-shadow: 10px 10px gray, 12px 12px red;(More then one shadow)  
    
    ❑ Note,
       box-shadow: offset-x offset-y blur-radius spread-radius color; 


**❑ Text shadow**

    text-shadow: 2px 2px white; 
    
**❑ Variables & Custom Properties**

    :root {
        --box-color: royalblue;
        --shade: gray;
        --background: rgb(185, 17, 185);
        --maxw: 350px;
    }
            
    .box {
        --example: rgb(250, 86, 86);
        border: 5px solid var(--example);
        background-color: var(--box-color);
        box-shadow: 9px 9px var(--shade);
    }
            
    .container {
        background-color: var(--background);
        width: var(--maxw);
        border: 5px solid var(--shade);
    }
    
**❑ Animation & Keyframes**

    position: relative;
    
    animation-name: mahmud; 
       
    animation-duration: 3s;
    animation-duration: infinite;
    
    animation-timing-function: ease-out;
    animation-timing-function: ease-in;
    animation-timing-function: ease-in-out;
    
    animation-delay: 5s;
    animation-iteration-count: 2;
    
    animation-fill-mode: forwards;
    animation-fill-mode: alternative;
    animation-fill-mode: backward;
    
    animation-direction: reverse;
    animation-direction: alternate;
    animation-direction: alternate-reverse;
    
    ❑ Animation short-hand
       animation: animation-name animation-duration animation-timing-funtion animation-delay animation-iteration-count animation-fill-mode;
       
    ❑ Example
       animation: mahmud .7s ease-in-out 2s 4 backwards;
    z-index: 10;
    
    ❑ Keyframes 
       
       Example: 1
       @keyframes mahmud {
          0% {
              top: 0px;
              left: 0px;
          }
          25% {
              top: 250px;
              left: 0px;
          }
          50% {
              top: 250px;
              left: 250px;
          }
          75% {
              top: 0px;
              left: 250px;
          }
          100% {
              top: 0px;
              left: 0px;
          }
      }
      
      Example: 2
      @keyframes mahmud {
        from {
            width: 0px;
        }
        to {
            width: 1400px;
        }
      }
      
**❑ Transition Property**

    transition-property: all; 
    transition-property: background-color; 
    
    transition-duration: 1s; 
    
    transition-timing-function: ease-out; 
    
    transition-delay: 2s; 
    
    ❑ Transition shorthand
       transition: transition-property transition-duration transition-timing-function transition-delay 
       
     ❑ Example 
        transition: all 1s ease-in-out 0s;
        
**❑ Transform Property**
    
    .box {
        transition: all;
        transition-duration: 1s;
        transition-timing-function: ease-out;
    }
    
    #box1:hover {
        transform: rotate(45deg);
    }
            
    #box2:hover {
        transform: skew(20deg);
    }
            
    #box3:hover {
        transform: scale(1.3);
    }
            
    #box4:hover {
        transform: translateY(122px);
    }
    
    #box5:hover {
        transform: translate(50px, 50px);
    }
    
    
**❑ Css Grid (Column)**

    display: grid;
    
    grid-template-columns: 300px auto 100px
    grid-template-columns: 300px 120px 100px
    grid-template-columns: 1fr 4fr 1fr
    grid-template-columns: repeat(3, auto);
    
    grid-gap: 6px;

**❑ Css Grid (Row)**

    display: grid;
    
    grid-gap: 1rem;
    
    grid-template-rows: 1fr 2fr 3fr;
    
    grid-auto-rows: 5fr;
    
    grid-template-columns: 1fr 3fr 2fr;
    
**❑ Grid Spanning Multiple Rows & Columns**
    
    grid-column-start: 1;
    grid-column-end: 3;
    
    ❑ Shorthand
       grid-column: 1/span 3;
    
    grid-row-start: 1;
    grid-row-end: 3;
    
    ❑ Shorthand
       grid-row: 1/span 3;
    
**❑ Grid Autofit & Minmax**
    
    justify-content: center;
    
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));    
    
**❑ CSS Grid Creating Layout**
    
    .container {
        display: grid;
        
        grid-gap: .5rem;
        
        grid-template-areas: 
        'nav nav nav nav' 
        'sec sec sec side' 
        'foot foot foot foot';
    }
                   
    #navbar {
        text-align: center;
        grid-area: nav;
    }
            
    #section {
        text-align: center;
        grid-area: sec;
    }
            
    #aside {
        text-align: center;
        grid-area: side;
    }
            
    #footer {
        text-align: center;
        grid-area: foot;
    }
    
    ❑ Note: 
       'nav nav nav nav' = 1fr 1fr 1fr 1fr

    
             
             
    
    
    

    