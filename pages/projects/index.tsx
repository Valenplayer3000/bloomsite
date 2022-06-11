import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';

const ProjectDirectory = () => {
  return (
    <Layout>
      <div className='title-container'>
        <h1 className='title'>Project Directory</h1>
      </div>
      <hr />
      <div className='active-project-container'>
        <div className='active-dev'>
          <h2 className='subtitle'>Perezbueno.xyz</h2>
          <p>
            The page for family projects made for a small nieche project for a
            coding class
          </p>
          <Link passHref href="https://perezbueno.xyz">
            <button className='button link'>Go to website</button>
          </Link>
        </div>
        <div className='active-dev'>
          <h2 className='subtitle'>Weird Shopping List</h2>
          <p>A weird shopping list application written in React Native</p>
          <button
            title='Not available yet'
            className='button disabled'
            disabled
          >
            Download
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDirectory;
