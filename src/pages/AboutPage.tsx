import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>关于我 | 我的技术博客</title>
        <meta name="description" content="全栈工程师zoen，分享前端工程化与性能优化心得。" />
      </Helmet>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>关于我</h1>
        <div className={styles.aboutContent}>
          <p>👋 你好，我是zoen，不是一名热爱技术的全栈开发工程师。</p>
          <p>拥有0年一线大厂经验，目前专注于前端工程化、性能优化和React生态。</p>
          <p>这个博客记录我的学习心得、实战技巧，希望能帮助到同样热爱前端的你。</p>
          <p>📧 联系我：1234567890@qq.com</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;