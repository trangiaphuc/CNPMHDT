import React from "react";
import styled from "styled-components";

import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import ProductByCat from "../components/ProductByCat";
import TopHotProduct from "../components/TopHotProduct";

const Page = styled.div`
    width: 1350px;
    margin: auto;
`;
function Home() {
    return (
        <div>
            <Navbar />
            <Categories />
            <Page>
                <TopHotProduct />
                <ProductByCat />
            </Page>
        </div>
    );
}

export default Home;
