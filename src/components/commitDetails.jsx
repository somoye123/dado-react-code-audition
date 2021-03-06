/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CommitDetails = ({ Commit }) => {
  const {
    commit: {
      author: { name, date },
      message,
    },
    author: { avatar_url },
  } = Commit;

  return (
    <>
      <CommitDetailsMobile>
        <p>{message}</p>
        <div>
          <span>
            <span>
              <img src={avatar_url} alt="avatar" />
            </span>
            <span>{name.split(' ')[0]}</span>
          </span>
          <span>{date}</span>
        </div>
      </CommitDetailsMobile>
      <CommitDetailsDesktop>
        <div>
          <img src={avatar_url} alt="avatar" />
          <h6>{name.split(' ')[0]}</h6>
        </div>
        <p>{message}</p>
        <span>{date}</span>
      </CommitDetailsDesktop>
    </>
  );
};

const CommitDetailsMobile = styled.article`
  margin: 0 32px 32px;
  p {
    width: 30ch;
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.4px;
    color: var(--primaryColor);
  }
  div {
    display: flex;
    justify-content: space-between;
    span:first-child {
      display: flex;
      span:first-child {
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
      span:last-child {
        margin-left: 15px;
        font-weight: 600;
        font-size: 22px;
        line-height: 30px;
        text-align: center;
        letter-spacing: -0.55px;
        color: var(--primaryColor);
      }
    }
    span:last-child {
      font-size: 20px;
      line-height: 28px;
      text-align: right;
      letter-spacing: -0.4px;
      color: var(--primaryColor);
    }
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const CommitDetailsDesktop = styled.article`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
    display: flex;
    margin-left: 195px;
    margin-right: 145px;
    margin-bottom: 32px;
    align-items: center;
    div {
      margin-right: 27px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-bottom: 4px;
      }
      h6 {
        width: 160px;
        font-weight: 600;
        font-size: 22px;
        line-height: 30px;
        letter-spacing: -0.55px;
        color: var(--primaryColor);
      }
    }
    p {
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.4px;
      color: var(--primaryColor);
    }
    span {
      margin-left: auto;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.4px;
      color: var(--primaryColor);
      width: 200px;
    }
  }
`;

CommitDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Commit: PropTypes.object.isRequired,
};

export default CommitDetails;
