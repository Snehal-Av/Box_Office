import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShowCard = ({ name, image, id, summary }) => {
    const summaryStripped = summary ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')+'...' : 'No Description';
    return (
        <SearchCard>
            <SearchImgWrapper>
                <img src={image} alt={name} />
            </SearchImgWrapper>
            <h1>{name}</h1>
            <p>{summaryStripped}</p>
            <ActionSection>
                <Link to={`/show/${id}`}>Read more</Link>
                {/* <button type='button' onClick={()=>onStarredMeClick(id)}>
                    {isStarred ? 'UnStarMe':'StarMe'}
                </button> */}
            </ActionSection>
        </SearchCard>
    )
}

export default ShowCard

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

// const StarBtn = styled.button`
//   outline: none;
//   border: 1px solid #8e8e8e;
//   border-radius: 15px;
//   padding: 5px 20px;
//   background-color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &:hover {
//     cursor: pointer;
//   }
// `;
const SearchImgWrapper = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 40px;
  overflow: hidden;
  border: 1px solid #ddd;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const SearchCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;
  h1 {
    margin: 10px 0;
    font-size: 21px;
  }
  p {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;