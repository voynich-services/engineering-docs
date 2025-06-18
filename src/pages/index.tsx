import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Engineering at Voynich Services
        </Heading>
        <p className="hero__subtitle">Your go-to docs for building and scaling at Voynich</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/onboarding">
            Start Here →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Internal engineering documentation for onboarding, architecture, and clean development practices.">
      <HomepageHeader />
      <main>
        <section className="container margin-top--lg">
          <div className="text--center">
            <Heading as="h2">Welcome to the Engineering Docs 📘</Heading>
            <p className="padding-horiz--md">
              This space is your starting point as an intern or team member at <strong>Voynich Services</strong>. Whether you're onboarding, debugging, or exploring the codebase — you're in the right place.
            </p>
            <p>
              We use the <strong>FARM stack</strong>: FastAPI, React, and MongoDB. You'll find setup guides, clean code principles, and tasks designed to help you get productive from day one.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}