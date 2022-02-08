import styled from "styled-components"
////////////Components////////////
//-------------------------------
//-div
//.className
//header/main/footer/h1/h2/a/ul/li/button/img
const Style = styled.div`
    
`
//-------------------------------
////////////Footer
//-------------------------------
//-footer
const FooterStyle = styled.footer`
    grid-area: footer;
    background-color: black;
    color: white;
`
//.row center
const RowCenterStyle = styled.div`
    //row
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    //row.center
    justify-content: center;
`
//-------------------------------
////////////Header
//-------------------------------
//-header
const HeaderStyle = styled.header`
    grid-area: header;
    background-color: black;
    height: 13rem;
    //header a
    color: white;
    padding: 1rem;
`
//.row
const RowStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
//.brand
const BrandStyle = styled.div`
    //a.brand
    color: white;
    font-size: 6rem;
    font-weight: bold;
    font-family: "Great Vibes", cursive;
    
`
//.in-cart
const Style = styled.div`
    color: black;
    padding: 0.5rem;
    background-color: white;
    border-radius: 100%;
    padding-left: 9px;
    
`
//.{"fa fa-shopping-cart fa-lg"}
const Style = styled.div `
    //fa
`
//-------------------------------
////////////Loading 90% SC
//-------------------------------
//.row center
const RowCenterStyle = styled.div`
    //row
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    //row.center
    justify-content: center;
`
//-------------------------------
////////////NotFound
//-------------------------------
//-main
const MainStyle = styled.main`
    grid-area: main;
`
//-ul
const UlStyle = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
`
//-h1
const H1Style = styled.h1`
    font-size: 1.8rem;
    padding: 1rem 0;
`
//.row center
const RowCenterStyle = styled.div`
    //row
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    //row.center
    justify-content: center;
`
//.medium (img)
const ImgMediumStyle = styled.img`
    max-width: 200px;
`
//-------------------------------
////////////Product
//-------------------------------
//.card
const CardStyle = styled.div`
    border: 0.1rem black solid;
    background-color: black;
    margin: 1rem;
    max-width: 200px;
    height: 440px;
`
//.medium (img)
const ImgMediumStyle = styled.img`
    max-width: 200px;
`
//.card-body
const CardBodyStyle = styled.div`
    padding: 1rem;
    color: white;
    //.card-body > *
    margin-bottom: 0.5rem;
`
//.card-text
const CardTextStyle = styled.div`
    word-wrap: break-word;
`
//.success
const SuccessStyle = styled.span`
    color: green;
`
//.error
const ErrorStyle = styled.span`
    color: red;
`
//.price
const PriceStyle = styled.h1`
    font-size: 2rem;
`
//-------------------------------
////////////Rating
//-------------------------------
//.rating
const RatingStyle = styled.span`
    color: gold;
    //.rating span:last-child
    color: white;  
`
//-------------------------------
////////////SearchBar
//-------------------------------
//-input
const InputStyle = styled.input`
    //input#address
    padding-bottom: 40px;
`
//-button
const ButtonStyle = styled.button`
    padding: 1rem;
    border: 0.1rem black solid;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    cursor: pointer;
    //button:hover 
    border: 0.1rem red solid;
    //button.primary 
    background-color: white;
    //button.block 
    width: 100%;  
`
//-------------------------------
////////////CartScreen
//-------------------------------
//-main
const MainStyle = styled.main`
    grid-area: main;
`
//-h1
const H1Style = styled.h1`
    font-size: 1.8rem;
    padding: 1rem 0;
`
//-button
const ButtonStyle = styled.button`
    padding: 1rem;
    border: 0.1rem black solid;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    cursor: pointer;
    //button:hover 
    border: 0.1rem red solid;
    //button.primary 
    background-color: white;
    //button.block 
    width: 100%;  
`
//.link-button
const LinkButtonStyle = styled.div`
    color: black;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
//.row center
const RowCenterStyle = styled.div`
    //row
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    //row.center
    justify-content: center;
`
//.small (img)
const ImgSmallStyle = styled.img`
    max-width: 100px;
`
//-------------------------------
////////////CheckoutScreen
//-------------------------------
//-main
const MainStyle = styled.main`
    grid-area: main;
`
//-h1
const H1Style = styled.h1`
    font-size: 1.8rem;
    padding: 1rem 0;
`
//-input
const InputStyle = styled.input`
    //input#address
    padding-bottom: 40px;
`
//-button
const ButtonStyle = styled.button`
    padding: 1rem;
    border: 0.1rem black solid;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    cursor: pointer;
    //button:hover 
    border: 0.1rem red solid;
    //button.primary 
    background-color: white;
    //button.block 
    width: 100%;  
`
//.link-button
const LinkButtonStyle = styled.div`
    color: black;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
//.checkout-section
const ChecoutSectionStyle = styled.section`
    width: 400px;
    margin: 30px auto;
    padding: 20px;
    border: 1px solid gray;
