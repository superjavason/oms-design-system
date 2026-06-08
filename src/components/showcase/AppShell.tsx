import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Search,
  Github,
  BookOpen,
  Menu,
  X,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
  Moon,
} from "lucide-react";
import { NAV, findGroupTitle, findItem } from "@/data/nav";
import { cn } from "@/lib/cn";
import { useTheme } from "@/lib/useTheme";

const COLLAPSE_KEY = "oms-sidebar-collapsed";

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
  const { theme, toggle: toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  // PC 端侧边栏收拢态（持久化到 localStorage）
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(COLLAPSE_KEY) === "1";
  });

  const toggleCollapsed = () =>
    setCollapsed((prev) => {
      const next = !prev;
      window.localStorage.setItem(COLLAPSE_KEY, next ? "1" : "0");
      return next;
    });

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
    <div className={cn("app-shell", collapsed && "sidebar-collapsed")}>
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
          title={collapsed ? "东鹏 OMS · 设计系统 v2.1" : undefined}
        >
          <span className="docs-brand-mark">东</span>
          <span className="docs-brand-text" style={{ textAlign: "left" }}>
            <strong>东鹏 OMS</strong>
            <span>设计系统 v2.1</span>
          </span>
        </button>

        <div className="docs-search">
          {/* 收拢态：搜索框塌缩为图标按钮，点击即展开侧边栏 */}
          <button
            type="button"
            className="docs-search-icon"
            onClick={() => collapsed && toggleCollapsed()}
            aria-label="展开菜单以搜索"
            tabIndex={collapsed ? 0 : -1}
          >
            <Search className="icon-sm" aria-hidden />
          </button>
          <input
            className="input"
            placeholder="搜索组件…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="搜索组件"
            tabIndex={collapsed ? -1 : 0}
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
                    title={collapsed ? it.label : undefined}
                  >
                    <Icon size={16} aria-hidden />
                    <span className="nav-label">{it.label}</span>
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
            {/* PC 端：侧边栏收拢 / 展开 */}
            <button
              className="btn btn-ghost btn-icon btn-sm sidebar-toggle-btn"
              onClick={toggleCollapsed}
              aria-label={collapsed ? "展开侧边栏" : "收拢侧边栏"}
              aria-expanded={!collapsed}
              title={collapsed ? "展开侧边栏" : "收拢侧边栏"}
            >
              {collapsed ? (
                <PanelLeftOpen className="icon-md" aria-hidden />
              ) : (
                <PanelLeftClose className="icon-md" aria-hidden />
              )}
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
            <button
              className="btn btn-ghost btn-icon btn-sm"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
              title={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
            >
              {theme === "dark" ? (
                <Sun className="icon-md" aria-hidden />
              ) : (
                <Moon className="icon-md" aria-hidden />
              )}
            </button>
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
