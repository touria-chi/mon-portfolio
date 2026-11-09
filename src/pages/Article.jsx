import React from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../data.js";
import { formatDate } from "./Blog.jsx";

const tagLabel = { dev: "Full-Stack", sf: "Salesforce" };

function Block({ b }) {
  switch (b.type) {
    case "h":
      return <h2>{b.text}</h2>;
    case "ul":
      return (
        <ul className="art-list">
          {b.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="art-steps">
          {b.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      );
    case "tip":
      return <aside className="art-tip">💡 {b.text}</aside>;
    default:
      return <p>{b.text}</p>;
  }
}

export default function Article() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="page">
        <p className="empty">Article introuvable.</p>
        <Link to="/blog" className="btn ghost">← Retour au blog</Link>
      </div>
    );
  }

  return (
    <div className="page article">
      <Link to="/blog" className="back">← Tous les articles</Link>
      <div className="post-meta">
        <span className={`post-tag ${post.tag}`}>{tagLabel[post.tag]}</span>
        <span>{post.level}</span>
        <span>· {post.readTime} de lecture</span>
        <span>· {formatDate(post.date)}</span>
      </div>
      <h1>{post.title}</h1>
      <div className="art-body">
        {post.content.map((b, i) => (
          <Block key={i} b={b} />
        ))}
      </div>
      <div className="art-end">
        <Link to="/blog" className="btn ghost">← Retour au blog</Link>
        <Link to="/contact" className="btn primary">Discutons de vos projets →</Link>
      </div>
    </div>
  );
}