import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
// eslint-disable-next-line import/no-cycle
import { SuggestedRepo } from '../components';
import SuggestedRepos from '../utils/constants';

const Home = ({ setSearchValue, history }) => {
  const searchValue = useRef('');

  const handleChange = () => setSearchValue(searchValue.current.value);

  const handleSuggestedRepoSelect = (repo) => {
    setSearchValue(repo);
    history.push('/commit');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/commit');
  };

  return (
    <>
      <HomePageHeaderContainer>
        <nav>
          <div>CommitViewer</div>
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </HomePageHeaderContainer>
      <HomePageMainContainer>
        <h1>
          Discover the
          <br />
          world of code
        </h1>
        <p>
          Explore open source projects from GitHub,
          <br />
          and read their commit history to see the
          <br />
          story of how they were built.
        </p>
        <form className="search-form" onSubmit={handleSubmit}>
          <div>
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Eg. facebook/react"
              ref={searchValue}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">See Commit 🚀</button>
        </form>
        <small>Or pick one of these suggested repos</small>
        <section>
          {SuggestedRepos.map(({ id, text }) => (
            <SuggestedRepo
              key={id}
              name={text}
              onClick={() => handleSuggestedRepoSelect(text)}
            />
          ))}
        </section>
      </HomePageMainContainer>
    </>
  );
};

const HomePageHeaderContainer = styled.header`
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    margin-bottom: 32px;
    div {
      height: 34px;
      font-weight: bold;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: -0.6px;
      color: var(--primaryColor);
      margin-bottom: 16px;
    }
    ul {
      display: flex;
      li {
        height: 28px;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.4px;
        color: var(--primaryColor);
      }
      li:first-child {
        margin-right: 32px;
      }
    }
  }
  @media screen and (min-width: 992px) {
    nav {
      padding: 48px 145px 0;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 64px;
    }
    ul {
      li:last-child {
        margin-left: 32px;
      }
    }
  }
`;
const HomePageMainContainer = styled.main`
  h1 {
    font-weight: 600;
    font-size: 56px;
    line-height: 62px;
    text-align: center;
    letter-spacing: -2.4px;
    color: var(--primaryColor);
    margin-bottom: 24px;
  }
  p {
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.4px;
    color: var(--paragraph);
  }
  form {
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      position: relative;
      svg {
        position: absolute;
        left: 19px;
        top: 22px;
      }
      input {
        background: var(--neutral);
        border-radius: 8px;
        height: 58px;
        padding-left: 45.63px;
        width: 396px;
        border: transparent;
      }
      input::placeholder {
        position: absolute;
        width: 171px;
        height: 28px;
        left: 45.63px;
        top: calc(50% - 28px / 2);
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.5px;
        color: var(--placeholderPrimary);
      }
    }
    button {
      margin-top: 24px;
      width: 396px;
      height: 58px;
      background: var(--secondaryColor);
      border: transparent;
      border-radius: 8px;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      text-align: center;
      letter-spacing: -0.5px;
      color: white;
    }
  }
  small {
    width: 180px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.4px;
    color: var(--paragraph);
    display: block;
    margin: 32px auto 22px;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 38px;
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 72px;
      line-height: 80px;
      letter-spacing: -3px;
      margin-bottom: 16px;
    }
    form {
      flex-direction: row;
      justify-content: center;
      div {
        input {
          width: 694px;
          margin-right: 16px;
        }
      }
      button {
        margin-top: 0;
        width: 210px;
      }
    }
    small {
      width: 236px;
      margin: 24px auto;
    }
    section {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

Home.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default Home;
