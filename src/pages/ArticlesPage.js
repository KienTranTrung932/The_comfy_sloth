import React from "react";
import { PageHero } from "../components";
import Article from "../components/Article";
import styled from "styled-components";
import FilterArticles from "../components/FilterArticles";
const ArticlePage=()=>{
    return(
        <main>
            <PageHero title='BaiDanhGia'/>
            <Wrapper>
               <div className='section-center'>
                <FilterArticles/>
               </div>
            </Wrapper>           
        </main>
        
    )
}

const Wrapper = styled.div`
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`
export default ArticlePage