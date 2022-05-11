import React from 'react'
import styled from "styled-components";

const Container= styled.div``;
const ContainerImage= styled.div``;
const ImageProduct= styled.image``;
const ProductName= styled.h2``;
const Behavior= styled.div``;
const Buy= styled.a``;
const AddCart= styled.a``;


const CardProduct = () => {
  return (
    <Container>
        <ContainerImage>
            <ImageProduct></ImageProduct>
        </ContainerImage>
        <ProductName></ProductName>
        <Behavior>
            <Buy>Mua</Buy>
            <AddCart></AddCart>
        </Behavior>
        
    </Container>
  )
}

export default CardProduct