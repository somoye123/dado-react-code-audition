/* eslint-disable import/no-cycle */
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { CommitDetails } from '../components';
import GithubApi from '../api/githubApi';

const CommitViewer = ({
  setSearchValue, searchValue, loading, setLoading,
}) => {
  const [commits, setCommits] = useState([]);
  const searchRepo = useRef('');

  const getCommit = async (repoName) => {
    try {
      setLoading(true);
      const data = await GithubApi(repoName);
      if (data) setCommits(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  const handleChange = () => setSearchValue(searchRepo.current.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    getCommit(searchValue);
  };

  useEffect(() => {
    getCommit(searchValue);
  }, []);

  return (
    <>
      <CommitViewerPageHeaderContainer>
        <div>CommitViewer</div>
        <form className="search-form" onSubmit={handleSubmit}>
          <div>
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Eg. facebook/react"
              ref={searchRepo}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">See Commit 🚀</button>
        </form>
      </CommitViewerPageHeaderContainer>
      <CommitViewerPageMainContainer>
        <h1>{searchValue}</h1>
        {loading && <small>Loading...</small>}
        {!loading
          && commits.map((commit) => (
            <CommitDetails key={commit.node_id} Commit={commit} />
          ))}
      </CommitViewerPageMainContainer>
    </>
  );
};

const CommitViewerPageHeaderContainer = styled.nav`
  height: 82px;
  background: var(--commitHeader);
  padding-top: 24px;
  div {
    height: 34px;
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.6px;
    color: var(--primaryColor);
  }
`;

const CommitViewerPageMainContainer = styled.main`
  h1 {
    margin: 32px 0;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    letter-spacing: -1.5px;
    color: var(--primaryColor);
  }
  small {
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.4px;
    color: var(--primaryColor);
    display: block;
  }
`;

CommitViewer.propTypes = {
  searchValue: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default CommitViewer;
