export interface Article {
    id: number;
    title: string;
    date: string;
    author: string;
    summary?: string;
    contentSections: { title: string; text: string; code?: string }[];
    tags: string[];
  }
  
  const articlesData: Article[] = [
    {
      id: 1,
      title: "CSS Grid 入门",
      date: "2026-04-23",
      author: "zoen",
      summary: "Grid布局是现代CSS布局神器，本文带你掌握二维布局的核心。",
      contentSections: [
        { title: "什么是Grid布局？", text: "Grid 是二维布局系统，可同时处理行和列。通过将容器定义为网格，可以轻松地将子元素放置到任何你想要的位置。" }
      ],
      tags: ["CSS", "布局"]

    },
    {
      id: 2,
      title: "TypeScript 泛型实战教程",
      date: "2026-04-23",
      author: "zoen",
      summary: "泛型是 TypeScript 的核心特性之一，本文带你从基础到进阶，彻底搞懂泛型的设计思想与实战用法，写出类型安全且可复用的代码。",
      contentSections: [
        { title: "什么是泛型？", text: "泛型是 TypeScript 的核心特性之一，本文带你从基础到进阶，彻底搞懂泛型的设计思想与实战用法，写出类型安全且可复用的代码。" }
      ],
      tags: ["TypeScript", "泛型"]
    },
    {
      id: 3,
      title: "理解 JavaScript 闭包",
      date: "2026-04-23",
      author: "zoen",
      summary: "闭包是JavaScript中最重要的概念之一，本文带你彻底理解闭包原理及应用。",
      contentSections: [
        { title: "什么是闭包？", text: "闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式是在一个函数内部创建另一个函数。" },
        { title: "实际应用场景", text: "闭包常用于模块化、数据私有化、函数柯里化等场景。例如，可以使用闭包创建私有变量：", code: `function createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}` }
      ],
      tags: ["JavaScript", "前端"]
    }
  ];
  
  export function getArticles(): Article[] {
    return articlesData;
  }
  
  export function getArticleById(id: number): Article | undefined {
    return articlesData.find(article => article.id === id);
  }