import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Search, Github, BookOpen, Menu, X } from "lucide-react";
import { NAV, findGroupTitle, findItem } from "@/data/nav";
import { cn } from "@/lib/cn";

export function AppShell({
  current,
  onNavigate,
  children,
}: {
  current: string;
  onNavigate: (id: string) => void;
  children: ReactNode;
}) {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // 选中菜单后关闭移动端抽屉
  const navigate = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  // 抽屉打开时锁定背景滚动，Esc 关闭
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const filteredNav = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return NAV;
    return NAV.map((g) => ({
      ...g,
      items: g.items.filter((i) => i.label.toLowerCase().includes(q)),
    })).filter((g) => g.items.length > 0);
  }, [query]);

  const groupTitle = findGroupTitle(current);
  const item = findItem(current);

  return (
    <div className="app-shell">
      {/* 移动端抽屉遮罩 */}
      <div
        className={cn("sidebar-backdrop", mobileOpen && "show")}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      <aside className={cn("docs-sidebar", mobileOpen && "mobile-open")}>
        <button
          className="btn btn-ghost btn-icon btn-sm sidebar-close-btn"
          onClick={() => setMobileOpen(false)}
          aria-label="关闭菜单"
        >
          <X className="icon-md" aria-hidden />
        </button>
        <button
          className="docs-brand"
          onClick={() => navigate("overview")}
          style={{ border: "none", background: "transparent", width: "100%" }}
        >
          <span className="docs-brand-mark">东</span>
          <span className="docs-brand-text" style={{ textAlign: "left" }}>
            <strong>东鹏 OMS</strong>
            <span>设计系统 v2.1</span>
          </span>
        </button>

        <div className="docs-search">
          <Search className="icon-sm" aria-hidden />
          <input
            className="input"
            placeholder="搜索组件…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="搜索组件"
          />
        </div>

        <nav aria-label="主导航">
          {filteredNav.map((group) => (
            <div className="nav-group" key={group.title}>
              <div className="nav-group-title">{group.title}</div>
              {group.items.map((it) => {
                const Icon = it.icon;
                return (
                  <button
                    key={it.id}
                    className={cn("nav-link", current === it.id && "active")}
                    onClick={() => navigate(it.id)}
                    aria-current={current === it.id ? "page" : undefined}
                  >
                    <Icon size={16} aria-hidden />
                    {it.label}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>

      <div className="docs-main">
        <header className="docs-topbar">
          <div className="docs-breadcrumb">
            <button
              className="btn btn-ghost btn-icon btn-sm mobile-menu-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="打开菜单"
              aria-expanded={mobileOpen}
            >
              <Menu className="icon-md" aria-hidden />
            </button>
            <BookOpen className="icon-sm topbar-book" aria-hidden />
            {groupTitle && <span>{groupTitle}</span>}
            {item && (
              <>
                <span aria-hidden>/</span>
                <strong>{item.label}</strong>
              </>
            )}
          </div>
          <div className="docs-topbar-actions">
            <a
              className="btn btn-ghost btn-sm"
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noreferrer"
            >
              shadcn/ui
            </a>
            <a
              className="btn btn-outline btn-sm"
              href="https://lucide.dev/icons/"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="icon-sm" aria-hidden />
              Lucide
            </a>
          </div>
        </header>

        <main className="docs-content" key={current}>
          {children}
        </main>
      </div>
    </div>
  );
}