`
//.input-div
const InputDivStyle = styled.div`
    padding-left: 30px;
`
//.checkout-title
const CheckoutTitleH1Style = styled.h1`
    padding-left: 30px;
`
//.payment-details
const CheckoutTitlePStyle = styled.p`
    padding-left: 30px;
`
//.input-fields
const InputFieldsStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3px 0;
    width: 320px;
    //.input-fields input
    padding: 8px;
    border: 1px solid #cbcbcb;
    display: block;
    border-radius: 5px;
    margin: 5px 0;
    font-size: 12px;
`
//.checkout-form
const CheckoutFormStyle = styled.form`
    //...
`
//.newsletter
const NewsLetterStyle = styled.h1`
    margin: 5px 0;
`
//.pay-button
const PayButtonStyle = styled.button`
    margin: 20px auto;
    width: 50%;
    min-width: 320px;
    border-radius: 5px;
    background-color: antiquewhite;
`
//-------------------------------
////////////ContactScreen
//-------------------------------
//-main
const MainStyle = styled.main`
    grid-area: main;
`
//-ul
const UlStyle = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
`
//.row center
const RowCenterStyle = styled.div`
    //row
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    //row.center
    justify-content: center;
`
//-------------------------------
////////////HomeScreen
//-------------------------------
//-main
const MainStyle = styled.main`
    grid-area: main;
`
//-h1
const H1Style = styled.h1`
    font-size: 1.8rem;
    padding: 1rem 0;
`
//.genre-container
const GenreContainerStyle = styled.div`
    display: flex;
    justify-content: center;
`
//.genre-button
const GenreButtonStyle = styled.div`
    max-width: 10rem;
    padding: 0.5rem;
    border: 0.1rem black solid;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.4rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    cursor: pointer;
    //.genre-button:hover {
    border: 0.1rem red solid;
`
//.genre-header
const GenreHeaderStyle = styled.div`
    background-color: black;
    color: white;
    height: 50px;
    text-align: center;
`
//.row center
const RowCenterStyle = styled.div`
    //row
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    //row.center
    justify-content: center;
`
//-------------------------------
////////////PayScreen
//-------------------------------
//-main
const MainStyle = styled.main`
    grid-area: main;
`
//-ul
const UlStyle = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
`
//-h1
const H1Style = styled.h1`
    font-size: 1.8rem;
    padding: 1rem 0;
`
//.row center
const RowCenterStyle = styled.div`
    //row
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    //row.center
    justify-content: center;
`
//.link-button
const LinkButtonStyle = styled.div`
    color: black;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
//-------------------------------
////////////ProductScreen
//-------------------------------
//-main
const MainStyle = styled.main`
    grid-area: main;
`
//-ul
const UlStyle = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
`
//-li
const LiStyle = styled.li`
    margin-top: 1rem;
`
//-h1
const H1Style = styled.h1`
    font-size: 1.8rem;
    padding: 1rem 0;
`
//.link-button
const LinkButtonStyle = styled.div`
    color: black;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`
//.row top
const RowTopStyle = styled.div`
    align-items: flex-start;
`
//.column-2
const ColumnTwoStyle = styled.div`
    flex: 2 1 50rem;
`
//.large (img)
const ImgLargeStyle = styled.img`
    max-width: 500px;
    margin: 1rem;
`
//.column-1
const ColumnOneStyle = styled.div`
    flex: 1 1 25rem;
`
//.card card-body
const CardCardBodyStyle = styled.div`
    //.card
    border: 0.1rem black solid;
    background-color: black;
    margin: 1rem;
    max-width: 200px;
    height: 440px;
    //.card-body
    padding: 1rem;
    color: white;
    //.card-body > * 
    margin-bottom: 0.5rem;
`
//.row
const RowStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
//.price
const PriceStyle = styled.h1`
    font-size: 2rem;
`
//.success
const SuccessStyle = styled.span`
    color: green;
`
//.error
const ErrorStyle = styled.span`
    color: red;
`
//-------------------------------
////////////UploadScreen
//-------------------------------
//-main
const MainStyle = styled.main`
    grid-area: main;
`
//-h1
const H1Style = styled.h1`
    font-size: 1.8rem;
    padding: 1rem 0;
`
//.row center
const RowCenterStyle = styled.div`
    //row
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    //row.center
    justify-content: center;
`
//-------------------------------